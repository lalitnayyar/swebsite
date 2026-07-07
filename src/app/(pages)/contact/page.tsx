import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
            <p className="text-sm text-muted-foreground">
              Provide a brief overview and I will respond with a proposed engagement approach.
            </p>
            <div className="rounded-2xl border bg-background p-6 shadow-soft">
              <div className="text-sm font-semibold">Scheduling</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Google Calendar integration placeholder. Use the consultation page to request a meeting.
              </p>
            </div>
          </div>

          <form className="rounded-2xl border bg-background p-6 shadow-soft">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="h-11 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-11 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  className="h-11 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="rounded-md border bg-background p-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
              </div>
              <Button type="submit">Send</Button>
              <p className="text-xs text-muted-foreground">
                File upload, maps, and rate limiting placeholders will be added in the production hardening
                phase.
              </p>
            </div>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
