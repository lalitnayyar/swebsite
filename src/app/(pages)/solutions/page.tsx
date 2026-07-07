import * as React from 'react';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';
import {
  Bot,
  Database,
  FileText,
  LayoutGrid,
  MessageSquare,
  Search,
  Shield,
  Workflow
} from 'lucide-react';

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

const solutionImages = [
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70'
];

const solutionMeta: Record<string, { icon: React.ElementType; accent: 'blue' | 'indigo' | 'emerald' | 'cyan' }> = {
  'Enterprise AI Assistant': { icon: Bot, accent: 'indigo' },
  'Knowledge Management': { icon: Database, accent: 'blue' },
  'Customer Support AI': { icon: MessageSquare, accent: 'cyan' },
  'Call Center AI': { icon: MessageSquare, accent: 'indigo' },
  'Speech Analytics': { icon: Shield, accent: 'blue' },
  Chatbots: { icon: Bot, accent: 'cyan' },
  'Voice Bots': { icon: Bot, accent: 'indigo' },
  'Document Intelligence': { icon: FileText, accent: 'emerald' },
  'RAG Systems': { icon: Search, accent: 'blue' },
  'Multi Agent Systems': { icon: Workflow, accent: 'cyan' },
  'Workflow Automation': { icon: Workflow, accent: 'emerald' },
  'Approval Automation': { icon: Workflow, accent: 'indigo' },
  'Reporting Platform': { icon: LayoutGrid, accent: 'blue' },
  'AI Dashboards': { icon: LayoutGrid, accent: 'indigo' },
  'Enterprise Search': { icon: Search, accent: 'cyan' },
  'Developer Portal': { icon: LayoutGrid, accent: 'blue' }
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
            {solutions.map((s, idx) => (
              <Reveal key={s}>
                <TopicCard
                  title={s}
                  description="Architecture-led implementation with governance, observability, and operational readiness."
                  icon={solutionMeta[s]?.icon ?? LayoutGrid}
                  accent={solutionMeta[s]?.accent ?? 'blue'}
                  imageSrc={solutionImages[idx % solutionImages.length]}
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
