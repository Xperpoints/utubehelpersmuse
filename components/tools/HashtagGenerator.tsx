"use client";

import { useState } from "react";

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "for", "to", "of", "in", "on", "with",
  "how", "what", "why", "is", "are", "best", "top", "guide",
]);

function toCamel(words: string[]): string {
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function generateHashtags(topic: string): { broad: string[]; niche: string[] } {
  const clean = topic.trim().toLowerCase().replace(/[?!.,]+$/g, "");
  const words = clean.split(/\s+/).filter((w) => w && !STOP_WORDS.has(w));
  const broad: string[] = [];
  const niche: string[] = [];
  const pushUnique = (arr: string[], tag: string) => {
    if (tag.length > 2 && !arr.includes(tag) && !broad.includes(tag) && !niche.includes(tag)) arr.push(tag);
  };

  // Broad reach tags
  pushUnique(broad, "#youtube");
  pushUnique(broad, "#youtuber");
  words.forEach((w) => {
    if (w.length > 2) pushUnique(broad, `#${w}`);
  });
  pushUnique(broad, "#video");

  // Niche-specific camelCase combos
  if (words.length >= 2) {
    pushUnique(niche, "#" + toCamel(words));
    pushUnique(niche, "#" + toCamel(words) + "Tips");
    if (words.length >= 3) {
      pushUnique(niche, "#" + toCamel(words.slice(0, 2)));
      pushUnique(niche, "#" + toCamel(words.slice(1)));
    }
  } else if (words.length === 1) {
    pushUnique(niche, `#${words[0]}Tips`);
    pushUnique(niche, `#${words[0]}Tutorial`);
    pushUnique(niche, `#${words[0]}Community`);
  }
  pushUnique(niche, "#newvideo");

  return {
    broad: broad.slice(0, 6),
    niche: niche.slice(0, 6),
  };
}

export function HashtagGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState<{ broad: string[]; niche: string[] } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setResult(generateHashtags(topic));
    setCopied(false);
  };

  const copyAll = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText([...result.broad, ...result.niche].join(" "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const Chip = ({ tag }: { tag: string }) => (
    <span className="inline-block rounded-full bg-red-50 px-3.5 py-1.5 text-sm font-semibold text-red-700">
      {tag}
    </span>
  );

  return (
    <div>
      <label htmlFor="hg-topic" className="block text-sm font-semibold text-slate-900">
        What is your video about?
      </label>
      <input
        id="hg-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. budget travel tips"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate hashtags
      </button>

      {result && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">
              {result.broad.length + result.niche.length} hashtags
            </p>
            <button
              onClick={copyAll}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? "Copied!" : "Copy all"}
            </button>
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-900">Broad reach</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {result.broad.map((t) => (
              <Chip key={t} tag={t} />
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-900">Niche-specific</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {result.niche.map((t) => (
              <Chip key={t} tag={t} />
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
            <strong>Where to put them:</strong> paste these at the very bottom of your video
            description. YouTube displays the first 3 above your title automatically. Don&apos;t
            add more than 15 total, and never use hashtags unrelated to your video.
          </div>
        </div>
      )}
    </div>
  );
}
