"use client";

import { useState } from "react";

interface Idea {
  format: string;
  text: string;
}

const TEMPLATES: { format: string; template: (n: string) => string }[] = [
  {
    format: "Question",
    template: (n) => `What's the single biggest challenge you're facing with ${n} right now? Drop it in the comments — I'll reply to as many as I can.`,
  },
  {
    format: "Poll",
    template: (n) => `Quick poll for my ${n} people: which do you prefer — the slow-and-steady approach or the fast-and-bold one? Vote and tell me why below.`,
  },
  {
    format: "Story",
    template: (n) => `Three years ago I knew nothing about ${n}. Here's the mistake that taught me the most (and what I'd do differently)...`,
  },
  {
    format: "Tip",
    template: (n) => `One ${n} tip that took me way too long to learn: [your tip here]. Save this post — future you will thank present you.`,
  },
  {
    format: "Behind the scenes",
    template: (n) => `Behind the scenes: here's what my ${n} setup actually looks like on a normal day. Not glamorous, but it gets the job done. What's your setup like?`,
  },
  {
    format: "Milestone",
    template: (n) => `Small win worth celebrating: [your milestone] on my ${n} journey. Thank you for being part of this — what's a win you've had lately?`,
  },
  {
    format: "Myth-busting",
    template: (n) => `The biggest myth about ${n}? That [common myth]. Here's what actually works, based on what I've seen...`,
  },
  {
    format: "Fill in the blank",
    template: (n) => `Fill in the blank: "The best thing about ${n} is ___." I'll go first — then I want to hear yours.`,
  },
  {
    format: "Before / after",
    template: (n) => `Before I understood ${n}: [old situation]. After: [new situation]. The difference came down to one change — can you guess what it was?`,
  },
  {
    format: "Quote",
    template: (n) => `"[Your favorite quote about ${n}]." This one keeps me going on the hard days. What quote motivates you?`,
  },
  {
    format: "This or that",
    template: (n) => `This or that — ${n} edition: [option A] vs [option B]. There's no wrong answer, but I'm curious where this community lands.`,
  },
  {
    format: "Lesson learned",
    template: (n) => `The most expensive lesson ${n} ever taught me cost me [time/money]. Sharing it here so you don't have to pay the same price.`,
  },
];

function pickIdeas(niche: string): Idea[] {
  const shuffled = [...TEMPLATES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10).map((t) => ({ format: t.format, text: t.template(niche) }));
}

export function FacebookPostIdeasTool() {
  const [niche, setNiche] = useState("");
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    const clean = niche.trim();
    if (clean.length < 2) {
      setError("Tell me your niche or audience in a few words — e.g. 'new parents', 'home baking', 'freelance designers'.");
      setIdeas([]);
      return;
    }
    setError("");
    setCopiedIndex(null);
    setIdeas(pickIdeas(clean));
  };

  const copyIdea = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="fpi-niche" className="block text-sm font-semibold text-slate-900">
        Your niche or audience
      </label>
      <input
        id="fpi-niche"
        type="text"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. new parents, home baking, freelance designers"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={handleGenerate}
          disabled={!niche.trim()}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Generate post ideas
        </button>
        {ideas.length > 0 && (
          <button
            onClick={handleGenerate}
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Shuffle for new ideas
          </button>
        )}
      </div>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {ideas.length > 0 && (
        <div className="mt-6 space-y-3">
          {ideas.map((idea, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                  {idea.format}
                </span>
                <button
                  onClick={() => copyIdea(idea.text, i)}
                  className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copiedIndex === i ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{idea.text}</p>
            </div>
          ))}
          <p className="text-xs leading-relaxed text-slate-500">
            Bracketed bits like [your tip here] are placeholders — fill them with your own
            experience before posting. That is what turns a template into content only you
            could write.
          </p>
        </div>
      )}
    </div>
  );
}
