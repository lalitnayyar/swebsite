import Link from 'next/link';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { getAllBlogPosts } from '@/lib/mdx';

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-4xl space-y-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
            <p className="text-sm text-muted-foreground">
              Architecture notes, delivery patterns, and pragmatic guidance for enterprise AI adoption.
            </p>
          </div>

          <div className="grid gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl border bg-background p-6 shadow-soft">
                <div className="text-xs text-muted-foreground">{p.frontmatter.date}</div>
                <h2 className="mt-2 text-lg font-semibold tracking-tight">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.frontmatter.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.frontmatter.description}</p>
              </article>
            ))}
            {posts.length === 0 ? (
              <div className="rounded-2xl border bg-background p-6 text-sm text-muted-foreground shadow-soft">
                No posts yet.
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
