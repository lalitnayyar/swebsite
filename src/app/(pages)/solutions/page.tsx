import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const solutions = [
  'Enterprise AI Assistant',
  'Knowledge Management',
  'Customer Support AI',
  'Call Center AI',
  'Speech Analytics',
  'Chatbots',
  'Voice Bots',
  'Document Intelligence',
  'RAG Systems',
  'Multi Agent Systems',
  'Workflow Automation',
  'Approval Automation',
  'Reporting Platform',
  'AI Dashboards',
  'Incident Management',
  'Ticket Automation',
  'Monitoring Platform',
  'Enterprise Search',
  'Developer Portal',
  'Internal Portals',
  'Custom Software Development'
];

export default function SolutionsPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Solutions</h1>
            <p className="text-sm text-muted-foreground">
              Packaged and custom solution accelerators designed for enterprise adoption.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {solutions.map((s) => (
              <div key={s} className="rounded-2xl border bg-background p-5 shadow-soft">
                <div className="text-sm font-semibold">{s}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Architecture-led implementation with governance, observability, and operational readiness.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
