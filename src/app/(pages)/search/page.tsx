import Link from 'next/link';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function SearchPage({ searchParams }: { searchParams?: { q?: string } }) {
  const q = searchParams?.q ?? '';

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Search</h1>
            <p className="text-sm text-muted-foreground">
              Site search placeholder. This will be wired to a local index or external search service.
            </p>
          </div>

          <form className="flex gap-3">
            <label htmlFor="q" className="sr-only">
              Search
            </label>
            <input
              id="q"
              name="q"
              defaultValue={q}
              placeholder="Search pages, projects, articles"
              className="h-11 flex-1 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <button
              className="h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
              type="submit"
            >
              Search
            </button>
          </form>

          {q ? (
            <div className="rounded-2xl border bg-background p-6 text-sm text-muted-foreground shadow-soft">
              No results yet. For now, navigate to:
              <div className="mt-3 grid gap-2">
                <Link href="/projects" className="text-primary hover:underline">
                  Projects
                </Link>
                <Link href="/blog" className="text-primary hover:underline">
                  Blog
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
