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
    'https://source.unsplash.com/1600x900/?telecommunications,cell-tower&sig=301',
  Government:
    'https://source.unsplash.com/1600x900/?government,capitol,building&sig=302',
  Healthcare:
    'https://source.unsplash.com/1600x900/?hospital,doctor,healthcare&sig=303',
  Banking:
    'https://source.unsplash.com/1600x900/?bank,finance,building&sig=304',
  Insurance:
    'https://source.unsplash.com/1600x900/?insurance,policy,documents&sig=305',
  Retail:
    'https://source.unsplash.com/1600x900/?retail,store,shopping&sig=306',
  Manufacturing:
    'https://source.unsplash.com/1600x900/?manufacturing,factory,industry&sig=307',
  Education:
    'https://source.unsplash.com/1600x900/?education,classroom,students&sig=308',
  Energy:
    'https://source.unsplash.com/1600x900/?energy,power-grid,renewable&sig=309',
  Airlines:
    'https://source.unsplash.com/1600x900/?airplane,aircraft,airport&sig=310',
  Transportation:
    'https://source.unsplash.com/1600x900/?transportation,logistics,truck&sig=311',
  'Public Sector':
    'https://source.unsplash.com/1600x900/?public-sector,civic,community&sig=312'
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
