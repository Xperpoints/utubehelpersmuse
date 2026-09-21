"use client";

import { useState } from "react";

function titleCase(topic: string): string {
  const small = new Set(["a", "an", "the", "and", "or", "for", "to", "of", "in", "on", "with", "vs", "is"]);
  return topic
    .split(/\s+/)
    .map((w, i) => {
      const lower = w.toLowerCase();
      if (i !== 0 && small.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function capFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function generateTitles(rawTopic: string): string[] {
  const topic = rawTopic.trim().replace(/[?!.,]+$/g, "");
  if (!topic) return [];
  const t = titleCase(topic);
  const lower = topic.toLowerCase();
  const first = capFirst(lower);

  const titles = [
    `7 ${t} Mistakes Beginners Always Make`,
    `How to Master ${t} (Step-by-Step Guide)`,
    `I Tried ${t} for 30 Days — Here's What Happened`,
    `${t} for Beginners: Everything You Need to Know`,
    `Why ${first} Is Harder Than It Looks`,
    `10 ${t} Tips That Actually Work`,
    `${t}: The Ultimate Guide (2026)`,
    `Stop Doing ${t} Wrong — Do This Instead`,
    `${t} vs The Alternatives: Which Is Best?`,
    `The Truth About ${t} Nobody Tells You`,
    `${first} Explained in 10 Minutes`,
    `5 ${t} Myths You Need to Stop Believing`,
    `How I Got Good at ${t} (My Full Process)`,
    `${t} Mistakes That Are Killing Your Progress`,
    `The Beginner's Guide to ${t}`,
  ];
  // Dedupe in case of odd input, cap at 70 chars ideally but keep all with flags
  return [...new Set(titles)];
}

export function TitleGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [titles, setTitles] = useState<string[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const handleGenerate = () => {
    setTitles(generateTitles(topic));
    setCopiedIdx(null);
    setCopiedAll(false);
  };

  const copyOne = async (title: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(title);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(titles.join("\n"));
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="tig-topic" className="block text-sm font-semibold text-slate-900">
        What is your video about?
      </label>
      <input
        id="tig-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. indoor plants"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate titles
      </button>

      {titles.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">{titles.length} title ideas</p>
            <button
              onClick={copyAll}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copiedAll ? "Copied!" : "Copy all"}
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {titles.map((title, i) => {
              const tooLong = title.length > 70;
              return (
                <li
                  key={i}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate-0 text-sm font-medium text-slate-900">{title}</p>
                    <p className={`mt-0.5 text-xs ${tooLong ? "font-semibold text-amber-600" : "text-slate-400"}`}>
                      {title.length} characters{tooLong ? " — may get cut off on mobile" : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => copyOne(title, i)}
                    className="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {copiedIdx === i ? "Copied!" : "Copy"}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Tip: these are starting points. Tweak the wording to match your video&apos;s actual
            content — the title must deliver what it promises.
          </p>
        </div>
      )}
    </div>
  );
}
