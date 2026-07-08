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
    '/site-images/solutions/enterprise-ai-assistant.webp',
  'Knowledge Management':
    '/site-images/solutions/knowledge-management.webp',
  'Customer Support AI':
    '/site-images/solutions/customer-support-ai.webp',
  'Call Center AI':
    '/site-images/solutions/call-center-ai.webp',
  'Speech Analytics':
    '/site-images/solutions/speech-analytics.webp',
  Chatbots:
    '/site-images/solutions/chatbots.webp',
  'Voice Bots':
    '/site-images/solutions/voice-bots.webp',
  'Document Intelligence':
    '/site-images/solutions/document-intelligence.webp',
  'RAG Systems':
    '/site-images/solutions/rag-systems.webp',
  'Multi Agent Systems':
    '/site-images/solutions/multi-agent-systems.webp',
  'Workflow Automation':
    '/site-images/solutions/workflow-automation.webp',
  'Approval Automation':
    '/site-images/solutions/approval-automation.webp',
  'Reporting Platform':
    '/site-images/solutions/reporting-platform.webp',
  'AI Dashboards':
    '/site-images/solutions/ai-dashboards.webp',
  'Incident Management':
    '/site-images/solutions/incident-management.webp',
  'Ticket Automation':
    '/site-images/solutions/ticket-automation.webp',
  'Monitoring Platform':
    '/site-images/solutions/monitoring-platform.webp',
  'Enterprise Search':
    '/site-images/solutions/enterprise-search.webp',
  'Developer Portal':
    '/site-images/solutions/developer-portal.webp',
  'Internal Portals':
    '/site-images/solutions/internal-portals.webp',
  'Custom Software Development':
    '/site-images/solutions/custom-software-development.webp'
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
