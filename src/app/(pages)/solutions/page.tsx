import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';

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
] as const;

type Solution = (typeof solutions)[number];

const solutionImageByTopic: Record<Solution, string> = {
  'Enterprise AI Assistant':
    'https://source.unsplash.com/1600x900/?virtual-assistant,office&sig=101',
  'Knowledge Management':
    'https://source.unsplash.com/1600x900/?knowledge-base,documents&sig=102',
  'Customer Support AI':
    'https://source.unsplash.com/1600x900/?customer-support,helpdesk&sig=103',
  'Call Center AI':
    'https://source.unsplash.com/1600x900/?call-center,headset&sig=104',
  'Speech Analytics':
    'https://source.unsplash.com/1600x900/?audio-waveform,analytics&sig=105',
  Chatbots:
    'https://source.unsplash.com/1600x900/?chat,ui,messaging&sig=106',
  'Voice Bots':
    'https://source.unsplash.com/1600x900/?microphone,headset,voice&sig=107',
  'Document Intelligence':
    'https://source.unsplash.com/1600x900/?document,scanner,ocr&sig=108',
  'RAG Systems':
    'https://source.unsplash.com/1600x900/?search,documents,ai&sig=109',
  'Multi Agent Systems':
    'https://source.unsplash.com/1600x900/?workflow,automation,team&sig=110',
  'Workflow Automation':
    'https://source.unsplash.com/1600x900/?process,workflow,automation&sig=111',
  'Approval Automation':
    'https://source.unsplash.com/1600x900/?approval,signature,document&sig=112',
  'Reporting Platform':
    'https://source.unsplash.com/1600x900/?reporting,dashboard,charts&sig=113',
  'AI Dashboards':
    'https://source.unsplash.com/1600x900/?analytics,dashboard,metrics&sig=114',
  'Incident Management':
    'https://source.unsplash.com/1600x900/?incident,response,operations&sig=115',
  'Ticket Automation':
    'https://source.unsplash.com/1600x900/?ticketing,helpdesk,software&sig=116',
  'Monitoring Platform':
    'https://source.unsplash.com/1600x900/?monitoring,observability,server&sig=117',
  'Enterprise Search':
    'https://source.unsplash.com/1600x900/?enterprise-search,query&sig=118',
  'Developer Portal':
    'https://source.unsplash.com/1600x900/?developer,portal,code&sig=119',
  'Internal Portals':
    'https://source.unsplash.com/1600x900/?intranet,office,portal&sig=120',
  'Custom Software Development':
    'https://source.unsplash.com/1600x900/?software-development,programming&sig=121'
};

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
                  imageSrc={solutionImageByTopic[s]}
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
