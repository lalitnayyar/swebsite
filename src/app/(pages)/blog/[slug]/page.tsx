import { notFound } from 'next/navigation';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/mdx';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const post = getBlogPostBySlug(slug);

    return (
      <div className="min-h-dvh">
        <SiteHeader />
        <main className="container py-16">
          <article className="prose prose-slate max-w-3xl dark:prose-invert">
            <h1>{post.frontmatter.title}</h1>
            <p className="lead">{post.frontmatter.description}</p>
            <div className="text-sm text-muted-foreground">{post.frontmatter.date}</div>
            <div className="mt-10 rounded-2xl border bg-background p-6 text-sm text-muted-foreground shadow-soft">
              MDX rendering pipeline placeholder. The post content is loaded from the filesystem and will
              be rendered using a compiled MDX setup in the next iteration.
            </div>
          </article>
        </main>
        <SiteFooter />
      </div>
    );
  } catch {
    notFound();
  }
}
