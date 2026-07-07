import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export default function TermsPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
          <p className="text-sm text-muted-foreground">
            This is a placeholder terms page. Replace with your finalized legal text.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
