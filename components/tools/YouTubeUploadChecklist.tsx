"use client";

import { useState } from "react";

interface ChecklistItem {
  id: string;
  label: string;
  hint: string;
}

interface ChecklistGroup {
  title: string;
  items: ChecklistItem[];
}

const GROUPS: ChecklistGroup[] = [
  {
    title: "Packaging",
    items: [
      {
        id: "title",
        label: "Title written with a clear keyword and hook",
        hint: "Specific beats clever — say what the video delivers.",
      },
      {
        id: "thumbnail",
        label: "Custom thumbnail designed and uploaded",
        hint: "1280×720, readable at phone-feed size, one clear subject.",
      },
    ],
  },
  {
    title: "Metadata",
    items: [
      {
        id: "description",
        label: "Description written with keywords up top",
        hint: "First 1–2 lines summarize the value; links and chapters below.",
      },
      {
        id: "tags",
        label: "Tags added (under 500 characters total)",
        hint: "8–15 relevant tags; relevance beats quantity.",
      },
      {
        id: "chapters",
        label: "Chapters added for longer videos",
        hint: "First timestamp 00:00, at least 3 chapters.",
      },
      {
        id: "cards",
        label: "Cards added at key moments",
        hint: "Point to related videos where viewers are most engaged.",
      },
      {
        id: "endscreen",
        label: "End screen added",
        hint: "Subscribe button plus your best next video.",
      },
      {
        id: "playlist",
        label: "Added to a relevant playlist",
        hint: "Playlists boost session time and help series get discovered.",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        id: "visibility",
        label: "Visibility set deliberately",
        hint: "Public, scheduled, or unlisted — not an accidental default.",
      },
      {
        id: "captions",
        label: "Captions checked or uploaded",
        hint: "Review auto-captions for names and key terms.",
      },
      {
        id: "language",
        label: "Video language set",
        hint: "Helps YouTube show it to the right audience.",
      },
      {
        id: "audience",
        label: "Audience setting chosen",
        hint: "Declare whether it's made for kids — it's legally required.",
      },
    ],
  },
];

const TOTAL = GROUPS.reduce((n, g) => n + g.items.length, 0);

export function YouTubeUploadChecklistTool() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const reset = () => setChecked({});

  const doneCount = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((doneCount / TOTAL) * 100);

  return (
    <div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-slate-700">
            {doneCount} of {TOTAL} complete
          </span>
          <span className="font-bold text-slate-900">{percent}%</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-red-600 transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        {percent === 100 ? (
          <p className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
            Checklist complete — this video is ready to publish.
          </p>
        ) : (
          <p className="mt-3 text-sm text-slate-600">
            Work through each group before you hit publish. Your progress is tracked above.
          </p>
        )}
      </div>

      <div className="mt-6 space-y-6">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-base font-bold text-slate-900">{group.title}</h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => {
                const isChecked = !!checked[item.id];
                return (
                  <li key={item.id}>
                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors ${
                        isChecked
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(item.id)}
                        className="mt-1 h-4 w-4 shrink-0 accent-red-600"
                      />
                      <span>
                        <span
                          className={`block text-sm font-semibold ${
                            isChecked ? "text-slate-500 line-through" : "text-slate-900"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-500">{item.hint}</span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={reset}
        disabled={doneCount === 0}
        className="mt-6 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Reset checklist
      </button>
    </div>
  );
}
