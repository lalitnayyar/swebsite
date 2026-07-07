import fs from 'node:fs';
import path from 'node:path';

function safeRead(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return '';
  }
}

function listFiles(dir: string, exts: string[]): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full, exts));
    if (entry.isFile() && exts.some((e) => entry.name.endsWith(e))) out.push(full);
  }
  return out;
}

export type KnowledgeDoc = {
  id: string;
  title: string;
  text: string;
};

export function buildKnowledgeBase(): KnowledgeDoc[] {
  const base = process.cwd();

  const docs: KnowledgeDoc[] = [];

  const configSite = safeRead(path.join(base, 'src', 'config', 'site.ts'));
  if (configSite) {
    docs.push({ id: 'site-config', title: 'Site configuration', text: configSite });
  }

  const projectsJson = safeRead(path.join(base, 'src', 'content', 'projects.json'));
  if (projectsJson) {
    docs.push({ id: 'projects', title: 'Projects (JSON)', text: projectsJson });
  }

  const blogFiles = listFiles(path.join(base, 'src', 'content', 'blog'), ['.mdx', '.md']);
  for (const file of blogFiles) {
    const txt = safeRead(file);
    if (!txt) continue;
    docs.push({ id: `blog:${path.basename(file)}`, title: `Blog: ${path.basename(file)}`, text: txt });
  }

  return docs;
}

export function selectRelevantDocs(docs: KnowledgeDoc[], query: string, maxDocs = 6): KnowledgeDoc[] {
  const q = query.toLowerCase();
  const scored = docs
    .map((d) => {
      const hay = `${d.title}\n${d.text}`.toLowerCase();
      let score = 0;
      for (const token of q.split(/\s+/).filter(Boolean)) {
        if (token.length < 3) continue;
        if (hay.includes(token)) score += 1;
      }
      return { d, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxDocs)
    .map((x) => x.d);

  return scored;
}
