import { siteConfig } from '@/config/site';
import { getAllBlogPosts } from '@/lib/mdx';

function escapeXml(str: string) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const posts = getAllBlogPosts();

  const items = posts
    .map((p) => {
      const link = `${siteConfig.url}/blog/${p.slug}`;
      return `\n<item>\n<title>${escapeXml(p.frontmatter.title)}</title>\n<link>${link}</link>\n<guid>${link}</guid>\n<pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>\n<description>${escapeXml(p.frontmatter.description)}</description>\n</item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n<title>${escapeXml(
    siteConfig.name
  )}</title>\n<link>${siteConfig.url}</link>\n<description>${escapeXml(
    siteConfig.description
  )}</description>\n${items}\n</channel>\n</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
