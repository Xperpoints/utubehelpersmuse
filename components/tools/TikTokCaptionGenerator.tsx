"use client";

import { useState } from "react";

const TONES = ["Funny", "Motivational", "Curious", "Bold", "Friendly"] as const;
type Tone = (typeof TONES)[number];

const HOOKS: Record<Tone, string[]> = {
  Funny: [
    "POV: you finally figured out",
    "Nobody talks about this part of",
    "Me pretending I have my life together while doing",
    "Rating my attempt at",
  ],
  Motivational: [
    "Day 1 of getting serious about",
    "This is your sign to start",
    "Nobody is coming to save you — so I started",
    "One year from now you'll wish you started",
  ],
  Curious: [
    "I tried this for 30 days so you don't have to:",
    "Here's what nobody tells you about",
    "I tested the viral hack for",
    "The results genuinely surprised me:",
  ],
  Bold: [
    "Unpopular opinion about",
    "Stop doing this if you want",
    "You're doing this completely wrong:",
    "Hard truth about",
  ],
  Friendly: [
    "Come with me to learn",
    "Saving you hours on",
    "My honest review of",
    "Let's talk about",
  ],
};

const CTAS = [
  "Follow for part 2.",
  "Save this for later.",
  "Comment your experience below.",
  "Share this with someone who needs it.",
  "Follow for daily tips.",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function TikTokCaptionGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState<Tone>("Funny");
  const [includeCta, setIncludeCta] = useState(true);
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const clean = topic.trim();
    if (!clean) {
      setError("Tell us what your video is about first — for example: morning skincare routine.");
      setCaption("");
      return;
    }
    setError("");
    setCopied(false);
    const hook = pick(HOOKS[tone]);
    const tagWords = clean
      .toLowerCase()
      .split(/\s+/)
      .map((w) => w.replace(/[^a-z0-9]/g, ""))
      .filter((w) => w.length > 2)
      .slice(0, 2);
    const tags = ["#fyp", ...tagWords.map((w) => "#" + w)].join(" ");
    let result = `${hook} ${clean}.\n\n`;
    if (includeCta) result += `${pick(CTAS)}\n\n`;
    result += tags;
    setCaption(result);
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
      <label htmlFor="tc-topic" className="block text-sm font-semibold text-slate-900">
        What is your video about?
      </label>
      <input
        id="tc-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. my 5-minute desk workout"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tc-tone" className="block text-sm font-semibold text-slate-900">
            Tone
          </label>
          <select
            id="tc-tone"
            value={tone}
            onChange={(e) => setTone(e.target.value as Tone)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            {TONES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end pb-1">
          <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-900">
            <input
              type="checkbox"
              checked={includeCta}
              onChange={(e) => setIncludeCta(e.target.checked)}
              className="h-5 w-5 rounded accent-red-600"
            />
            Add a call to action
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

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {caption && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
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
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-800">{caption}</p>
          <p className="mt-3 text-sm text-slate-500">
            Tip: keep captions short and skimmable — most viewers read the first line while deciding
            whether to watch. Tweak the hook in your own voice before posting.
          </p>
        </div>
      )}
    </div>
  );
}
