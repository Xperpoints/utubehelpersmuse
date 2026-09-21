"use client";

import { useState } from "react";

function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function CommentPickerTool() {
  const [raw, setRaw] = useState("");
  const [dedupe, setDedupe] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [winnerCount, setWinnerCount] = useState("1");
  const [winners, setWinners] = useState<string[]>([]);
  const [drawnIds, setDrawnIds] = useState<string[]>([]);
  const [drawing, setDrawing] = useState(false);
  const [error, setError] = useState("");

  const eligible = (() => {
    let list = raw
      .split("\n")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);
    if (dedupe) list = [...new Set(list)];
    if (keyword.trim()) {
      const kw = keyword.trim().toLowerCase();
      list = list.filter((c) => c.toLowerCase().includes(kw));
    }
    return list;
  })();

  const remaining = eligible.filter((c) => !drawnIds.includes(c));
  const count = Math.max(1, Math.min(5, parseInt(winnerCount, 10) || 1));

  const pick = () => {
    if (remaining.length === 0) {
      setError("No eligible entries left. Paste more comments or pick again with different filters.");
      return;
    }
    setError("");
    setDrawing(true);
    setWinners([]);
    setTimeout(() => {
      const shuffled = fisherYates(remaining);
      const picked = shuffled.slice(0, Math.min(count, remaining.length));
      setWinners(picked);
      setDrawnIds([...drawnIds, ...picked]);
      setDrawing(false);
    }, 600);
  };

  const reset = () => {
    setWinners([]);
    setDrawnIds([]);
    setError("");
  };

  return (
    <div>
      <label htmlFor="cp-comments" className="block text-sm font-semibold text-slate-900">
        Paste comments (one per line)
      </label>
      <p className="mt-1 text-sm text-slate-600">
        Copy comments from your YouTube video and paste them here. Everything is processed in
        your browser — nothing is uploaded anywhere, and we can&apos;t access YouTube&apos;s API
        without your login, which is why pasting manually keeps this tool free and private.
      </p>
      <textarea
        id="cp-comments"
        rows={6}
        value={raw}
        onChange={(e) => {
          setRaw(e.target.value);
          reset();
        }}
        placeholder={"Awesome video!\nThis helped me so much, thanks\nEntering the giveaway!"}
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <p className="mt-1 text-sm text-slate-500">
        {eligible.length} eligible {eligible.length === 1 ? "entry" : "entries"}
        {drawnIds.length > 0 && ` · ${drawnIds.length} already drawn`}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cp-keyword" className="block text-sm font-semibold text-slate-900">
            Only include comments containing (optional)
          </label>
          <input
            id="cp-keyword"
            type="text"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              reset();
            }}
            placeholder="e.g. #giveaway"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="cp-count" className="block text-sm font-semibold text-slate-900">
            Number of winners (1–5)
          </label>
          <input
            id="cp-count"
            type="number"
            min={1}
            max={5}
            value={winnerCount}
            onChange={(e) => setWinnerCount(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
      </div>

      <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={dedupe}
          onChange={(e) => {
            setDedupe(e.target.checked);
            reset();
          }}
          className="h-4 w-4 rounded accent-red-600"
        />
        Remove duplicate comments (one entry per person)
      </label>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={pick}
          disabled={drawing || eligible.length === 0}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {drawing ? "Drawing…" : winners.length > 0 ? "Pick again" : "Pick winner(s)"}
        </button>
        {(winners.length > 0 || drawnIds.length > 0) && (
          <button
            onClick={reset}
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Reset draw
          </button>
        )}
      </div>
      {error && <p className="mt-2 text-sm font-semibold text-red-600">{error}</p>}

      {drawing && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="animate-pulse text-lg font-semibold text-slate-600">Drawing winners…</p>
        </div>
      )}

      {!drawing && winners.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">
            {winners.length === 1 ? "Winner" : "Winners"}
          </p>
          <div className="mt-2 space-y-2">
            {winners.map((w, i) => (
              <div
                key={`${w}-${i}`}
                className="rounded-xl border-2 border-green-500 bg-green-50 p-4"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-green-700">
                  Winner {i + 1}
                </p>
                <p className="mt-1 font-semibold text-slate-900">{w}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Tip: screen-record the draw to show your audience the process was fair.
          </p>
        </div>
      )}
    </div>
  );
}
