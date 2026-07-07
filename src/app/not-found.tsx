import Link from 'next/link';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-24">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
          <p className="text-sm text-muted-foreground">
            The page you requested does not exist or has moved.
          </p>
          <Button asChild>
            <Link href="/">Return home</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
