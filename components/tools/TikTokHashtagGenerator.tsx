"use client";

import { useState } from "react";

interface HashtagGroups {
  broad: string[];
  niche: string[];
  branded: string[];
}

function cleanWord(w: string): string {
  return w.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function toCamel(words: string[]): string {
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

function uniquePush(arr: string[], tag: string) {
  const t = "#" + tag.replace(/^#+/, "");
  if (tag.length > 1 && !arr.includes(t)) arr.push(t);
}

function generateGroups(topic: string): HashtagGroups {
  const words = topic
    .split(/\s+/)
    .map(cleanWord)
    .filter((w) => w.length > 1)
    .slice(0, 3);
  const main = words[0] || "creator";

  const broad: string[] = [];
  uniquePush(broad, "fyp");
  uniquePush(broad, "foryou");
  uniquePush(broad, "foryoupage");
  uniquePush(broad, "viral");
  uniquePush(broad, "trending");
  uniquePush(broad, "tiktokmademebuyit");
  if (words[0]) uniquePush(broad, words[0]);

  const niche: string[] = [];
  if (words.length >= 2) {
    uniquePush(niche, toCamel(words));
    uniquePush(niche, toCamel(words) + "Tok");
    uniquePush(niche, toCamel(words.slice(0, 2)) + "Tips");
    uniquePush(niche, "Learn" + toCamel(words));
    uniquePush(niche, toCamel(words) + "Community");
  } else {
    uniquePush(niche, main + "Tok");
    uniquePush(niche, main + "Tips");
    uniquePush(niche, "Learn" + toCamel([main]));
    uniquePush(niche, main + "Tutorial");
    uniquePush(niche, main + "Community");
  }
  uniquePush(niche, "Small" + toCamel([main]) + "Creator");

  const branded: string[] = [];
  uniquePush(branded, toCamel([main]) + "With" + "Me");
  uniquePush(branded, "My" + toCamel([main]) + "Journey");
  uniquePush(branded, toCamel([main]) + "Daily");
  uniquePush(branded, "Ask" + toCamel([main]));
  uniquePush(branded, toCamel([main]) + "Series");

  return { broad, niche, branded };
}

const GROUPS: { key: keyof HashtagGroups; title: string; blurb: string }[] = [
  { key: "broad", title: "Broad reach", blurb: "High-volume tags for discovery on the For You feed." },
  { key: "niche", title: "Niche", blurb: "Topic-specific tags that attract the right viewers." },
  { key: "branded", title: "Branded / series", blurb: "Your own tags for building a repeatable series." },
];

export function TikTokHashtagGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [groups, setGroups] = useState<HashtagGroups | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!topic.trim()) {
      setError("Enter a niche or keyword first — for example: fitness, skincare, personal finance.");
      setGroups(null);
      return;
    }
    setError("");
    setCopied(null);
    setGroups(generateGroups(topic.trim()));
  };

  const copyText = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const allTags = groups ? [...groups.broad, ...groups.niche, ...groups.branded].join(" ") : "";

  return (
    <div>
      <label htmlFor="th-topic" className="block text-sm font-semibold text-slate-900">
        Your niche or keyword
      </label>
      <input
        id="th-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. home cooking, streetwear, study tips"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate hashtags
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {groups && (
        <div className="mt-6 space-y-4">
          {GROUPS.map((g) => (
            <div key={g.key} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{g.title}</h3>
                  <p className="text-sm text-slate-600">{g.blurb}</p>
                </div>
                <button
                  onClick={() => copyText(groups[g.key].join(" "), g.key)}
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copied === g.key ? "Copied!" : "Copy group"}
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-red-700">{groups[g.key].join(" ")}</p>
            </div>
          ))}

          <button
            onClick={() => copyText(allTags, "all")}
            className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 sm:w-auto"
          >
            {copied === "all" ? "Copied!" : "Copy all hashtags"}
          </button>

          <p className="text-sm text-slate-600">
            Trends move fast on TikTok. Before posting, check which of these are actually active in{" "}
            <a
              href="https://ads.tiktok.com/business/creativecenter/inspiration/popular/pc/en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red-600 underline"
            >
              TikTok&apos;s Creative Center
            </a>
            , and swap in any rising tag that fits your video.
          </p>
        </div>
      )}
    </div>
  );
}
