"use client";

import { useState } from "react";

type Style = "Professional" | "Fun & Casual" | "Minimalist" | "Bold";

const STYLES: Style[] = ["Professional", "Fun & Casual", "Minimalist", "Bold"];

const WORD_BANKS: Record<Style, { prefixes: string[]; suffixes: string[] }> = {
  Professional: {
    prefixes: ["Prime", "True", "Clear", "Solid", "Bright"],
    suffixes: ["Studio", "Lab", "Insights", "HQ", "Academy", "Works"],
  },
  "Fun & Casual": {
    prefixes: ["Happy", "Daily", "Cozy", "Wild", "Sunny"],
    suffixes: ["Squad", "Vibes", "Junkie", "Club", "Crew", "Corner"],
  },
  Minimalist: {
    prefixes: ["Mono", "Pure", "One", "Naked", "Plain"],
    suffixes: ["Form", "Line", "Mark", "Field", "Base", "Mode"],
  },
  Bold: {
    prefixes: ["Epic", "Fearless", "Raw", "Loud", "Iron"],
    suffixes: ["Unleashed", "Empire", "Revolution", "Kings", "Nation", "Force"],
  },
};

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function generateNames(keyword: string, style: Style): string[] {
  const kw = cap(keyword.trim().replace(/[^a-zA-Z0-9\s]/g, ""));
  if (!kw) return [];
  const bank = WORD_BANKS[style];
  const names: string[] = [];
  const push = (n: string) => {
    if (n && !names.includes(n)) names.push(n);
  };

  // Suffix combos
  bank.suffixes.forEach((s) => push(`${kw} ${s}`));
  // Prefix combos
  bank.prefixes.slice(0, 4).forEach((p) => push(`${p} ${kw}`));
  // Fused single-word combos
  push(`${kw}${bank.suffixes[0]}`);
  push(`${bank.prefixes[0]}${kw}`);

  return names.slice(0, 12);
}

export function ChannelNameGeneratorTool() {
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState<Style>("Professional");
  const [names, setNames] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const handleGenerate = () => {
    setNames(generateNames(keyword, style));
    setSelected(null);
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cng-keyword" className="block text-sm font-semibold text-slate-900">
            Your niche keyword
          </label>
          <input
            id="cng-keyword"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="e.g. fitness"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="cng-style" className="block text-sm font-semibold text-slate-900">
            Brand style
          </label>
          <select
            id="cng-style"
            value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            {STYLES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!keyword.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate names
      </button>

      {names.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">
            {names.length} ideas — click one to check availability
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {names.map((n) => (
              <button
                key={n}
                onClick={() => setSelected(n)}
                className={`rounded-lg border px-4 py-3 text-left font-medium transition ${
                  selected === n
                    ? "border-red-600 bg-red-50 text-red-800"
                    : "border-slate-200 bg-white text-slate-800 hover:border-red-300"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Availability check for &quot;{selected}&quot;
              </p>
              <p className="mt-1 text-xs text-slate-500">
                A name is only yours if nobody prominent is already using it. Check both:
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selected)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Check on YouTube
                </a>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(`"${selected}" youtube channel`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Check on Google
                </a>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Also check the @handle you want in YouTube Studio → Customization → Basic info,
                and search trademark databases if you plan to build a business around the name.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
