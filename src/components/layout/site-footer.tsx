import Link from 'next/link';

import { siteConfig } from '@/config/site';

const footer = {
  company: [
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/media', label: 'Media' },
    { href: '/partners', label: 'Partners' }
  ],
  offerings: [
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/projects', label: 'Projects' },
    { href: '/case-studies', label: 'Case Studies' }
  ],
  resources: [
    { href: '/blog', label: 'Blog' },
    { href: '/resources', label: 'Resources' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/certifications', label: 'Certifications' }
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' }
  ]
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-sm font-semibold">{siteConfig.name}</div>
          <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
          <div className="flex gap-4">
            <a
              href={siteConfig.links.linkedin}
              className="text-sm text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.github}
              className="text-sm text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.youtube}
              className="text-sm text-muted-foreground hover:text-foreground"
              aria-label="YouTube"
              rel="noreferrer"
              target="_blank"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-sm font-semibold">Company</div>
            <ul className="space-y-2">
              {footer.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-sm font-semibold">Services</div>
            <ul className="space-y-2">
              {footer.offerings.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-sm font-semibold">Resources</div>
            <ul className="space-y-2">
              {footer.resources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-sm font-semibold">Legal</div>
            <ul className="space-y-2">
              {footer.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
