import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const services = [
  'Enterprise AI Consulting',
  'Generative AI',
  'Agentic AI',
  'LLM Development',
  'AI Governance',
  'Digital Transformation',
  'Enterprise Architecture',
  'Solution Architecture',
  'Technical Consulting',
  'Cloud Consulting',
  'Infrastructure Modernization',
  'API Development',
  'Automation',
  'DevOps',
  'Platform Engineering',
  'System Integration',
  'Contact Center Consulting',
  'Avaya Consulting',
  'Genesys Consulting',
  'Cisco Contact Center',
  'Microsoft Copilot Consulting',
  'AI Readiness Assessment',
  'Training',
  'Managed Services',
  'Support',
  'Health Checks',
  'Performance Optimization',
  'Migration Services',
  'Architecture Review'
];

export default function ServicesPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
            <p className="text-sm text-muted-foreground">
              Advisory and delivery services designed for enterprise environments.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div key={s} className="rounded-2xl border bg-background p-5 shadow-soft">
                <div className="text-sm font-semibold">{s}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Structured consulting engagement with architecture, implementation, and operational
                  guidance.
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
