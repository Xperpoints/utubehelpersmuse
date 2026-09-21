"use client";

import { useState } from "react";

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "for", "to", "of", "in", "on", "with",
  "how", "what", "why", "is", "are", "best", "top", "guide", "my", "your",
]);

function toCamel(words: string[]): string {
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
}

interface HashtagGroups {
  broad: string[];
  niche: string[];
  longTail: string[];
}

function generateGroups(niche: string): HashtagGroups {
  const clean = niche.trim().toLowerCase().replace(/[?!.,]+$/g, "");
  const words = clean.split(/\s+/).filter((w) => w && !STOP_WORDS.has(w) && w.length > 2);
  const broad: string[] = [];
  const nicheTags: string[] = [];
  const longTail: string[] = [];
  const seen = new Set<string>();
  const push = (arr: string[], tag: string) => {
    const key = tag.toLowerCase();
    if (tag.length > 2 && !seen.has(key)) {
      seen.add(key);
      arr.push(tag);
    }
  };

  // Broad reach — high-traffic general tags
  ["#instagood", "#photooftheday", "#instadaily", "#picoftheday", "#reels"].forEach((t) =>
    push(broad, t)
  );
  words.forEach((w) => push(broad, `#${w}`));

  // Niche — topic-specific community tags
  if (words.length >= 2) {
    push(nicheTags, "#" + toCamel(words));
    push(nicheTags, "#" + toCamel(words) + "Tips");
    push(nicheTags, "#" + words.join(""));
  }
  words.forEach((w) => {
    push(nicheTags, `#${w}Tips`);
    push(nicheTags, `#${w}Community`);
  });

  // Long-tail — specific phrases, less competition
  words.forEach((w) => {
    push(longTail, `#${w}ForBeginners`);
    push(longTail, `#${w}Ideas`);
  });
  if (words.length >= 2) {
    push(longTail, `#${toCamel(words)}Tutorial`);
    push(longTail, `#${toCamel(words)}Explained`);
  }

  return {
    broad: broad.slice(0, 8),
    niche: nicheTags.slice(0, 8),
    longTail: longTail.slice(0, 8),
  };
}

const GROUPS: { key: keyof HashtagGroups; title: string; hint: string }[] = [
  { key: "broad", title: "Broad reach", hint: "High-traffic tags for maximum exposure" },
  { key: "niche", title: "Niche", hint: "Topic-specific tags where your ideal audience hangs out" },
  { key: "longTail", title: "Long-tail", hint: "Specific phrases with less competition" },
];

export function InstagramHashtagGeneratorTool() {
  const [niche, setNiche] = useState("");
  const [result, setResult] = useState<HashtagGroups | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleGenerate = () => {
    setResult(generateGroups(niche));
    setCopiedKey(null);
  };

  const copyText = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
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
      <label htmlFor="ihg-niche" className="block text-sm font-semibold text-slate-900">
        What is your niche or post about?
      </label>
      <input
        id="ihg-niche"
        type="text"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && niche.trim() && handleGenerate()}
        placeholder="e.g. home baking, fitness for beginners"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleGenerate}
        disabled={!niche.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate hashtags
      </button>

      {result && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">
              {result.broad.length + result.niche.length + result.longTail.length} hashtags
            </p>
            <button
              onClick={() =>
                copyText("all", [...result.broad, ...result.niche, ...result.longTail].join(" "))
              }
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copiedKey === "all" ? "Copied!" : "Copy all"}
            </button>
          </div>

          {GROUPS.map((g) => (
            <div key={g.key} className="mt-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {g.title}{" "}
                    <span className="font-normal text-slate-500">({result[g.key].length})</span>
                  </p>
                  <p className="text-xs text-slate-500">{g.hint}</p>
                </div>
                <button
                  onClick={() => copyText(g.key, result[g.key].join(" "))}
                  className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copiedKey === g.key ? "Copied!" : "Copy group"}
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {result[g.key].map((t) => (
                  <Chip key={t} tag={t} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-5 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
            <strong>Before you post:</strong> hashtag performance changes constantly. Search a few
            of these inside the Instagram app to confirm they are active and relevant — tags that
            are dead or flooded with spam will not help your reach. Instagram allows up to 30
            hashtags per post; 8–15 well-chosen ones is generally plenty.
          </div>
        </div>
      )}
    </div>
  );
}
