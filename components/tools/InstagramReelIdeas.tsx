"use client";

import { useState } from "react";

interface ReelIdea {
  format: string;
  title: string;
  hook: string;
}

const FORMATS: { format: string; title: string; hook: string }[] = [
  { format: "Tutorial", title: "Teach {topic} in 30 seconds", hook: "Stop scrolling — {topic}, explained in 30 seconds." },
  { format: "Behind the scenes", title: "How I actually do {topic}", hook: "Nobody shows the messy middle of {topic}. I will." },
  { format: "Myth-busting", title: "3 {topic} myths that need to die", hook: "You've been lied to about {topic}. Here's the truth." },
  { format: "Trend remix", title: "The trending audio, but make it {topic}", hook: "POV: the trending sound finally makes sense for {topic}." },
  { format: "Before / after", title: "My {topic} transformation", hook: "Wait for the after — this {topic} glow-up is real." },
  { format: "Quick tips", title: "5 {topic} tips in 20 seconds", hook: "5 things I wish someone told me about {topic} sooner." },
  { format: "Mistakes to avoid", title: "{topic} mistakes beginners make", hook: "Are you making these {topic} mistakes? Let's fix them." },
  { format: "Storytime", title: "How {topic} changed everything", hook: "Storytime: the day {topic} finally clicked for me." },
  { format: "POV", title: "POV: you're new to {topic}", hook: "POV: it's day one of your {topic} journey." },
  { format: "Q&A", title: "Answering your {topic} questions", hook: "You asked, I answered — {topic} edition." },
  { format: "Comparison", title: "{topic}: wrong way vs right way", hook: "The wrong way vs the right way to do {topic}." },
  { format: "Day in the life", title: "A day of {topic} with me", hook: "Come spend a full day doing {topic} with me." },
];

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeIdeas(niche: string): ReelIdea[] {
  const t = niche.trim();
  return shuffled(FORMATS)
    .slice(0, 10)
    .map((f) => ({
      format: f.format,
      title: f.title.replaceAll("{topic}", t),
      hook: f.hook.replaceAll("{topic}", t),
    }));
}

export function InstagramReelIdeasTool() {
  const [niche, setNiche] = useState("");
  const [ideas, setIdeas] = useState<ReelIdea[] | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  const handleGenerate = () => {
    if (!niche.trim()) return;
    setIdeas(makeIdeas(niche));
    setCopied(null);
  };

  const copyIdea = async (idx: number, idea: ReelIdea) => {
    try {
      await navigator.clipboard.writeText(`${idea.title}\nHook: ${idea.hook}`);
      setCopied(idx);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="iri-niche" className="block text-sm font-semibold text-slate-900">
        What is your niche?
      </label>
      <input
        id="iri-niche"
        type="text"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && niche.trim() && handleGenerate()}
        placeholder="e.g. budget cooking, skincare"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={handleGenerate}
          disabled={!niche.trim()}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Generate reel ideas
        </button>
        {ideas && (
          <button
            onClick={handleGenerate}
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Shuffle
          </button>
        )}
      </div>

      {ideas && (
        <div className="mt-6 space-y-3">
          {ideas.map((idea, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                    {idea.format}
                  </span>
                  <p className="mt-2 font-semibold text-slate-900">{idea.title}</p>
                  <p className="mt-1 text-sm italic text-slate-600">Hook: &ldquo;{idea.hook}&rdquo;</p>
                </div>
                <button
                  onClick={() => copyIdea(i, idea)}
                  className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copied === i ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
            <strong>Make them yours:</strong> these are starting points, not scripts. Film the
            first three seconds exactly as the hook reads — retention on Reels is won or lost
            almost immediately — then deliver the payoff fast.
          </div>
        </div>
      )}
    </div>
  );
}
