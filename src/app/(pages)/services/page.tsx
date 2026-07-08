import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';

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
] as const;

type Service = (typeof services)[number];

const serviceImageByTopic: Record<Service, string> = {
  'Enterprise AI Consulting':
    '/site-images/services/enterprise-ai-consulting.webp',
  'Generative AI':
    '/site-images/services/generative-ai.webp',
  'Agentic AI':
    '/site-images/services/agentic-ai.webp',
  'LLM Development':
    '/site-images/services/llm-development.webp',
  'AI Governance':
    '/site-images/services/ai-governance.webp',
  'Digital Transformation':
    '/site-images/services/digital-transformation.webp',
  'Enterprise Architecture':
    '/site-images/services/enterprise-architecture.webp',
  'Solution Architecture':
    '/site-images/services/solution-architecture.webp',
  'Technical Consulting':
    '/site-images/services/technical-consulting.webp',
  'Cloud Consulting':
    '/site-images/services/cloud-consulting.webp',
  'Infrastructure Modernization':
    '/site-images/services/infrastructure-modernization.webp',
  'API Development':
    '/site-images/services/api-development.webp',
  Automation:
    '/site-images/services/automation.webp',
  DevOps:
    '/site-images/services/devops.webp',
  'Platform Engineering':
    '/site-images/services/platform-engineering.webp',
  'System Integration':
    '/site-images/services/system-integration.webp',
  'Contact Center Consulting':
    '/site-images/services/contact-center-consulting.webp',
  'Avaya Consulting':
    '/site-images/services/avaya-consulting.webp',
  'Genesys Consulting':
    '/site-images/services/genesys-consulting.webp',
  'Cisco Contact Center':
    '/site-images/services/cisco-contact-center.webp',
  'Microsoft Copilot Consulting':
    '/site-images/services/microsoft-copilot-consulting.webp',
  'AI Readiness Assessment':
    '/site-images/services/ai-readiness-assessment.webp',
  Training:
    '/site-images/services/training.webp',
  'Managed Services':
    '/site-images/services/managed-services.webp',
  Support:
    '/site-images/services/support.webp',
  'Health Checks':
    '/site-images/services/health-checks.webp',
  'Performance Optimization':
    '/site-images/services/performance-optimization.webp',
  'Migration Services':
    '/site-images/services/migration-services.webp',
  'Architecture Review':
    '/site-images/services/architecture-review.webp'
};

const serviceMeta: Record<string, { iconKey: string; accent: 'blue' | 'indigo' | 'emerald' | 'cyan' }> = {
  'Enterprise AI Consulting': { iconKey: 'brain', accent: 'blue' },
  'Generative AI': { iconKey: 'bot', accent: 'indigo' },
  'Agentic AI': { iconKey: 'workflow', accent: 'cyan' },
  'LLM Development': { iconKey: 'database', accent: 'blue' },
  'AI Governance': { iconKey: 'shield', accent: 'indigo' },
  DevOps: { iconKey: 'cog', accent: 'cyan' },
  'Platform Engineering': { iconKey: 'layers', accent: 'emerald' },
  'Cloud Consulting': { iconKey: 'cloud', accent: 'blue' },
  'Contact Center Consulting': { iconKey: 'contact', accent: 'indigo' }
};

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
              <Reveal key={s}>
                <TopicCard
                  title={s}
                  description="Structured consulting engagement with architecture, implementation, and operational guidance."
                  iconKey={((serviceMeta[s]?.iconKey ?? 'layers') as any)}
                  accent={serviceMeta[s]?.accent ?? 'blue'}
                  imageSrc={serviceImageByTopic[s]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
