import Image from 'next/image';
import Link from 'next/link';

import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const stats = [
  { label: 'Years in enterprise delivery', value: '10+' },
  { label: 'Projects delivered', value: '50+' },
  { label: 'Industries served', value: '12+' },
  { label: 'Countries supported', value: '8+' }
];

const logos = ['Microsoft', 'AWS', 'NVIDIA', 'IBM', 'Stripe', 'Cloudflare'];

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-grid [background-size:40px_40px] opacity-50 dark:opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(37,99,235,0.18),transparent_45%),radial-gradient(900px_circle_at_80%_10%,rgba(99,102,241,0.16),transparent_45%)]" />

          <div className="container relative py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="secondary">Enterprise AI Consulting</Badge>
                <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  Engineering Intelligence.
                  <span className="block text-muted-foreground">Delivering Enterprise Excellence.</span>
                </h1>
                <p className="max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
                  Symbiotic Technology Solutions partners with organizations to design and deliver secure,
                  scalable AI and automation capabilities across platforms, products, and contact centers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/book-consultation">Book Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </div>

                <div className="mt-8 grid gap-4 rounded-xl border bg-background/60 p-5 shadow-soft backdrop-blur md:grid-cols-2">
                  {stats.map((s) => (
                    <div key={s.label} className="space-y-1">
                      <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                      <div className="text-sm text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 rounded-[28px] bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(99,102,241,0.10),rgba(255,255,255,0.0))] blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border bg-background/60 shadow-glass backdrop-blur">
                  <div className="p-6">
                    <div className="text-sm font-medium text-muted-foreground">AI Network Overview</div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-20 rounded-xl border bg-[radial-gradient(600px_circle_at_30%_30%,rgba(37,99,235,0.18),transparent_55%)] shadow-soft"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="border-t bg-muted/30 p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Reference Architecture</div>
                      <a
                        href="#"
                        className="text-sm text-primary underline-offset-4 hover:underline"
                        aria-label="Architecture diagram placeholder"
                      >
                        View diagram
                      </a>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Secure, governed, and observable AI systems built for enterprise constraints.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 rounded-2xl border bg-background/60 p-6 shadow-soft backdrop-blur">
              <div className="text-sm font-semibold">Trusted technology ecosystems</div>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                {logos.map((l) => (
                  <div
                    key={l}
                    className="flex h-10 items-center justify-center rounded-lg border bg-background/40 text-sm text-muted-foreground"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight">What we deliver</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Consulting engagements that prioritize measurable outcomes, risk management, and long-term
                operability.
              </p>
            </div>
            <div className="grid gap-6 lg:col-span-2 md:grid-cols-2">
              {[
                {
                  title: 'Enterprise AI Architecture',
                  body: 'Reference architectures, governance models, and delivery blueprints for generative AI and agentic systems.'
                },
                {
                  title: 'Automation & Integration',
                  body: 'Workflow automation, API strategy, and enterprise integration patterns to reduce cycle time.'
                },
                {
                  title: 'Contact Center Innovation',
                  body: 'Avaya, Genesys, Cisco, and Copilot modernization with conversational AI and analytics.'
                },
                {
                  title: 'Modern Platform Engineering',
                  body: 'Cloud modernization, DevOps, observability, and secure-by-design platform foundations.'
                }
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border bg-background p-6 shadow-soft transition-shadow hover:shadow-glass"
                >
                  <div className="text-base font-semibold">{c.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y bg-muted/20">
          <div className="container py-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight">Latest projects & research</h2>
                <p className="text-sm text-muted-foreground">
                  A curated view of solutions delivered across AI, automation, and enterprise engineering.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild variant="outline">
                  <Link href="/projects">Explore portfolio</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">Read the blog</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <article
                  key={i}
                  className="overflow-hidden rounded-2xl border bg-background shadow-soft transition-shadow hover:shadow-glass"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={`https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=60&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                      alt="Enterprise technology placeholder"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={i === 0}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground">Project Spotlight</div>
                    <h3 className="mt-1 text-base font-semibold tracking-tight">
                      Enterprise AI enablement initiative
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Architecture, delivery, and governance patterns for production-grade generative AI.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">Client outcomes</h2>
              <p className="text-sm text-muted-foreground">
                Engagements designed for executive clarity and engineering execution.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Reduce operational friction',
                  body: 'Automate workflows and accelerate service delivery with enterprise-grade guardrails.'
                },
                {
                  title: 'Modernize platforms securely',
                  body: 'Cloud, CI/CD, and observability foundations aligned with compliance requirements.'
                },
                {
                  title: 'Enable governed GenAI',
                  body: 'Bring LLMs into production with security, evaluation, and auditability built-in.'
                },
                {
                  title: 'Improve customer experience',
                  body: 'AI-enabled contact center solutions that enhance responsiveness and analytics.'
                }
              ].map((t) => (
                <div key={t.title} className="rounded-2xl border bg-background p-6 shadow-soft">
                  <div className="text-base font-semibold">{t.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/20">
          <div className="container py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight">Newsletter</h2>
                <p className="text-sm text-muted-foreground">
                  Brief updates on enterprise AI architecture, delivery patterns, and governance.
                </p>
              </div>
              <form className="flex flex-col gap-3 rounded-2xl border bg-background p-6 shadow-soft md:flex-row">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 flex-1 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
