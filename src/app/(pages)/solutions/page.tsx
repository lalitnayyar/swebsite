import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';

const solutionImageByTopic: Record<string, string> = {
  'Enterprise AI Assistant':
    'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=70',
  'Knowledge Management':
    'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=70',
  'Customer Support AI':
    'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1600&q=70',
  'Call Center AI':
    'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=70',
  'Speech Analytics':
    'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1600&q=70',
  Chatbots:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=70',
  'Voice Bots':
    'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1600&q=70',
  'Document Intelligence':
    'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=70',
  'RAG Systems':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=70',
  'Multi Agent Systems':
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=70',
  'Workflow Automation':
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=70',
  'Approval Automation':
    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=70',
  'Reporting Platform':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70',
  'AI Dashboards':
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=70',
  'Incident Management':
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70',
  'Ticket Automation':
    'https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=70',
  'Monitoring Platform':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=70',
  'Enterprise Search':
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=70',
  'Developer Portal':
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=70',
  'Internal Portals':
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=70',
  'Custom Software Development':
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=70'
};

const fallbackSolutionImage =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70';

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

const solutionMeta: Record<string, { iconKey: string; accent: 'blue' | 'indigo' | 'emerald' | 'cyan' }> = {
  'Enterprise AI Assistant': { iconKey: 'bot', accent: 'indigo' },
  'Knowledge Management': { iconKey: 'database', accent: 'blue' },
  'Customer Support AI': { iconKey: 'messageSquare', accent: 'cyan' },
  'Call Center AI': { iconKey: 'messageSquare', accent: 'indigo' },
  'Speech Analytics': { iconKey: 'shield', accent: 'blue' },
  Chatbots: { iconKey: 'bot', accent: 'cyan' },
  'Voice Bots': { iconKey: 'bot', accent: 'indigo' },
  'Document Intelligence': { iconKey: 'fileText', accent: 'emerald' },
  'RAG Systems': { iconKey: 'search', accent: 'blue' },
  'Multi Agent Systems': { iconKey: 'workflow', accent: 'cyan' },
  'Workflow Automation': { iconKey: 'workflow', accent: 'emerald' },
  'Approval Automation': { iconKey: 'workflow', accent: 'indigo' },
  'Reporting Platform': { iconKey: 'layoutGrid', accent: 'blue' },
  'AI Dashboards': { iconKey: 'layoutGrid', accent: 'indigo' },
  'Enterprise Search': { iconKey: 'search', accent: 'cyan' },
  'Developer Portal': { iconKey: 'layoutGrid', accent: 'blue' }
};

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
              <Reveal key={s}>
                <TopicCard
                  title={s}
                  description="Architecture-led implementation with governance, observability, and operational readiness."
                  iconKey={((solutionMeta[s]?.iconKey ?? 'layoutGrid') as any)}
                  accent={solutionMeta[s]?.accent ?? 'blue'}
                  imageSrc={solutionImageByTopic[s] ?? fallbackSolutionImage}
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
