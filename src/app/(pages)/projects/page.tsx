import Link from 'next/link';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { getAllProjects } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage({
  searchParams
}: {
  searchParams?: { q?: string; tag?: string };
}) {
  const all = getAllProjects();
  const q = (searchParams?.q ?? '').toLowerCase();
  const tag = searchParams?.tag;

  const filtered = all.filter((p) => {
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));

    const matchesTag = !tag || p.tags.includes(tag);

    return matchesQ && matchesTag;
  });

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-5xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <p className="text-sm text-muted-foreground">
              A portfolio view designed for enterprise stakeholders: problem framing, architecture, delivery,
              and measurable outcomes.
            </p>
          </div>

          <form className="grid gap-3 rounded-2xl border bg-background p-4 shadow-soft md:grid-cols-3">
            <label className="sr-only" htmlFor="q">
              Search projects
            </label>
            <input
              id="q"
              name="q"
              defaultValue={searchParams?.q ?? ''}
              placeholder="Search by title, tag, or capability"
              className="h-11 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:col-span-2"
            />
            <button
              className="h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <article key={p.slug} className="rounded-2xl border bg-background p-6 shadow-soft">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{p.category}</Badge>
                  {p.tags.slice(0, 3).map((t) => (
                    <Link
                      key={t}
                      href={`/projects?tag=${encodeURIComponent(t)}`}
                      className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                    >
                      {t}
                    </Link>
                  ))}
                </div>
                <h2 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4 text-sm">
                  <span className="text-muted-foreground">Tech:</span>{' '}
                  <span className="text-foreground">{p.technologyStack.join(', ')}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a className="text-primary hover:underline" href={p.demoUrl}>
                    Demo
                  </a>
                  <a className="text-primary hover:underline" href={p.githubUrl}>
                    GitHub
                  </a>
                  <a className="text-primary hover:underline" href={p.documentationUrl}>
                    Docs
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border bg-background p-6 text-sm text-muted-foreground shadow-soft">
              No projects match the current filters.
            </div>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
