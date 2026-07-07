import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="container py-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
          <p className="text-muted-foreground">
            Symbiotic Technology Solutions helps organizations modernize through Artificial Intelligence,
            Enterprise Automation, Digital Transformation, and Contact Center Innovation.
          </p>
          <div className="rounded-2xl border bg-background p-6 shadow-soft">
            <div className="text-sm font-semibold">Mission</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Helping organizations modernize their business through Artificial Intelligence, Enterprise
              Automation, Digital Transformation, and Contact Center Innovation.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-soft">
            <div className="text-sm font-semibold">Vision</div>
            <p className="mt-2 text-sm text-muted-foreground">
              To become one of the world&apos;s most trusted Enterprise AI and Digital Transformation consulting
              firms.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-soft">
            <div className="text-sm font-semibold">Connect</div>
            <div className="mt-2 flex gap-4 text-sm">
              <a
                href={siteConfig.links.linkedin}
                className="text-muted-foreground hover:text-foreground"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                className="text-muted-foreground hover:text-foreground"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href={siteConfig.links.youtube}
                className="text-muted-foreground hover:text-foreground"
                rel="noreferrer"
                target="_blank"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
