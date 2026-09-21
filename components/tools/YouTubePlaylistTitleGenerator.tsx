"use client";

import { useState } from "react";

type TitleTemplate = (t: string, cap: string) => string;

const TEMPLATES: { style: "Keyword-first" | "Curiosity"; template: TitleTemplate }[] = [
  { style: "Keyword-first", template: (t, cap) => `${cap}: The Complete Beginner's Series` },
  { style: "Keyword-first", template: (t) => `${t} Masterclass — Every Video in Order` },
  { style: "Curiosity", template: (t, cap) => `Everything I Know About ${cap} (Full Series)` },
  { style: "Keyword-first", template: (t, cap) => `${cap} Tutorials for Beginners to Advanced` },
  { style: "Curiosity", template: (t, cap) => `The ${cap} Journey: From Zero to Confident` },
  { style: "Keyword-first", template: (t) => `Learn ${t} Step by Step — Full Playlist` },
  { style: "Curiosity", template: (t, cap) => `I Documented My Entire ${cap} Journey` },
  { style: "Keyword-first", template: (t, cap) => `${cap} Explained Simply — Start to Finish` },
  { style: "Curiosity", template: (t) => `What ${t} Gurus Don't Tell Beginners` },
  { style: "Keyword-first", template: (t, cap) => `${cap} Full Course (Free on YouTube)` },
  { style: "Curiosity", template: (t, cap) => `Why ${cap} Finally Clicked for Me` },
  { style: "Keyword-first", template: (t) => `${t} Tips, Tutorials & Mistakes to Avoid` },
];

export function YouTubePlaylistTitleGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [titles, setTitles] = useState<{ style: string; text: string }[] | null>(null);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    const trimmed = topic.trim();
    if (trimmed.length < 2) {
      setError("Type your series topic first — for example: watercolor painting, excel formulas, or acoustic guitar.");
      setTitles(null);
      return;
    }
    const t = trimmed.toLowerCase();
    const cap = t.charAt(0).toUpperCase() + t.slice(1);
    setError("");
    setCopiedIndex(null);
    setTitles(TEMPLATES.map(({ style, template }) => ({ style, text: template(t, cap) })));
  };

  const copyTitle = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="pl-topic" className="block text-sm font-semibold text-slate-900">
        Your series or playlist topic
      </label>
      <input
        id="pl-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. sourdough baking, javascript basics, home workouts"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate playlist titles
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {titles && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-base font-bold text-slate-900">12 playlist title ideas</h3>
          <p className="mt-1 text-sm text-slate-600">
            Keyword-first titles help search discovery; curiosity titles help browse appeal.
            Pick the mix that fits how viewers find your content.
          </p>
          <ol className="mt-4 space-y-2">
            {titles.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2"
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={`shrink-0 rounded px-2 py-0.5 text-xs font-semibold ${
                      item.style === "Keyword-first"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-violet-100 text-violet-700"
                    }`}
                  >
                    {item.style}
                  </span>
                  <span className="text-sm text-slate-800">{item.text}</span>
                </div>
                <button
                  onClick={() => copyTitle(item.text, i)}
                  className="shrink-0 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copiedIndex === i ? "Copied!" : "Copy"}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
