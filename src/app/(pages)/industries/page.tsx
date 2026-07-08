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
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=70',
  Government:
    'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=70',
  Healthcare:
    'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1600&q=70',
  Banking:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70',
  Insurance:
    'https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1600&q=70',
  Retail:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=70',
  Manufacturing:
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=70',
  Education:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=70',
  Energy:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=70',
  Airlines:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=70',
  Transportation:
    'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=70',
  'Public Sector':
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=70'
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
