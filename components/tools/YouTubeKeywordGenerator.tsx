"use client";

import { useState } from "react";

interface KeywordGroup {
  title: string;
  description: string;
  items: string[];
}

function buildKeywordGroups(topic: string): KeywordGroup[] {
  const t = topic.trim().toLowerCase();
  const cap = t.charAt(0).toUpperCase() + t.slice(1);
  return [
    {
      title: "Questions",
      description: "How viewers phrase searches when they want answers.",
      items: [
        `how to ${t} for beginners`,
        `what is ${t} explained`,
        `why ${t} matters`,
        `${t} tips and tricks`,
        `common ${t} mistakes to avoid`,
        `is ${t} worth it`,
      ],
    },
    {
      title: "Comparisons",
      description: "High-intent searches from viewers weighing options.",
      items: [
        `best ${t} for beginners`,
        `${t} free vs paid options`,
        `${t} 2026 vs older methods`,
        `${t} pros and cons`,
        `${cap}: complete 2026 guide`,
      ],
    },
    {
      title: "Long-tail phrases",
      description: "Specific, lower-competition phrases new channels can rank for.",
      items: [
        `${t} for beginners step by step`,
        `how to start ${t} in 2026`,
        `${t} tutorial for beginners 2026`,
        `easy ${t} guide step by step`,
        `${t} explained simply`,
      ],
    },
    {
      title: "Related topics",
      description: "Adjacent angles for follow-up videos and playlists.",
      items: [
        `best ${t} ideas for small channels`,
        `${t} checklist before you start`,
        `${t} mistakes beginners make`,
        `how to grow with ${t}`,
        `${t} tools worth using`,
      ],
    },
  ];
}

export function YouTubeKeywordGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [groups, setGroups] = useState<KeywordGroup[] | null>(null);
  const [error, setError] = useState("");
  const [copiedGroup, setCopiedGroup] = useState<string | null>(null);

  const handleGenerate = () => {
    const trimmed = topic.trim();
    if (trimmed.length < 2) {
      setError("Type a topic first — for example: sourdough baking, budget travel, or python for beginners.");
      setGroups(null);
      return;
    }
    setError("");
    setCopiedGroup(null);
    setGroups(buildKeywordGroups(trimmed));
  };

  const copyGroup = async (group: KeywordGroup) => {
    try {
      await navigator.clipboard.writeText(group.items.join("\n"));
      setCopiedGroup(group.title);
      setTimeout(() => setCopiedGroup(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="kw-topic" className="block text-sm font-semibold text-slate-900">
        Your video topic
      </label>
      <input
        id="kw-topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. indoor plants, freelance writing, home workouts"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate keywords
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {groups && (
        <div className="mt-8 space-y-6">
          {groups.map((group) => (
            <div key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{group.description}</p>
                </div>
                <button
                  onClick={() => copyGroup(group)}
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {copiedGroup === group.title ? "Copied!" : `Copy ${group.title.toLowerCase()}`}
                </button>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-sm text-slate-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-slate-500">
            These are starting points, not search-volume data. Validate the promising ones by
            typing them into YouTube search and checking the autocomplete suggestions and the
            competition on the results page.
          </p>
        </div>
      )}
    </div>
  );
}
