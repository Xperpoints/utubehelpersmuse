"use client";

import { useState } from "react";

interface Chapter {
  time: string;
  title: string;
}

function normalizeTime(hours: string | undefined, minutes: string, seconds: string): string {
  if (hours !== undefined) {
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds}`;
  }
  return `${minutes.padStart(2, "0")}:${seconds}`;
}

function parseChapters(text: string): { chapters: Chapter[]; errors: string[] } {
  const chapters: Chapter[] = [];
  const errors: string[] = [];
  const lines = text.split("\n");
  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line) return;
    const lineNo = i + 1;
    const m = line.match(/^(\d{1,2}:)?(\d{1,2}):(\d{2})\s+(.+)$/);
    if (!m) {
      errors.push(`Line ${lineNo}: start with a timestamp, then a space, then the chapter title — e.g. "02:35 Main section".`);
      return;
    }
    const [, h, min, sec, title] = m;
    if (Number(min) >= 60 || Number(sec) >= 60) {
      errors.push(`Line ${lineNo}: minutes and seconds must each be under 60.`);
      return;
    }
    if (h !== undefined && Number(h) >= 100) {
      errors.push(`Line ${lineNo}: that hour value looks off — use hh:mm:ss like "01:02:35".`);
      return;
    }
    chapters.push({ time: normalizeTime(h, min, sec), title: title.trim() });
  });
  if (chapters.length > 0 && chapters[0].time !== "00:00" && chapters[0].time !== "00:00:00") {
    errors.unshift("The first chapter must start at 00:00 — YouTube ignores chapter lists that don't.");
  }
  return { chapters, errors };
}

export function YouTubeChapterGeneratorTool() {
  const [input, setInput] = useState("");
  const [chapters, setChapters] = useState<Chapter[] | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!input.trim()) {
      setErrors(["Paste or type your timestamps first — one per line, like \"00:00 Intro\"."]);
      setChapters(null);
      return;
    }
    const { chapters: parsed, errors: errs } = parseChapters(input);
    setErrors(errs);
    setCopied(false);
    setChapters(parsed.length > 0 ? parsed : null);
    if (parsed.length === 0 && errs.length === 0) {
      setErrors(["Nothing to format — add at least one timestamp line."]);
    }
  };

  const formatted = chapters ? chapters.map((c) => `${c.time} ${c.title}`).join("\n") : "";

  const copyChapters = async () => {
    if (!formatted) return;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="chapters-input" className="block text-sm font-semibold text-slate-900">
        Your timestamps — one per line
      </label>
      <textarea
        id="chapters-input"
        rows={8}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={"00:00 Intro\n01:24 Why chapters matter\n04:10 Step-by-step setup\n09:45 Common mistakes"}
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-mono text-sm text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleGenerate}
        disabled={!input.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Format chapters
      </button>

      {errors.length > 0 && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm font-semibold text-red-800">Fix these before pasting into YouTube:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-700">
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {chapters && chapters.length > 0 && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {chapters.length} chapter{chapters.length === 1 ? "" : "s"} ready
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Paste this into your video description. YouTube shows chapters in the player
                when you list at least 3 timestamps.
              </p>
            </div>
            <button
              onClick={copyChapters}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? "Copied!" : "Copy chapters"}
            </button>
          </div>
          <ol className="mt-4 space-y-2">
            {chapters.map((c, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <code className="shrink-0 rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-semibold text-red-700">
                  {c.time}
                </code>
                <span className="text-slate-800">{c.title}</span>
              </li>
            ))}
          </ol>
          {chapters.length < 3 && (
            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              You have fewer than 3 chapters. YouTube typically needs at least 3 timestamps to
              display chapters in the player — consider splitting a long section into two.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
