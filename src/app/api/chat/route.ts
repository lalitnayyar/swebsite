import { buildKnowledgeBase, selectRelevantDocs } from '@/lib/ai/knowledge';

type ChatRequest = {
  message: string;
  mode?: 'inquiry' | 'proposal' | 'general';
};

export async function POST(req: Request) {
  const body = (await req.json()) as ChatRequest;
  const message = (body.message ?? '').trim();
  const mode = body.mode ?? 'general';

  if (!message) {
    return new Response(JSON.stringify({ error: 'Message is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini';

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'OPENAI_API_KEY is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const docs = buildKnowledgeBase();
  const relevant = selectRelevantDocs(docs, message, 6);
  const context = relevant
    .map((d) => `---\n${d.title}\n${d.text}`)
    .join('\n');

  const system =
    `You are the AI assistant for Symbiotic Technology Solutions. ` +
    `Be enterprise-consulting oriented, precise, and professional. Avoid marketing fluff. ` +
    `If asked for proposals, produce a structured outline with assumptions, scope, deliverables, timeline, and risks. ` +
    `If asked for inquiries, ask clarifying questions and produce an intake summary.`;

  const modeInstruction =
    mode === 'proposal'
      ? 'User intent: proposal. Generate a proposal outline and ask for any missing inputs.'
      : mode === 'inquiry'
        ? 'User intent: inquiry. Collect requirements (industry, current stack, goals, constraints, timeline, budget) and summarize.'
        : 'User intent: general. Answer succinctly and cite relevant content when possible.';

  const payload = {
    model,
    messages: [
      { role: 'system', content: system },
      {
        role: 'system',
        content:
          `Use ONLY the following internal context when it is relevant. ` +
          `If not relevant, answer without referencing it.\n\n${context || 'No internal context available.'}`
      },
      { role: 'system', content: modeInstruction },
      { role: 'user', content: message }
    ]
  };

  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!r.ok) {
    const errText = await r.text();
    return new Response(JSON.stringify({ error: 'OpenAI request failed', detail: errText }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const json = (await r.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = json.choices?.[0]?.message?.content ?? '';

  return new Response(JSON.stringify({ content }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
