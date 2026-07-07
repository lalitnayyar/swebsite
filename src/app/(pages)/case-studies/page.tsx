import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">Case Studies</h1>
          <p className="text-sm text-muted-foreground">
            Professional consulting case study format (challenge, assessment, architecture, implementation,
            impact) will be rendered from file-based content.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
