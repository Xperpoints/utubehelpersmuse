"use client";

import { useState } from "react";

const STYLES = ["creative", "professional", "minimal"] as const;
type Style = (typeof STYLES)[number];

const HANDLE_LIMIT = 30;

function sanitize(base: string): string {
  return base
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9._]/g, "")
    .replace(/_{2,}/g, "_")
    .replace(/\.{2,}/g, ".");
}

const PREFIXES: Record<Style, string[]> = {
  creative: ["the", "real", "its", "get", "hey", "daily"],
  professional: ["the", "iam", "ask"],
  minimal: ["the"],
};

const SUFFIXES: Record<Style, string[]> = {
  creative: ["hq", "hub", "lab", "club", "daily", "co", "life", "zone", "101", "tips"],
  professional: ["hq", "co", "studio", "pro"],
  minimal: ["co", "hq"],
};

const SEPARATORS = ["", ".", "_"];

function generateHandles(keyword: string, style: Style): string[] {
  const base = sanitize(keyword);
  if (!base) return [];
  const out: string[] = [];
  const seen = new Set<string>();
  const push = (h: string) => {
    const clean = h.replace(/^[._]+|[._]+$/g, "").slice(0, HANDLE_LIMIT);
    if (clean.length >= 3 && !seen.has(clean)) {
      seen.add(clean);
      out.push(clean);
    }
  };

  // suffix patterns: base + separator + suffix
  for (const sep of SEPARATORS) {
    for (const suf of SUFFIXES[style]) {
      push(`${base}${sep}${suf}`);
    }
  }
  // prefix patterns: prefix + separator + base
  for (const sep of SEPARATORS) {
    for (const pre of PREFIXES[style]) {
      push(`${pre}${sep}${base}`);
    }
  }
  // doubled base for minimal style
  if (style === "minimal") {
    push(`${base}.${base}`);
  }

  return out.slice(0, 12);
}

export function InstagramUsernameGeneratorTool() {
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState<Style>("creative");
  const [handles, setHandles] = useState<string[] | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    setHandles(generateHandles(keyword, style));
    setCopied(null);
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
          <label htmlFor="iug-keyword" className="block text-sm font-semibold text-slate-900">
            Your name or keyword
          </label>
          <input
            id="iug-keyword"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && keyword.trim() && handleGenerate()}
            placeholder="e.g. fitnesswithsara"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="iug-style" className="block text-sm font-semibold text-slate-900">
            Style
          </label>
          <select
            id="iug-style"
            value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            {STYLES.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
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

      {handles && (
        <div className="mt-6">
          {handles.length === 0 ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              That keyword didn&apos;t leave enough usable characters. Try a name with at least 3
              letters or numbers.
            </p>
          ) : (
            <>
              <div className="grid gap-2 sm:grid-cols-2">
                {handles.map((h) => (
                  <div
                    key={h}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5"
                  >
                    <div>
                      <p className="font-mono text-sm font-semibold text-slate-900">@{h}</p>
                      <p className="text-xs text-slate-500">{h.length}/{HANDLE_LIMIT} characters</p>
                    </div>
                    <button
                      onClick={() => copyHandle(h)}
                      className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      {copied === h ? "Copied!" : "Copy"}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
                <strong>Before you commit:</strong> check each handle inside the Instagram app —
                availability changes constantly and this tool can&apos;t check it for you. Shorter,
                easy-to-spell handles are easier to remember and harder to mistype when someone
                tags you.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
