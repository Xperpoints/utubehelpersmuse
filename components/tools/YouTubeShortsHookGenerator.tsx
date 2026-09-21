"use client";

import { useState } from "react";

interface Hook {
  style: string;
  text: string;
}

type HookTemplate = (t: string, cap: string) => string;

const TEMPLATES: { style: string; templates: HookTemplate[] }[] = [
  {
    style: "Question",
    templates: [
      (t) => `Why is nobody talking about ${t}?`,
      (t) => `What if ${t} only took 10 seconds?`,
      (t, cap) => `${cap} — but are you doing it wrong?`,
    ],
  },
  {
    style: "Bold claim",
    templates: [
      (t) => `This ${t} trick changes everything.`,
      (t) => `I tested ${t} for 30 days — here's what happened.`,
      (t) => `The ${t} method that actually works.`,
    ],
  },
  {
    style: "Curiosity gap",
    templates: [
      (t) => `The ${t} mistake almost everyone makes.`,
      (t) => `Nobody tells beginners this about ${t}.`,
      (t) => `Stop scrolling — this ${t} tip is worth 30 seconds.`,
    ],
  },
  {
    style: "Contrarian",
    templates: [
      (t) => `Forget everything you know about ${t}.`,
      (t) => `Why popular ${t} advice is mostly wrong.`,
      (t) => `Unpopular opinion: ${t} is overcomplicated.`,
    ],
  },
  {
    style: "Number-led",
    templates: [
      (t) => `3 ${t} tips in 30 seconds.`,
      (t) => `5 ${t} mistakes to avoid.`,
      (t, cap) => `${cap} in 3 steps — watch till the end.`,
    ],
  },
];

function generateHooks(topic: string): Hook[] {
  const t = topic.trim().toLowerCase();
  const cap = t.charAt(0).toUpperCase() + t.slice(1);
  const hooks: Hook[] = [];
  // Round-robin through styles so all 5 styles are represented, 2 hooks each
  for (let round = 0; round < 2; round++) {
    for (const group of TEMPLATES) {
      const template = group.templates[Math.floor(Math.random() * group.templates.length)];
      hooks.push({ style: group.style, text: template(t, cap) });
    }
  }
  return hooks;
}

export function YouTubeShortsHookGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [hooks, setHooks] = useState<Hook[] | null>(null);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const handleGenerate = () => {
    const trimmed = topic.trim();
    if (trimmed.length < 2) {
      setError("Type your Shorts topic first — for example: knife skills, morning routines, or budgeting.");
      setHooks(null);
      return;
    }
    setError("");
    setCopiedIndex(null);
    setCopiedAll(false);
    setHooks(generateHooks(trimmed));
  };

  const copyOne = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const copyAll = async () => {
    if (!hooks) return;
    try {
      await navigator.clipboard.writeText(hooks.map((h) => h.text).join("\n"));
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="hook-topic" className="block text-sm font-semibold text-slate-900">
        Your Shorts topic
      </label>
      <input
        id="hook-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. growing herbs indoors, desk setup, study tips"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={handleGenerate}
          disabled={!topic.trim()}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Generate hooks
        </button>
        {hooks && (
          <button
            onClick={handleGenerate}
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

      {hooks && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">10 opening hooks</h3>
              <p className="mt-1 text-sm text-slate-600">
                Say one of these — or show it as on-screen text — in the first 3 seconds.
              </p>
            </div>
            <button
              onClick={copyAll}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copiedAll ? "Copied!" : "Copy all"}
            </button>
          </div>
          <ol className="mt-4 space-y-2">
            {hooks.map((hook, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2"
              >
                <div className="flex items-baseline gap-3">
                  <span className="shrink-0 rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                    {hook.style}
                  </span>
                  <span className="text-sm text-slate-800">{hook.text}</span>
                </div>
                <button
                  onClick={() => copyOne(hook.text, i)}
                  className="shrink-0 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copiedIndex === i ? "Copied!" : "Copy"}
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            Hooks earn the first 3 seconds; the payoff keeps the rest. Make sure the video
            delivers on whatever the hook promises within the first few seconds after it.
          </p>
        </div>
      )}
    </div>
  );
}
