import * as React from 'react';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';

const serviceImages = [
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70'
];

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
            {services.map((s, idx) => (
              <Reveal key={s}>
                <TopicCard
                  title={s}
                  description="Structured consulting engagement with architecture, implementation, and operational guidance."
                  iconKey={((serviceMeta[s]?.iconKey ?? 'layers') as any)}
                  accent={serviceMeta[s]?.accent ?? 'blue'}
                  imageSrc={serviceImages[idx % serviceImages.length]}
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
