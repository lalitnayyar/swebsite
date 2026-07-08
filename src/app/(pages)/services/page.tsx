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
    'https://source.unsplash.com/1600x900/?ai-consulting,meeting&sig=201',
  'Generative AI':
    'https://source.unsplash.com/1600x900/?generative-ai,technology&sig=202',
  'Agentic AI':
    'https://source.unsplash.com/1600x900/?autonomous,workflow,automation&sig=203',
  'LLM Development':
    'https://source.unsplash.com/1600x900/?software-engineering,code&sig=204',
  'AI Governance':
    'https://source.unsplash.com/1600x900/?governance,compliance,security&sig=205',
  'Digital Transformation':
    'https://source.unsplash.com/1600x900/?digital-transformation,business&sig=206',
  'Enterprise Architecture':
    'https://source.unsplash.com/1600x900/?enterprise-architecture,blueprint&sig=207',
  'Solution Architecture':
    'https://source.unsplash.com/1600x900/?architecture,diagram,design&sig=208',
  'Technical Consulting':
    'https://source.unsplash.com/1600x900/?technical-consulting,workshop&sig=209',
  'Cloud Consulting':
    'https://source.unsplash.com/1600x900/?cloud,datacenter&sig=210',
  'Infrastructure Modernization':
    'https://source.unsplash.com/1600x900/?server,datacenter,rack&sig=211',
  'API Development':
    'https://source.unsplash.com/1600x900/?api,code,backend&sig=212',
  Automation:
    'https://source.unsplash.com/1600x900/?automation,robotic-process&sig=213',
  DevOps:
    'https://source.unsplash.com/1600x900/?devops,ci-cd,pipeline&sig=214',
  'Platform Engineering':
    'https://source.unsplash.com/1600x900/?platform-engineering,kubernetes&sig=215',
  'System Integration':
    'https://source.unsplash.com/1600x900/?system-integration,enterprise&sig=216',
  'Contact Center Consulting':
    'https://source.unsplash.com/1600x900/?contact-center,customer-service&sig=217',
  'Avaya Consulting':
    'https://source.unsplash.com/1600x900/?telephony,call-center&sig=218',
  'Genesys Consulting':
    'https://source.unsplash.com/1600x900/?customer-experience,call-center&sig=219',
  'Cisco Contact Center':
    'https://source.unsplash.com/1600x900/?call-center,workstation&sig=220',
  'Microsoft Copilot Consulting':
    'https://source.unsplash.com/1600x900/?microsoft,productivity,office&sig=221',
  'AI Readiness Assessment':
    'https://source.unsplash.com/1600x900/?assessment,checklist,technology&sig=222',
  Training:
    'https://source.unsplash.com/1600x900/?training,workshop,classroom&sig=223',
  'Managed Services':
    'https://source.unsplash.com/1600x900/?managed-services,it-operations&sig=224',
  Support:
    'https://source.unsplash.com/1600x900/?it-support,helpdesk&sig=225',
  'Health Checks':
    'https://source.unsplash.com/1600x900/?health-check,monitoring,system&sig=226',
  'Performance Optimization':
    'https://source.unsplash.com/1600x900/?performance,optimization,speed&sig=227',
  'Migration Services':
    'https://source.unsplash.com/1600x900/?migration,cloud,transfer&sig=228',
  'Architecture Review':
    'https://source.unsplash.com/1600x900/?architecture-review,audit,planning&sig=229'
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
