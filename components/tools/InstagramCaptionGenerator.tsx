"use client";

import { useState } from "react";

const TONES = ["funny", "professional", "motivational", "casual"] as const;
type Tone = (typeof TONES)[number];

const HOOKS: Record<Tone, string[]> = {
  funny: [
    "POV: you finally figured out {topic}",
    "Nobody asked, but welcome to my {topic} era",
    "{topic}: expectation vs. reality",
  ],
  professional: [
    "What {topic} taught me this week",
    "A practical note on {topic}",
    "Breaking down {topic}, step by step",
  ],
  motivational: [
    "Your sign to start {topic} today",
    "Nobody starts {topic} as an expert",
    "Small steps in {topic} still count",
  ],
  casual: [
    "Just some thoughts on {topic}",
    "Current obsession: {topic}",
    "A little {topic} photo dump",
  ],
};

const BODIES: Record<Tone, string[]> = {
  funny: [
    "I went in with zero plan and somehow came out the other side. If I can survive this, so can you. Swipe for proof that chaos works.",
    "Step one: pretend you know what you're doing. Step two: actually learn it along the way. Step three: post about it like an expert.",
    "Me: I'll just try it once. Also me, three weeks later: fully invested, no regrets, slightly unhinged.",
  ],
  professional: [
    "Here's what worked, what didn't, and what I'd do differently next time. The details matter more than the outcome — save this for when you need a reference.",
    "Consistency beats intensity. I focused on the fundamentals, tracked what changed, and let the results compound. Nothing flashy, just process.",
    "Three lessons worth sharing: start before you're ready, document everything, and ask better questions. The rest tends to take care of itself.",
  ],
  motivational: [
    "You don't need permission, perfect timing, or anyone's approval. You just need to begin — messy, imperfect, today. Future you is already grateful.",
    "Everyone you admire was once exactly where you are now: at the starting line, a little scared, doing it anyway. That's the whole secret.",
    "Progress is quiet. It doesn't announce itself. Keep going on the days nobody's watching — those are the days that count most.",
  ],
  casual: [
    "No big agenda here, just wanted to share this moment. Some days are for documenting, and today felt like one of them.",
    "Been thinking about this a lot lately. Not an expert, just someone figuring it out in real time. Relatable? I hope so.",
    "Weekend energy: low effort, high enjoyment. Sometimes the best content is just real life, unfiltered.",
  ],
};

const CTAS = [
  "Save this for later and share it with someone who needs it.",
  "Drop a comment — what's your experience with this?",
  "Follow for more like this.",
  "Tag a friend who needs to see this.",
];

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "for", "to", "of", "in", "on", "with", "my", "your",
]);

function buildCaption(topic: string, tone: Tone, includeCta: boolean): string {
  const t = topic.trim();
  const pick = (arr: string[]) => arr[t.length % arr.length];
  const hook = pick(HOOKS[tone]).replaceAll("{topic}", t);
  const body = pick(BODIES[tone]);
  const cta = includeCta ? pick(CTAS) : "";
  const words = t.toLowerCase().split(/\s+/).filter((w) => w && !STOP_WORDS.has(w) && w.length > 2);
  const tags = [
    ...words.map((w) => `#${w.replace(/[^a-z0-9]/g, "")}`),
    "#reels",
    "#explorepage",
    "#instagood",
  ]
    .filter((tag) => tag.length > 1)
    .slice(0, 8)
    .join(" ");
  return [hook, "", body, "", cta, "", tags].join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function InstagramCaptionGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState<Tone>("casual");
  const [includeCta, setIncludeCta] = useState(true);
  const [caption, setCaption] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setCaption(buildCaption(topic, tone, includeCta));
    setCopied(false);
  };

  const copyCaption = async () => {
    if (!caption) return;
    try {
      await navigator.clipboard.writeText(caption);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="icg-topic" className="block text-sm font-semibold text-slate-900">
        What is your post about?
      </label>
      <input
        id="icg-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && topic.trim() && handleGenerate()}
        placeholder="e.g. morning routine, small business tips"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="icg-tone" className="block text-sm font-semibold text-slate-900">
            Tone
          </label>
          <select
            id="icg-tone"
            value={tone}
            onChange={(e) => setTone(e.target.value as Tone)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            {TONES.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end pb-1">
          <label htmlFor="icg-cta" className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-900">
            <input
              id="icg-cta"
              type="checkbox"
              checked={includeCta}
              onChange={(e) => setIncludeCta(e.target.checked)}
              className="h-5 w-5 rounded accent-red-600"
            />
            Include a call to action
          </label>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate caption
      </button>

      {caption && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">
              Your caption{" "}
              <span className="font-normal text-slate-500">({caption.length} characters)</span>
            </p>
            <button
              onClick={copyCaption}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? "Copied!" : "Copy caption"}
            </button>
          </div>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">{caption}</p>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
            <strong>Tip:</strong> treat this as a first draft. The best captions sound like you —
            edit the wording to match your voice, and swap the hashtag block for tags you have
            actually checked inside the Instagram app.
          </div>
        </div>
      )}
    </div>
  );
}
