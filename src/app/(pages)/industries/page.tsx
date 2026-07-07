import * as React from 'react';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';

const industryImages = [
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1581091215367-59ab6b6f7b3f?auto=format&fit=crop&w=1600&q=70',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70'
];

const industries = [
  'Telecommunications',
  'Government',
  'Healthcare',
  'Banking',
  'Insurance',
  'Retail',
  'Manufacturing',
  'Education',
  'Energy',
  'Airlines',
  'Transportation',
  'Public Sector'
];

const industryMeta: Record<string, { iconKey: string; accent: 'blue' | 'indigo' | 'emerald' | 'cyan' }> = {
  Telecommunications: { iconKey: 'signal', accent: 'cyan' },
  Government: { iconKey: 'building2', accent: 'indigo' },
  Healthcare: { iconKey: 'heartPulse', accent: 'emerald' },
  Banking: { iconKey: 'landmark', accent: 'blue' },
  Insurance: { iconKey: 'shieldCheck', accent: 'indigo' },
  Retail: { iconKey: 'shoppingBag', accent: 'cyan' },
  Manufacturing: { iconKey: 'factory', accent: 'emerald' },
  Education: { iconKey: 'graduationCap', accent: 'blue' },
  Energy: { iconKey: 'fuel', accent: 'emerald' },
  Airlines: { iconKey: 'plane', accent: 'cyan' },
  Transportation: { iconKey: 'truck', accent: 'blue' },
  'Public Sector': { iconKey: 'users', accent: 'indigo' }
};

export default function IndustriesPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Industries</h1>
            <p className="text-sm text-muted-foreground">
              Domain-aware delivery patterns, compliance considerations, and measurable outcomes.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((i, idx) => (
              <Reveal key={i}>
                <TopicCard
                  title={i}
                  description="Engagement approach tailored to operational constraints and regulatory environment."
                  iconKey={((industryMeta[i]?.iconKey ?? 'users') as any)}
                  accent={industryMeta[i]?.accent ?? 'blue'}
                  imageSrc={industryImages[idx % industryImages.length]}
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
