'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';

type ChatMode = 'general' | 'inquiry' | 'proposal';

type Msg = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<ChatMode>('general');
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Msg[]>([
    {
      role: 'assistant',
      content:
        'How can I help? You can ask about services, projects, case studies, or request an inquiry/proposal outline.'
    }
  ]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    setLoading(true);

    setMessages((prev) => [...prev, { role: 'user', content: text }]);

    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, mode })
      });

      const json = (await r.json()) as { content?: string; error?: string };

      if (!r.ok) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: json.error ?? 'Request failed.' }
        ]);
        return;
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: json.content ?? '' }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Network error.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[360px] overflow-hidden rounded-2xl border bg-background shadow-glass">
          <div className="flex items-center justify-between border-b p-3">
            <div className="text-sm font-semibold">AI Assistant</div>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              Close
            </button>
          </div>

          <div className="flex items-center gap-2 border-b p-3">
            <label className="text-xs text-muted-foreground" htmlFor="mode">
              Mode
            </label>
            <select
              id="mode"
              name="mode"
              className="h-9 flex-1 rounded-md border bg-background px-2 text-sm"
              value={mode}
              onChange={(e) => setMode(e.target.value as ChatMode)}
            >
              <option value="general">General</option>
              <option value="inquiry">Inquiry intake</option>
              <option value="proposal">Proposal outline</option>
            </select>
          </div>

          <div className="max-h-[380px] space-y-3 overflow-auto p-3">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground'
                      : 'max-w-[85%] rounded-2xl border bg-muted/20 px-3 py-2 text-sm text-foreground'
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-3">
            <div className="flex gap-2">
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <input
                id="message"
                name="message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') void send();
                }}
                placeholder="Ask about services, projects, or request a proposal"
                className="h-11 flex-1 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="button" onClick={() => void send()} disabled={loading}>
                {loading ? '...' : 'Send'}
              </Button>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Do not include secrets. This assistant uses your site content to answer.
            </div>
          </div>
        </div>
      ) : (
        <Button type="button" onClick={() => setOpen(true)} className="shadow-glass">
          AI Chat
        </Button>
      )}
    </div>
  );
}
