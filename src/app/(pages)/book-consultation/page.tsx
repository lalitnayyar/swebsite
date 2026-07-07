import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Button } from '@/components/ui/button';

export default function BookConsultationPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">Book Consultation</h1>
            <p className="text-sm text-muted-foreground">
              A structured discovery call to align on objectives, constraints, architecture, and next steps.
            </p>
            <div className="rounded-2xl border bg-background p-6 shadow-soft">
              <div className="text-sm font-semibold">Meeting agenda</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>1. Business goals and success metrics</li>
                <li>2. Current systems and constraints</li>
                <li>3. AI/automation opportunities</li>
                <li>4. Delivery plan and governance</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border bg-background p-6 shadow-soft">
              <div className="text-sm font-semibold">Calendar placeholder</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Google Calendar integration placeholder. Replace this panel with your scheduling embed.
              </p>
              <div className="mt-4 h-56 rounded-xl border bg-muted/30" aria-label="Calendar placeholder" />
            </div>

            <div className="rounded-2xl border bg-background p-6 shadow-soft">
              <div className="text-sm font-semibold">Discovery questionnaire</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Use this as an initial intake checklist.
              </p>
              <Button className="mt-4" type="button" variant="outline">
                Download questionnaire (placeholder)
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
