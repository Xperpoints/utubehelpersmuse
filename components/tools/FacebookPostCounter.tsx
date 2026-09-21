"use client";

import { useState } from "react";

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function countHashtags(text: string): number {
  const matches = text.match(/#[\p{L}\p{N}_]+/gu);
  return matches ? matches.length : 0;
}

function verdictFor(chars: number): { label: string; detail: string } {
  if (chars === 0)
    return {
      label: "Start typing to see your verdict",
      detail:
        "Paste or type the draft of your Facebook post above and the counters will update live.",
    };
  if (chars <= 80)
    return {
      label: "Short and punchy",
      detail:
        "Very short posts often earn more engagement per view, because people read the whole thing before deciding to react or comment. This length is a strong choice for announcements, questions, and quick updates.",
    };
  if (chars <= 250)
    return {
      label: "A solid, readable length",
      detail:
        "This sits in the range many creators find performs well: long enough to say something meaningful, short enough to be read in full on a phone screen. Keep the first line strong, since that is what shows before the \"see more\" cut.",
    };
  if (chars <= 500)
    return {
      label: "Getting long — check the first line",
      detail:
        "Longer posts can still work, especially for stories and explanations, but engagement typically drops as length grows. Make sure the first 1–2 lines hook the reader, because everything after the fold is only seen by people who tap to expand.",
    };
  return {
    label: "Very long for a Facebook post",
    detail:
      "Posts this long are rarely read in full. Consider whether this would work better as a note, a linked article, or a video with a short caption. If you keep it, front-load the key point and use line breaks generously.",
  };
}

export function FacebookPostCounterTool() {
  const [text, setText] = useState("");

  const chars = text.length;
  const words = countWords(text);
  const hashtags = countHashtags(text);
  const verdict = verdictFor(chars);

  const copyText = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="fpc-text" className="block text-sm font-semibold text-slate-900">
        Your Facebook post draft
      </label>
      <textarea
        id="fpc-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your post here — the counters update as you type..."
        rows={6}
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
          <p className="text-2xl font-extrabold text-slate-900">{chars.toLocaleString()}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Characters
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
          <p className="text-2xl font-extrabold text-slate-900">{words.toLocaleString()}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Words</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
          <p className="text-2xl font-extrabold text-slate-900">{hashtags}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Hashtags
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-bold text-slate-900">{verdict.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{verdict.detail}</p>
      </div>

      {text && (
        <button
          onClick={copyText}
          className="mt-4 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Copy post text
        </button>
      )}
    </div>
  );
}
