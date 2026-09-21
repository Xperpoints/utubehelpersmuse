"use client";

import { useState } from "react";

const CATEGORIES = [
  "Business",
  "Community",
  "Creator / Personal Brand",
  "Entertainment",
  "Local Service",
  "Nonprofit / Cause",
  "Education",
  "Food & Drink",
] as const;

function titleCase(s: string): string {
  return s
    .trim()
    .split(/\s+/)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

function generateNames(keywordRaw: string, category: string): string[] {
  const k = titleCase(keywordRaw);
  const kw = k.replace(/\s+/g, "");
  const keywordFirst = [
    `${k} Hub`,
    `${k} Daily`,
    `The ${k} Page`,
    `${k} Community`,
    `${k} Tips & Tricks`,
    `${k} Studio`,
    `All About ${k}`,
    `${k} World`,
  ];
  const brandable = [
    `${kw}ly`,
    `${kw}ora`,
    `${kw}Hive`,
    `${kw}Nest`,
    `Go${kw}`,
    `The ${kw} Co.`,
    `${kw}Lab`,
    `${kw}Spot`,
  ];
  const categoryFlavors: Record<string, string[]> = {
    Business: [`${k} Solutions`, `${k} Pro Services`],
    Community: [`${k} Lovers United`, `${k} Family`],
    "Creator / Personal Brand": [`${k} with ${k}`, `Ask ${k}`],
    Entertainment: [`${k} Central`, `${k} After Dark`],
    "Local Service": [`${k} Near Me`, `Your Local ${k}`],
    "Nonprofit / Cause": [`${k} Foundation`, `Friends of ${k}`],
    Education: [`${k} Academy`, `Learn ${k}`],
    "Food & Drink": [`${k} Kitchen`, `Taste of ${k}`],
  };
  const flavored = categoryFlavors[category] ?? [`${k} Network`, `${k} Collective`];
  const all = [...keywordFirst, ...brandable, ...flavored];
  const seen = new Set<string>();
  return all.filter((n) => {
    const key = n.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 14);
}

export function FacebookPageNameGeneratorTool() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [names, setNames] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    const clean = keyword.trim();
    if (clean.length < 2) {
      setError("Enter a keyword of at least 2 characters — for example, your niche, service, or topic.");
      setNames([]);
      return;
    }
    setError("");
    setCopiedIndex(null);
    setNames(generateNames(clean, category));
  };

  const copyName = async (name: string, index: number) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fpng-keyword" className="block text-sm font-semibold text-slate-900">
            Keyword or topic
          </label>
          <input
            id="fpng-keyword"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="e.g. home baking, fitness, travel"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="fpng-category" className="block text-sm font-semibold text-slate-900">
            Page category
          </label>
          <select
            id="fpng-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!keyword.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate page names
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {names.length > 0 && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-900">
            {names.length} name ideas for &quot;{titleCase(keyword)}&quot;
          </p>
          <ul className="mt-4 space-y-2">
            {names.map((name, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5"
              >
                <span className="text-sm font-semibold text-slate-800">{name}</span>
                <button
                  onClick={() => copyName(name, i)}
                  className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copiedIndex === i ? "Copied!" : "Copy"}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Tip: search each name on Facebook before committing — if an established page already
            uses it, pick a variation so your page is easy to find and hard to confuse.
          </p>
        </div>
      )}
    </div>
  );
}
