import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set');
  process.exit(1);
}

const OUTPUT_ROOT = path.join(process.cwd(), 'public', 'site-images');

const BASE_STYLE =
  'Photorealistic, professional commercial photography, natural lighting, high detail, shallow depth of field. ' +
  'No text, no logos, no watermarks, no UI text overlays.';

/**
 * @param {string} prompt
 * @returns {Promise<Buffer>}
 */
async function generatePng(prompt) {
  const payload = {
    model: process.env.OPENAI_IMAGE_MODEL ?? 'gpt-image-1',
    prompt,
    size: '1536x1024'
  };

  const r = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!r.ok) {
    const text = await r.text();
    throw new Error(`OpenAI image generation failed: ${r.status} ${text}`);
  }

  const json = await r.json();

  const first = json?.data?.[0];
  const b64 = first?.b64_json ?? first?.b64;
  if (b64) {
    return Buffer.from(b64, 'base64');
  }

  const url = first?.url;
  if (url) {
    const img = await fetch(url);
    if (!img.ok) {
      const text = await img.text();
      throw new Error(`OpenAI image download failed: ${img.status} ${text}`);
    }
    return Buffer.from(await img.arrayBuffer());
  }

  throw new Error('OpenAI image generation returned no image data');
}

/**
 * @param {string} relativeOutWebp
 * @param {string} prompt
 */
async function generateToWebp(relativeOutWebp, prompt) {
  const outPath = path.join(OUTPUT_ROOT, relativeOutWebp);
  await fs.mkdir(path.dirname(outPath), { recursive: true });

  const png = await generatePng(prompt);
  const webp = await sharp(png).webp({ quality: 82 }).toBuffer();

  await fs.writeFile(outPath, webp);
  console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
}

