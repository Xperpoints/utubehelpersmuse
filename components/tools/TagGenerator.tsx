"use client";

import { useState } from "react";

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "for", "to", "of", "in", "on", "with",
  "how", "what", "why", "is", "are", "was", "be", "by", "this", "that",
]);

function generateTags(topic: string, includeYear: boolean): string[] {
  const clean = topic.trim().toLowerCase().replace(/[?!.,]+$/g, "");
  if (!clean) return [];
  const words = clean.split(/\s+/).filter((w) => w && !STOP_WORDS.has(w));
  const core = words.join(" ");
  const year = includeYear ? " 2026" : "";
  const tags: string[] = [];
  const push = (t: string) => {
    t = t.trim();
    if (t && t.length >= 2 && t.length <= 60 && !tags.includes(t)) tags.push(t);
  };

  // Exact topic first (most important)
  push(clean);
  // Question / intent variations
  push(`how to ${core}${year}`);
  push(`${core} tutorial${year}`);
  push(`${core} for beginners`);
  push(`${core} tips`);
  push(`${core} guide${year}`);
  // Format variations
  push(`best ${core}${year}`);
  push(`${core} explained`);
  push(`${core} step by step`);
  // Long-tail
  if (words.length >= 2) {
    push(`${words[0]} ${words.slice(1).join(" ")} tricks`);
    push(`easy ${core}`);
  }
  // Broad single keywords from the topic
  words.forEach((w) => {
    if (w.length > 3) push(w);
  });
  // Year-specific
  if (includeYear) push(`${core} 2026`);

  return tags.slice(0, 25);
}

export function TagGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [includeYear, setIncludeYear] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const totalChars = tags.join(",").length;
  const overLimit = totalChars > 500;

  const handleGenerate = () => {
    setTags(generateTags(topic, includeYear));
    setCopied(false);
  };

  const removeTag = (t: string) => setTags(tags.filter((x) => x !== t));

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(tags.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="tg-topic" className="block text-sm font-semibold text-slate-900">
        What is your video about?
      </label>
      <input
        id="tg-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. sourdough bread for beginners"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={includeYear}
          onChange={(e) => setIncludeYear(e.target.checked)}
          className="h-4 w-4 rounded accent-red-600"
        />
        Include the current year in tags (helps with fresh searches)
      </label>

      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate tags
      </button>

      {tags.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">
              {tags.length} tags · {totalChars}/500 characters
            </p>
            <button
              onClick={copyAll}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? "Copied!" : "Copy all"}
            </button>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full ${overLimit ? "bg-red-600" : "bg-green-500"}`}
              style={{ width: `${Math.min(100, (totalChars / 500) * 100)}%` }}
            />
          </div>
          {overLimit && (
            <p className="mt-1 text-xs font-semibold text-red-600">
              Over YouTube&apos;s 500-character tag limit — remove a few tags below.
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-800"
              >
                {t}
                <button
                  onClick={() => removeTag(t)}
                  aria-label={`Remove tag ${t}`}
                  className="font-bold text-slate-400 hover:text-red-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <label htmlFor="tg-output" className="mt-5 block text-sm font-semibold text-slate-900">
            Paste-ready (comma separated)
          </label>
          <textarea
            id="tg-output"
            readOnly
            rows={4}
            value={tags.join(", ")}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700"
          />
        </div>
      )}
    </div>
  );
}
