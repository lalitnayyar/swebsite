import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  category?: string;
  author?: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogDir, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);

  const rawDate = (data as { date?: unknown }).date;
  const normalizedDate =
    rawDate instanceof Date
      ? rawDate.toISOString().slice(0, 10)
      : typeof rawDate === 'string'
        ? rawDate
        : rawDate != null
          ? String(rawDate)
          : '';

  const frontmatter: BlogFrontmatter = {
    ...(data as Omit<BlogFrontmatter, 'date'>),
    date: normalizedDate
  };

  return {
    slug,
    frontmatter,
    content
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogPostBySlug(slug))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}