const JOBS = [
  // Home
  {
    out: path.join('home', 'hero-consulting.webp'),
    prompt:
      `${BASE_STYLE} A diverse enterprise consulting team collaborating in a modern office meeting room, laptops on table, whiteboard in background.`
  },

  // Industries
  {
    out: path.join('industries', 'telecommunications.webp'),
    prompt: `${BASE_STYLE} Cellular telecommunications tower with antennas at sunset, clear sky.`
  },
  {
    out: path.join('industries', 'government.webp'),
    prompt: `${BASE_STYLE} Government building exterior, civic architecture, daytime, professional.`
  },
  {
    out: path.join('industries', 'healthcare.webp'),
    prompt: `${BASE_STYLE} Hospital corridor with medical staff in the distance, clean clinical environment.`
  },
  {
    out: path.join('industries', 'banking.webp'),
    prompt: `${BASE_STYLE} Modern bank building or financial district skyline, professional.`
  },
  {
    out: path.join('industries', 'insurance.webp'),
    prompt: `${BASE_STYLE} Insurance office desk scene with policy documents and professional setting, no readable text.`
  },
  {
    out: path.join('industries', 'retail.webp'),
    prompt: `${BASE_STYLE} Retail store interior with shelves and shoppers blurred, warm lighting.`
  },
  {
    out: path.join('industries', 'manufacturing.webp'),
    prompt: `${BASE_STYLE} Modern manufacturing factory floor with machinery, industrial environment.`
  },
  {
    out: path.join('industries', 'education.webp'),
    prompt: `${BASE_STYLE} Classroom or university lecture setting with students, natural light.`
  },
  {
    out: path.join('industries', 'energy.webp'),
    prompt: `${BASE_STYLE} Renewable energy scene with wind turbines or solar panels, wide shot.`
  },
  {
    out: path.join('industries', 'airlines.webp'),
    prompt: `${BASE_STYLE} Commercial aircraft on runway or at gate, airport scene.`
  },
  {
    out: path.join('industries', 'transportation.webp'),
    prompt: `${BASE_STYLE} Logistics transportation scene with trucks on highway or warehouse loading docks.`
  },
  {
    out: path.join('industries', 'public-sector.webp'),
    prompt: `${BASE_STYLE} Community public service scene, civic center exterior, professional.`
  },

  // Services
  {
    out: path.join('services', 'enterprise-ai-consulting.webp'),
    prompt: `${BASE_STYLE} Consultants presenting AI strategy to executives in a conference room, professional.`
  },
  {
    out: path.join('services', 'generative-ai.webp'),
    prompt: `${BASE_STYLE} Professional technology concept photo representing generative AI in enterprise, abstract but realistic, no sci-fi.`
  },
  {
    out: path.join('services', 'agentic-ai.webp'),
    prompt: `${BASE_STYLE} Operations team coordinating automated workflows on large screens, modern control room.`
  },
  {
    out: path.join('services', 'llm-development.webp'),
    prompt: `${BASE_STYLE} Software engineers coding on laptops in office, close-up hands on keyboard.`
  },
  {
    out: path.join('services', 'ai-governance.webp'),
    prompt: `${BASE_STYLE} Compliance and governance meeting with documents and secure office setting, no readable text.`
  },
  {
    out: path.join('services', 'digital-transformation.webp'),
    prompt: `${BASE_STYLE} Business team reviewing digital transformation roadmap on a screen, modern office.`
  },
  {
    out: path.join('services', 'enterprise-architecture.webp'),
    prompt: `${BASE_STYLE} Architectural blueprint style scene with architects or engineers reviewing plans, no text.`
  },
  {
    out: path.join('services', 'solution-architecture.webp'),
    prompt: `${BASE_STYLE} Solution architecture planning session with diagrams on whiteboard (no readable text).`
  },
  {
    out: path.join('services', 'technical-consulting.webp'),
    prompt: `${BASE_STYLE} Technical consulting workshop, people discussing around laptops, modern office.`
  },
  {
    out: path.join('services', 'cloud-consulting.webp'),
    prompt: `${BASE_STYLE} Cloud data center racks with technicians, professional.`
  },
  {
    out: path.join('services', 'infrastructure-modernization.webp'),
    prompt: `${BASE_STYLE} Modern server room upgrade, technicians working with server racks.`
  },
  {
    out: path.join('services', 'api-development.webp'),
    prompt: `${BASE_STYLE} Backend developer working on API code, close-up laptop screen blurred, no readable text.`
  },
  {
    out: path.join('services', 'automation.webp'),
    prompt: `${BASE_STYLE} Robotic process automation concept in office setting, realistic.`
  },
  {
    out: path.join('services', 'devops.webp'),
    prompt: `${BASE_STYLE} DevOps team monitoring CI/CD pipelines on screens, modern office, no readable text.`
  },
  {
    out: path.join('services', 'platform-engineering.webp'),
    prompt: `${BASE_STYLE} Platform engineering / Kubernetes operations concept, engineers in data center.`
  },
  {
    out: path.join('services', 'system-integration.webp'),
    prompt: `${BASE_STYLE} Enterprise systems integration concept, network cables and servers in office environment.`
  },
  {
    out: path.join('services', 'contact-center-consulting.webp'),
    prompt: `${BASE_STYLE} Modern contact center operations, agents with headsets at workstations.`
  },
  {
    out: path.join('services', 'avaya-consulting.webp'),
    prompt: `${BASE_STYLE} Enterprise telephony / PBX room or call operations equipment, professional.`
  },
  {
    out: path.join('services', 'genesys-consulting.webp'),
    prompt: `${BASE_STYLE} Customer experience optimization meeting, call center analytics screens, no readable text.`
  },
  {
    out: path.join('services', 'cisco-contact-center.webp'),
    prompt: `${BASE_STYLE} Contact center technology workstation, professional office.`
  },
  {
    out: path.join('services', 'microsoft-copilot-consulting.webp'),
    prompt: `${BASE_STYLE} Office productivity scene with business professionals using laptops, modern.`
  },
  {
    out: path.join('services', 'ai-readiness-assessment.webp'),
    prompt: `${BASE_STYLE} Technology assessment checklist concept on desk with laptop, no readable text.`
  },
  {
    out: path.join('services', 'training.webp'),
    prompt: `${BASE_STYLE} Corporate training workshop in conference room, instructor presenting.`
  },
  {
    out: path.join('services', 'managed-services.webp'),
    prompt: `${BASE_STYLE} IT operations team managing systems, network operations center.`
  },
  {
    out: path.join('services', 'support.webp'),
    prompt: `${BASE_STYLE} IT support help desk scene with professional support agent, headset.`
  },
  {
    out: path.join('services', 'health-checks.webp'),
    prompt: `${BASE_STYLE} System health monitoring dashboards in operations room, no readable text.`
  },
  {
    out: path.join('services', 'performance-optimization.webp'),
    prompt: `${BASE_STYLE} Performance optimization concept: speedometer or performance charts on screen, no readable text.`
  },
  {
    out: path.join('services', 'migration-services.webp'),
    prompt: `${BASE_STYLE} Cloud migration concept: data transfer between servers, realistic office/data center.`
  },
  {
    out: path.join('services', 'architecture-review.webp'),
    prompt: `${BASE_STYLE} Architecture review meeting with senior engineers reviewing diagrams, no readable text.`
  },

  // Solutions
  {
    out: path.join('solutions', 'enterprise-ai-assistant.webp'),
    prompt: `${BASE_STYLE} Enterprise virtual assistant concept: professional worker using assistant on laptop, no readable text.`
  },
  {
    out: path.join('solutions', 'knowledge-management.webp'),
    prompt: `${BASE_STYLE} Knowledge management concept: organized documents and modern office filing, no readable text.`
  },
  {
    out: path.join('solutions', 'customer-support-ai.webp'),
    prompt: `${BASE_STYLE} Customer support AI concept: support agent with headset and laptop, professional.`
  },
  {
    out: path.join('solutions', 'call-center-ai.webp'),
    prompt: `${BASE_STYLE} Call center AI concept: modern call center floor with headsets and screens.`
  },
  {
    out: path.join('solutions', 'speech-analytics.webp'),
    prompt: `${BASE_STYLE} Speech analytics concept: audio waveform visualization on screen, no readable text.`
  },
  {
    out: path.join('solutions', 'chatbots.webp'),
    prompt: `${BASE_STYLE} Chatbots concept: messaging conversation UI on phone or laptop, no readable text.`
  },
  {
    out: path.join('solutions', 'voice-bots.webp'),
    prompt: `${BASE_STYLE} Voice bot concept: microphone and headset in professional call environment.`
  },
  {
    out: path.join('solutions', 'document-intelligence.webp'),
    prompt: `${BASE_STYLE} Document intelligence concept: scanning documents with professional office equipment, no readable text.`
  },
  {
    out: path.join('solutions', 'rag-systems.webp'),
    prompt: `${BASE_STYLE} Retrieval augmented generation concept: enterprise search and documents, realistic office setting, no readable text.`
  },
  {
    out: path.join('solutions', 'multi-agent-systems.webp'),
    prompt: `${BASE_STYLE} Multi-agent systems concept: team coordinating multiple automated processes in operations room.`
  },
  {
    out: path.join('solutions', 'workflow-automation.webp'),
    prompt: `${BASE_STYLE} Workflow automation concept: business process flow visualization on screen, no readable text.`
  },
  {
    out: path.join('solutions', 'approval-automation.webp'),
    prompt: `${BASE_STYLE} Approval automation concept: digital signature workflow on laptop screen, no readable text.`
  },
  {
    out: path.join('solutions', 'reporting-platform.webp'),
    prompt: `${BASE_STYLE} Reporting platform dashboard with charts on large screen, no readable text.`
  },
  {
    out: path.join('solutions', 'ai-dashboards.webp'),
    prompt: `${BASE_STYLE} Analytics dashboard with metrics on screen, modern office, no readable text.`
  },
  {
    out: path.join('solutions', 'incident-management.webp'),
    prompt: `${BASE_STYLE} Incident management operations: on-call engineer in operations center, no readable text.`
  },
  {
    out: path.join('solutions', 'ticket-automation.webp'),
    prompt: `${BASE_STYLE} IT ticket automation concept: help desk ticket queue interface on monitor, no readable text.`
  },
  {
    out: path.join('solutions', 'monitoring-platform.webp'),
    prompt: `${BASE_STYLE} Monitoring platform: server monitoring dashboards in operations room, no readable text.`
  },
  {
    out: path.join('solutions', 'enterprise-search.webp'),
    prompt: `${BASE_STYLE} Enterprise search concept: professional using search on laptop with documents, no readable text.`
  },
  {
    out: path.join('solutions', 'developer-portal.webp'),
    prompt: `${BASE_STYLE} Developer portal concept: software developer workspace with laptop and code (not readable).`
  },
  {
    out: path.join('solutions', 'internal-portals.webp'),
    prompt: `${BASE_STYLE} Internal company portal concept: employee using intranet on laptop, no readable text.`
  },
  {
    out: path.join('solutions', 'custom-software-development.webp'),
    prompt: `${BASE_STYLE} Custom software development: engineering team collaborating around code, no readable text.`
  }
];

async function main() {
  for (const job of JOBS) {
    // eslint-disable-next-line no-await-in-loop
    await generateToWebp(job.out, job.prompt);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
