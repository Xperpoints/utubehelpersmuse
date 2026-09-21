"use client";

import { useState } from "react";
import Link from "next/link";

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
  // Bare 11-character ID
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
  return null;
}

export function TagExtractorTool() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleExtract = () => {
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
      setError("");
      setCopied(false);
    } else {
      setVideoId(null);
      setError("That doesn't look like a valid YouTube video URL. Paste a full watch, Shorts, or youtu.be link — or just the 11-character video ID.");
    }
  };

  const copyId = async () => {
    if (!videoId) return;
    try {
      await navigator.clipboard.writeText(videoId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <label htmlFor="te-url" className="block text-sm font-semibold text-slate-900">
        Paste a YouTube video URL
      </label>
      <input
        id="te-url"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleExtract()}
        placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <button
        onClick={handleExtract}
        disabled={!url.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Get video ID
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {videoId && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">Video ID extracted</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <code className="rounded-md bg-white px-3 py-2 font-mono text-sm text-slate-800 border border-slate-200">
              {videoId}
            </code>
            <button
              onClick={copyId}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? "Copied!" : "Copy ID"}
            </button>
          </div>

          <h3 className="mt-6 text-base font-bold text-slate-900">
            How to see this video&apos;s tags (takes 30 seconds)
          </h3>
          <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-slate-700">
            <li>
              Open the video in your browser:{" "}
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-600 underline"
              >
                youtube.com/watch?v={videoId}
              </a>
            </li>
            <li>
              Right-click anywhere on the page (not on the video player) and choose{" "}
              <strong>View page source</strong>.{" "}
              <span className="text-slate-500">(Keyboard shortcut: Ctrl+U on Windows, ⌘+Option+U on Mac.)</span>
            </li>
            <li>
              In the source tab, press <strong>Ctrl+F</strong> (or ⌘+F) and search for{" "}
              <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs border border-slate-200">&quot;keywords&quot;</code>
            </li>
            <li>
              The text right after it — something like{" "}
              <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs border border-slate-200">&quot;keywords&quot;:[&quot;tag one&quot;,&quot;tag two&quot;]</code>{" "}
              — is the video&apos;s full tag list. If the list is empty, the creator didn&apos;t add tags.
            </li>
          </ol>

          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-800">
            <strong>Why not automatic?</strong> YouTube deliberately hides tags from its public
            pages and API, and browsers block cross-site fetching of video pages. Any site
            claiming to &quot;auto-extract&quot; tags is either using the same view-source trick
            behind the scenes or guessing. The method above is the honest, reliable way.
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Found tags worth modeling? Build your own set with our{" "}
            <Link href="/tools/youtube-tag-generator" className="font-semibold text-red-600 underline">
              YouTube Tag Generator
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
