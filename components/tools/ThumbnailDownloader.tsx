"use client";

import { useState } from "react";

function extractVideoId(url: string): string | null {
  const trimmed = url.trim();
  const patterns = [
    /(?:youtube\.com\/watch\?[^#]*v=|youtube\.com\/shorts\/|youtube\.com\/embed\/|youtube\.com\/live\/)([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = trimmed.match(p);
    if (m) return m[1];
  }
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
  return null;
}

const QUALITIES = [
  { key: "maxresdefault", label: "Full HD", size: "1280 × 720", note: "Best quality — not available for every video" },
  { key: "sddefault", label: "HD", size: "640 × 480", note: "Available for almost all videos" },
  { key: "hqdefault", label: "Medium", size: "480 × 360", note: "Standard quality fallback" },
  { key: "mqdefault", label: "Small", size: "320 × 180", note: "Always available" },
] as const;

export function ThumbnailDownloaderTool() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [maxresMissing, setMaxresMissing] = useState(false);

  const handleFetch = () => {
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
      setMaxresMissing(false);
      setError("");
    } else {
      setVideoId(null);
      setError("That doesn't look like a valid YouTube video URL. Paste a full watch, Shorts, or youtu.be link — or just the 11-character video ID.");
    }
  };

  return (
    <div>
      <label htmlFor="td-url" className="block text-sm font-semibold text-slate-900">
        Paste a YouTube video URL
      </label>
      <input
        id="td-url"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleFetch()}
        placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleFetch}
        disabled={!url.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Get thumbnails
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {videoId && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">
            Available thumbnails — click Download to save
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {QUALITIES.map((q) => {
              if (q.key === "maxresdefault" && maxresMissing) return null;
              const src = `https://i.ytimg.com/vi/${videoId}/${q.key}.jpg`;
              return (
                <div key={q.key} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src={src}
                    alt={`${q.label} thumbnail preview`}
                    className="aspect-video w-full bg-slate-100 object-cover"
                    loading="lazy"
                    onError={() => q.key === "maxresdefault" && setMaxresMissing(true)}
                  />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold text-slate-900">{q.label}</p>
                      <p className="text-xs text-slate-500">{q.size} · {q.note}</p>
                    </div>
                    <a
                      href={src}
                      download={`youtube-thumbnail-${q.key}.jpg`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                    >
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          {maxresMissing && (
            <p className="mt-3 text-xs text-slate-500">
              Note: Full HD (maxres) isn&apos;t available for this video — YouTube only generates
              it for uploads with high-resolution source files. The HD option is the best available.
            </p>
          )}
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-800">
            <strong>Copyright reminder:</strong> thumbnails belong to their video owners.
            Downloading is fine for study or recovering your own designs — reusing someone
            else&apos;s thumbnail on your videos without permission is not.
          </p>
        </div>
      )}
    </div>
  );
}
