export const siteConfig = {
  name: 'Symbiotic Technology Solutions',
  tagline: 'Engineering Intelligence. Delivering Enterprise Excellence.',
  description:
    'Enterprise AI consulting and digital transformation partner helping organizations modernize through Generative AI, automation, enterprise architecture, and contact center innovation.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  links: {
    linkedin: 'https://www.linkedin.com/in/lnayyar/',
    github: 'https://github.com/lalitnayyar',
    youtube: 'https://youtube.com'
  }
} as const;
