# Symbiotic Technology Solutions Website

Enterprise-grade consulting website for **Symbiotic Technology Solutions**.

Built with:

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn-style UI primitives
- File-based content (JSON/MDX)
- SEO routes (sitemap, robots, RSS)
- Docker + Docker Compose + NGINX (prod compose)
- CI workflow (GitHub Actions)
- Jest + Playwright

## Features

- Modern enterprise UI
  - Light/Dark mode with theme switch
  - Responsive layout (header/footer, premium styling)
  - Accessible form patterns and keyboard-friendly UI

- Content-first architecture (no database required)
  - Projects stored as JSON (`src/content/projects.json`)
  - Blog posts stored as MDX (`src/content/blog/*.mdx`)
  - Designed so you can update content without editing React components

- AI Chat Assistant (OpenAI)
  - Site-wide chat widget
  - Modes:
    - General: answers questions about company/services/projects
    - Inquiry intake: gathers requirements and summarizes
    - Proposal outline: generates a structured proposal outline
  - Uses local site content as context (projects/blog/site config)

- SEO and distribution
  - `robots.txt` via `src/app/robots.ts`
  - `sitemap.xml` via `src/app/sitemap.ts`
  - `rss.xml` via `src/app/rss.xml/route.ts`
  - Open Graph + Twitter metadata in `src/app/layout.tsx`

- DevOps readiness
  - Multi-stage Docker build using Next.js `standalone` output
  - NGINX reverse proxy for production-like compose
  - Security headers in Next.js and NGINX baseline
  - Health check in Dockerfile

## Site structure (current)

Core pages implemented/scaffolded under `src/app`:

- Home: `/`
- About: `/about`
- Services: `/services`
- Solutions: `/solutions`
- Projects: `/projects`
- Case Studies: `/case-studies`
- Industries: `/industries`
- Blog: `/blog`
- Contact: `/contact`
- Book Consultation: `/book-consultation`
- Search: `/search`
- Privacy: `/privacy`
- Terms: `/terms`

## Quick start (local)

1. Create `.env`:

```bash
cp .env.example .env
```

2. Set environment values in `.env`:

- `NEXT_PUBLIC_SITE_URL` (for canonical URLs/sitemap)
- `OPENAI_API_KEY` (for AI chat)

3. Install and run:

```bash
npm install
npm run dev
```

Open:

- http://localhost:3000

## User guide

### Updating projects (portfolio)

Edit:

- `src/content/projects.json`

Each project supports fields like:

- `slug`
- `title`
- `category`
- `tags`
- `summary`
- `technologyStack`
- `demoUrl`, `githubUrl`, `documentationUrl`

The Projects page supports:

- `q` search query (title/summary/tags)
- `tag` filter via query string

Example URLs:

- `/projects?q=rag`
- `/projects?tag=LLM`

### Writing blog posts (MDX)

Add an `.mdx` file under:

- `src/content/blog/`

Each post should include frontmatter:

- `title`
- `description`
- `date`
- optional: `tags`, `category`, `author`

Then it appears automatically on `/blog`.

### Using the AI chat

The chat widget appears in the bottom-right corner on all pages.

Modes:

- **General**
  - Ask about services, solutions, projects, industries
- **Inquiry intake**
  - Use for lead qualification and requirements gathering
- **Proposal outline**
  - Use to produce a structured proposal outline

The assistant uses internal site content from:

- `src/content/projects.json`
- `src/content/blog/*.mdx`
- `src/config/site.ts`

## Developer guide

### Key folders

- `src/app`
  - Next.js App Router routes
- `src/components`
  - Reusable UI + layout + AI chat widget
- `src/content`
  - JSON/MDX content (acts as a lightweight CMS)
- `src/lib`
  - Utilities and content loaders
- `nginx/`
  - NGINX reverse proxy config for production compose

### Environment variables

Required:

- `NEXT_PUBLIC_SITE_URL`

Required for AI chat:

- `OPENAI_API_KEY`

Optional:

- `OPENAI_MODEL` (defaults to `gpt-4o-mini`)

### Scripts

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Lint
- `npm run format` - Prettier
- `npm run test` - Jest unit tests
- `npm run test:e2e` - Playwright end-to-end tests

### Docker

Dev-like container (app only):

```bash
docker compose up --build
```

Production-like (app + NGINX reverse proxy):

```bash
docker compose -f docker-compose.prod.yml up --build
```

### Interactive management script

Use the menu-driven script to deploy/start/stop/view logs/apply patch:

```bash
bash ./scripts/manage.sh menu
```

Configure git remote (required for `patch`):

```bash
bash ./scripts/manage.sh set-remote
```

When prompted, use:

```
https://github.com/lalitnayyar/swebsite.git
```

Examples:

```bash
bash ./scripts/manage.sh deploy --mode prod
bash ./scripts/manage.sh logs --mode prod
bash ./scripts/manage.sh patch --mode prod --branch main
```

### CI/CD

GitHub Actions workflow:

- `.github/workflows/ci.yml`

Includes:

- Install
- Lint
- Test
- Build
- Docker build (push step is a placeholder)

## Deployment notes

- For VPS (Ubuntu/Debian) you can run the production compose and place it behind your preferred TLS terminator.
- Ensure `NEXT_PUBLIC_SITE_URL` is set to your real domain in production.
- Store `OPENAI_API_KEY` in your deployment provider secrets (do not commit it).

## Current limitations (planned upgrades)

- Blog `[slug]` route currently loads MDX and metadata, but the full MDX rendering pipeline will be enhanced.
- AI chat retrieval is keyword-based (V1). Next step is embeddings-based retrieval + stronger guardrails.
- Rate limiting / abuse controls are placeholders and should be added before heavy public traffic.
