import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Reveal } from '@/components/motion/reveal';
import { TopicCard } from '@/components/marketing/topic-card';

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
] as const;

type Industry = (typeof industries)[number];

const industryImageByTopic: Record<Industry, string> = {
  Telecommunications:
    '/site-images/industries/telecommunications.webp',
  Government:
    '/site-images/industries/government.webp',
  Healthcare:
    '/site-images/industries/healthcare.webp',
  Banking:
    '/site-images/industries/banking.webp',
  Insurance:
    '/site-images/industries/insurance.webp',
  Retail:
    '/site-images/industries/retail.webp',
  Manufacturing:
    '/site-images/industries/manufacturing.webp',
  Education:
    '/site-images/industries/education.webp',
  Energy:
    '/site-images/industries/energy.webp',
  Airlines:
    '/site-images/industries/airlines.webp',
  Transportation:
    '/site-images/industries/transportation.webp',
  'Public Sector':
    '/site-images/industries/public-sector.webp'
};

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
            {industries.map((i) => (
              <Reveal key={i}>
                <TopicCard
                  title={i}
                  description="Engagement approach tailored to operational constraints and regulatory environment."
                  iconKey={((industryMeta[i]?.iconKey ?? 'users') as any)}
                  accent={industryMeta[i]?.accent ?? 'blue'}
                  imageSrc={industryImageByTopic[i]}
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
