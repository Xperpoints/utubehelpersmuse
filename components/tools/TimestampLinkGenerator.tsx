"use client";

import { useState } from "react";

function extractVideoId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?[^#]*v=|embed\/|shorts\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function parseTimestamp(input: string): number | null {
  const t = input.trim();
  const m = t.match(/^(?:(\d+):)?([0-5]?\d):([0-5]\d)$/);
  if (!m) return null;
  const h = m[1] ? parseInt(m[1], 10) : 0;
  return h * 3600 + parseInt(m[2], 10) * 60 + parseInt(m[3], 10);
}

function formatTimestamp(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

interface Row {
  id: number;
  time: string;
  label: string;
}

let nextId = 4;

export function TimestampLinkTool() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState<string | null>(null);
  const [urlError, setUrlError] = useState("");
  const [rows, setRows] = useState<Row[]>([
    { id: 1, time: "00:00", label: "Intro" },
    { id: 2, time: "", label: "" },
    { id: 3, time: "", label: "" },
  ]);
  const [copiedLink, setCopiedLink] = useState<number | null>(null);
  const [copiedChapters, setCopiedChapters] = useState(false);

  const handleLoad = () => {
    const id = extractVideoId(url);
    if (!id) {
      setUrlError("Couldn't find a video ID. Paste a full YouTube link or the 11-character video ID.");
      setVideoId(null);
      return;
    }
    setUrlError("");
    setVideoId(id);
  };

  const updateRow = (id: number, field: "time" | "label", value: string) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const addRow = () => setRows([...rows, { id: nextId++, time: "", label: "" }]);
  const removeRow = (id: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((r) => r.id !== id));
  };

  const parsed = rows.map((r) => ({
    ...r,
    seconds: r.time.trim() === "" ? null : parseTimestamp(r.time),
    hasTime: r.time.trim() !== "",
  }));

  const validRows = parsed.filter((r) => r.seconds !== null && r.label.trim() !== "");
  const hasErrors = parsed.some((r) => r.hasTime && r.seconds === null);

  const chaptersBlock = validRows
    .sort((a, b) => (a.seconds as number) - (b.seconds as number))
    .map((r) => `${formatTimestamp(r.seconds as number)} ${r.label.trim()}`)
    .join("\n");

  const copyText = async (text: string, done: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      done();
    } catch {
      /* clipboard unavailable */
    }
  };

  const inputCls =
    "rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

  return (
    <div>
      <label htmlFor="tl-url" className="block text-sm font-semibold text-slate-900">
        YouTube video URL
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id="tl-url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLoad()}
          placeholder="https://www.youtube.com/watch?v=..."
          className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
        <button
          onClick={handleLoad}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Load video
        </button>
      </div>
      {urlError && <p className="mt-2 text-sm font-semibold text-red-600">{urlError}</p>}

      {videoId && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Timestamps &amp; labels</p>
            <button
              onClick={addRow}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              + Add row
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {rows.map((r) => {
              const p = parsed.find((x) => x.id === r.id);
              const bad = p && p.hasTime && p.seconds === null;
              return (
                <div key={r.id} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <input
                    type="text"
                    value={r.time}
                    onChange={(e) => updateRow(r.id, "time", e.target.value)}
                    placeholder="mm:ss"
                    aria-label="Timestamp"
                    className={`w-full sm:w-28 ${inputCls} ${bad ? "border-red-500" : ""}`}
                  />
                  <input
                    type="text"
                    value={r.label}
                    onChange={(e) => updateRow(r.id, "label", e.target.value)}
                    placeholder="Chapter label, e.g. The setup"
                    aria-label="Chapter label"
                    className={`flex-1 ${inputCls}`}
                  />
                  <button
                    onClick={() => removeRow(r.id)}
                    aria-label="Remove row"
                    className="shrink-0 rounded-md px-2 py-2 font-bold text-slate-400 hover:text-red-600"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
          {hasErrors && (
            <p className="mt-2 text-sm font-semibold text-red-600">
              One or more timestamps are invalid — use mm:ss format (e.g. 02:30) or h:mm:ss for videos over an hour.
            </p>
          )}

          {validRows.length > 0 && (
            <>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">Shareable links</p>
                <div className="mt-2 space-y-2">
                  {validRows
                    .sort((a, b) => (a.seconds as number) - (b.seconds as number))
                    .map((r) => {
                      const link = `https://youtu.be/${videoId}?t=${r.seconds}`;
                      return (
                        <div
                          key={r.id}
                          className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-900">
                              {formatTimestamp(r.seconds as number)} — {r.label.trim()}
                            </p>
                            <p className="truncate text-xs text-slate-500">{link}</p>
                          </div>
                          <button
                            onClick={() =>
                              copyText(link, () => {
                                setCopiedLink(r.id);
                                setTimeout(() => setCopiedLink(null), 2000);
                              })
                            }
                            className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                          >
                            {copiedLink === r.id ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Chapters block (paste into your description)
                  </p>
                  <button
                    onClick={() =>
                      copyText(chaptersBlock, () => {
                        setCopiedChapters(true);
                        setTimeout(() => setCopiedChapters(false), 2000);
                      })
                    }
                    className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {copiedChapters ? "Copied!" : "Copy all"}
                  </button>
                </div>
                <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-slate-900 p-4 text-sm leading-relaxed text-slate-100">
                  {chaptersBlock}
                </pre>
                <p className="mt-2 text-xs text-slate-500">
                  Tip: your first chapter must start at 00:00 and you need at least 3 chapters for
                  YouTube to show them on the progress bar.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
