"use client";

import { useState } from "react";

const STYLES = ["Professional", "Playful", "Minimal", "Aesthetic"] as const;
type Style = (typeof STYLES)[number];

const PREFIXES: Record<Style, string[]> = {
  Professional: ["the", "real", "official", "daily", "with"],
  Playful: ["hey", "just", "oh", "lil", "heyits"],
  Minimal: ["", "", "its", "the", "hi"],
  Aesthetic: ["soft", "golden", "wild", "moon", "slow"],
};

const SUFFIXES: Record<Style, string[]> = {
  Professional: ["hq", "daily", "official", "tv", "co"],
  Playful: ["vibes", "club", "squad", "time", "diary"],
  Minimal: ["", "x", "co", "lab", "studio"],
  Aesthetic: ["aesthetic", "diaries", "club", "era", "muse"],
};

function cleanBase(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9._]/g, "")
    .replace(/^[._]+|[._]+$/g, "")
    .slice(0, 16);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildHandles(base: string, style: Style): string[] {
  const results: string[] = [];
  const push = (h: string) => {
    const clean = h.replace(/[^a-z0-9._]/g, "").slice(0, 24);
    if (clean.length >= 3 && clean.length <= 24 && !results.includes(clean)) results.push(clean);
  };

  push(base);
  push(`${base}.daily`);
  push(`${base}_official`);

  for (const pre of shuffle(PREFIXES[style]).slice(0, 3)) {
    if (pre) push(pre === "its" || pre === "the" || pre === "hi" ? `${pre}${base}` : `${pre}.${base}`);
  }
  for (const suf of shuffle(SUFFIXES[style]).slice(0, 3)) {
    if (suf) push(`${base}.${suf}`);
  }
  push(`${base}${Math.floor(Math.random() * 90) + 10}`);
  push(`${base}_tv`);

  return results.slice(0, 12);
}

export function TikTokUsernameGeneratorTool() {
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState<Style>("Playful");
  const [handles, setHandles] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    const base = cleanBase(keyword.trim());
    if (!base || base.length < 3) {
      setError("Enter a name or keyword with at least 3 letters or numbers — for example: bakewithmia.");
      setHandles([]);
      return;
    }
    setError("");
    setCopied(null);
    setHandles(buildHandles(base, style));
  };

  const copyHandle = async (h: string) => {
    try {
      await navigator.clipboard.writeText(h);
      setCopied(h);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tu-keyword" className="block text-sm font-semibold text-slate-900">
            Your name or keyword
          </label>
          <input
            id="tu-keyword"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="e.g. bakewithmia"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="tu-style" className="block text-sm font-semibold text-slate-900">
            Style
          </label>
          <select
            id="tu-style"
            value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            {STYLES.map((s) => (
              <option key={s} value={s}>
                {s}
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
        Generate usernames
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {handles.length > 0 && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-base font-bold text-slate-900">Handle ideas</h3>
          <p className="mt-1 text-sm text-slate-600">
            TikTok usernames can be up to 24 characters. Shorter is easier to remember and tag.
          </p>
          <ul className="mt-4 divide-y divide-slate-200">
            {handles.map((h) => (
              <li key={h} className="flex items-center justify-between gap-3 py-2.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm font-semibold text-slate-900">@{h}</span>
                  <span className="text-xs text-slate-500">{h.length}/24</span>
                </div>
                <button
                  onClick={() => copyHandle(h)}
                  className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copied === h ? "Copied!" : "Copy"}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-500">
            Availability changes constantly — check your favorite on TikTok itself before getting
            attached to it.
          </p>
        </div>
      )}
    </div>
  );
}
