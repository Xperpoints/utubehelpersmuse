"use client";

import { useState } from "react";

interface Idea {
  format: string;
  title: string;
  hook: string;
}

const FORMATS: { format: string; templates: string[]; hooks: string[] }[] = [
  {
    format: "Storytime",
    templates: [
      "The time {niche} went completely wrong for me",
      "I almost quit {niche} because of this",
      "My most embarrassing {niche} moment",
    ],
    hooks: ["Wait for the ending — it gets worse.", "Storytime you didn't ask for but need."],
  },
  {
    format: "Quick tutorial",
    templates: [
      "{Niche} in 60 seconds: the only steps that matter",
      "3 {niche} mistakes beginners always make",
      "The {niche} shortcut I wish I knew sooner",
    ],
    hooks: ["Save this — you'll want it later.", "POV: learning this in under a minute."],
  },
  {
    format: "POV skit",
    templates: [
      "POV: you're new to {niche} and everyone assumes you know this",
      "POV: explaining your {niche} obsession to your family",
      "POV: day 1 vs day 100 of {niche}",
    ],
    hooks: ["Tag someone who does this.", "Tell me I'm not the only one."],
  },
  {
    format: "Duet bait",
    templates: [
      "Duet this with your {niche} hot take",
      "Stitch this: what's your unpopular {niche} opinion?",
      "React to my {niche} setup — be honest",
    ],
    hooks: ["I want to see your version.", "Duet me — I dare you."],
  },
  {
    format: "Series episode",
    templates: [
      "{Niche} diaries, episode 1: where I'm starting from",
      "Rating {niche} trends until I find a good one (part 1)",
      "Building my {niche} skills from zero — week 1",
    ],
    hooks: ["Follow so you don't miss part 2.", "This is a series now. You're welcome."],
  },
  {
    format: "Myth busting",
    templates: [
      "The biggest lie about {niche}, debunked",
      "{Niche} myths that need to die in 2026",
      "Stop believing this about {niche}",
    ],
    hooks: ["Number 3 surprised even me.", "You're probably doing this wrong."],
  },
  {
    format: "Before / after",
    templates: [
      "My {niche} before vs after 30 days of practice",
      "What I expected from {niche} vs what actually happened",
      "{Niche} glow-up: the exact changes I made",
    ],
    hooks: ["The difference is actually crazy.", "Wait for the after."],
  },
  {
    format: "Day in the life",
    templates: [
      "A realistic day in my life doing {niche}",
      "What a {niche} creator actually does all day",
      "Come spend a {niche} workday with me",
    ],
    hooks: ["It's not as glamorous as it looks.", "Realistic, not aesthetic."],
  },
  {
    format: "Ranking / tier list",
    templates: [
      "Ranking {niche} tools from worst to best",
      "My {niche} tier list — fight me in the comments",
      "Rating popular {niche} advice: helpful or hype?",
    ],
    hooks: ["The comments are going to be spicy.", "Agree or disagree?"],
  },
  {
    format: "Hot take",
    templates: [
      "Unpopular {niche} opinion: less is more",
      "Why most {niche} advice is outdated",
      "The {niche} industry doesn't want you to know this",
    ],
    hooks: ["This might get me cancelled.", "Say it louder for the back."],
  },
];

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function makeIdeas(niche: string): Idea[] {
  return FORMATS.map((f) => {
    const template = f.templates[Math.floor(Math.random() * f.templates.length)];
    const title = template.replace(/\{niche\}/gi, niche).replace(/\{Niche\}/g, cap(niche));
    return {
      format: f.format,
      title,
      hook: f.hooks[Math.floor(Math.random() * f.hooks.length)],
    };
  });
}

export function TikTokVideoIdeasTool() {
  const [niche, setNiche] = useState("");
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<number | null>(null);

  const handleGenerate = (isShuffle = false) => {
    const clean = niche.trim();
    if (!clean) {
      setError("Enter your niche first — for example: budget travel, indoor plants, freelance design.");
      setIdeas([]);
      return;
    }
    setError("");
    setCopied(null);
    setIdeas(makeIdeas(clean.toLowerCase()));
    void isShuffle;
  };

  const copyIdea = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(idx);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="tv-niche" className="block text-sm font-semibold text-slate-900">
        Your niche
      </label>
      <input
        id="tv-niche"
        type="text"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. meal prep, sneaker reselling, language learning"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => handleGenerate()}
          disabled={!niche.trim()}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Generate ideas
        </button>
        {ideas.length > 0 && (
          <button
            onClick={() => handleGenerate(true)}
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Shuffle
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
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                  {idea.format}
                </span>
                <button
                  onClick={() => copyIdea(`${idea.title} — Hook: ${idea.hook}`, i)}
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copied === i ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="mt-2 text-base font-semibold text-slate-900">{idea.title}</p>
              <p className="mt-1 text-sm text-slate-600">
                <span className="font-semibold">Opening hook:</span> {idea.hook}
              </p>
            </div>
          ))}
          <p className="text-sm text-slate-500">
            Treat these as starting points — the best TikToks come from adding your own story,
            opinion, or twist to the format.
          </p>
        </div>
      )}
    </div>
  );
}
