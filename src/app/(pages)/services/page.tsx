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
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=70',
  'Generative AI':
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=70',
  'Agentic AI':
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=70',
  'LLM Development':
    'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=70',
  'AI Governance':
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=70',
  'Digital Transformation':
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=70',
  'Enterprise Architecture':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=70',
  'Solution Architecture':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70',
  'Technical Consulting':
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=70',
  'Cloud Consulting':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=70',
  'Infrastructure Modernization':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=70',
  'API Development':
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=70',
  Automation:
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=70',
  DevOps:
    'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1600&q=70',
  'Platform Engineering':
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70',
  'System Integration':
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=70',
  'Contact Center Consulting':
    'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1600&q=70',
  'Avaya Consulting':
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=70',
  'Genesys Consulting':
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=70',
  'Cisco Contact Center':
    'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=70',
  'Microsoft Copilot Consulting':
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=70',
  'AI Readiness Assessment':
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=70',
  Training:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=70',
  'Managed Services':
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=70',
  Support:
    'https://images.unsplash.com/photo-1580894894513-541e068a3a67?auto=format&fit=crop&w=1600&q=70',
  'Health Checks':
    'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=70',
  'Performance Optimization':
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=70',
  'Migration Services':
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70',
  'Architecture Review':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=70'
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
