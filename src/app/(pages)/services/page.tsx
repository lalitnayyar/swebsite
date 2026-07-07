import * as React from 'react';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';
import {
  Bot,
  Brain,
  Cloud,
  Cog,
  Contact,
  Database,
  Layers,
  Shield,
  Workflow
} from 'lucide-react';

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

const serviceMeta: Record<string, { icon: React.ElementType; accent: 'blue' | 'indigo' | 'emerald' | 'cyan' }> = {
  'Enterprise AI Consulting': { icon: Brain, accent: 'blue' },
  'Generative AI': { icon: Bot, accent: 'indigo' },
  'Agentic AI': { icon: Workflow, accent: 'cyan' },
  'LLM Development': { icon: Database, accent: 'blue' },
  'AI Governance': { icon: Shield, accent: 'indigo' },
  DevOps: { icon: Cog, accent: 'cyan' },
  'Platform Engineering': { icon: Layers, accent: 'emerald' },
  'Cloud Consulting': { icon: Cloud, accent: 'blue' },
  'Contact Center Consulting': { icon: Contact, accent: 'indigo' }
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
                  icon={serviceMeta[s]?.icon ?? Layers}
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
