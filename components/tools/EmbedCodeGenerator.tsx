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

function parseStartTime(input: string): number | null {
  const t = input.trim();
  if (!t) return 0;
  if (/^\d+$/.test(t)) return parseInt(t, 10);
  const m = t.match(/^(?:(\d+):)?([0-5]?\d):([0-5]\d)$/);
  if (!m) return null;
  const h = m[1] ? parseInt(m[1], 10) : 0;
  return h * 3600 + parseInt(m[2], 10) * 60 + parseInt(m[3], 10);
}

export function EmbedCodeTool() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [width, setWidth] = useState("560");
  const [autoplay, setAutoplay] = useState(false);
  const [mute, setMute] = useState(false);
  const [startAt, setStartAt] = useState("");
  const [privacyMode, setPrivacyMode] = useState(false);
  const [noRelated, setNoRelated] = useState(true);
  const [loop, setLoop] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLoad = () => {
    const id = extractVideoId(url);
    if (!id) {
      setError("Couldn't find a video ID in that URL. Paste a full YouTube link (watch, youtu.be, shorts, or embed) or the 11-character video ID.");
      setVideoId(null);
      return;
    }
    setError("");
    setVideoId(id);
    setShowPreview(false);
    setCopied(false);
  };

  const widthNum = Math.max(200, Math.min(1920, parseInt(width, 10) || 560));
  const heightNum = Math.round((widthNum * 9) / 16);
  const startSecs = parseStartTime(startAt);

  let embedCode = "";
  let embedSrc = "";
  if (videoId) {
    const domain = privacyMode ? "www.youtube-nocookie.com" : "www.youtube.com";
    const params = new URLSearchParams();
    if (autoplay) params.set("autoplay", "1");
    if (mute) params.set("mute", "1");
    if (startSecs && startSecs > 0) params.set("start", String(startSecs));
    if (noRelated) params.set("rel", "0");
    if (loop) {
      params.set("loop", "1");
      params.set("playlist", videoId);
    }
    const qs = params.toString();
    embedSrc = `https://${domain}/embed/${videoId}${qs ? `?${qs}` : ""}`;
    embedCode = `<iframe width="${widthNum}" height="${heightNum}" src="${embedSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const inputCls =
    "mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

  return (
    <div>
      <label htmlFor="ec-url" className="block text-sm font-semibold text-slate-900">
        YouTube video URL
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id="ec-url"
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
      {error && <p className="mt-2 text-sm font-semibold text-red-600">{error}</p>}

      {videoId && (
        <div className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="ec-width" className="block text-sm font-semibold text-slate-900">
                Width (px)
              </label>
              <input
                id="ec-width"
                type="number"
                min={200}
                max={1920}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="ec-start" className="block text-sm font-semibold text-slate-900">
                Start at (mm:ss, optional)
              </label>
              <input
                id="ec-start"
                type="text"
                value={startAt}
                onChange={(e) => setStartAt(e.target.value)}
                placeholder="e.g. 1:30"
                className={inputCls}
              />
              {startAt.trim() !== "" && startSecs === null && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  Use mm:ss format, e.g. 1:30
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            {[
              { label: "Autoplay", checked: autoplay, set: setAutoplay, note: "Most browsers require Mute for autoplay to work" },
              { label: "Mute (required for autoplay in most browsers)", checked: mute, set: setMute, note: "" },
              { label: "Privacy-enhanced mode (youtube-nocookie.com)", checked: privacyMode, set: setPrivacyMode, note: "Better choice if your audience is in the EU" },
              { label: "Hide related videos at the end (rel=0)", checked: noRelated, set: setNoRelated, note: "" },
              { label: "Loop video", checked: loop, set: setLoop, note: "" },
            ].map((opt) => (
              <label key={opt.label} className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={opt.checked}
                  onChange={(e) => opt.set(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded accent-red-600"
                />
                <span>
                  {opt.label}
                  {opt.note && <span className="text-slate-500"> — {opt.note}</span>}
                </span>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Embed code</p>
              <button
                onClick={copyCode}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {copied ? "Copied!" : "Copy code"}
              </button>
            </div>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-relaxed text-slate-100">
              {embedCode}
            </pre>
          </div>

          <div className="mt-6">
            {!showPreview ? (
              <button
                onClick={() => setShowPreview(true)}
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Show live preview
              </button>
            ) : (
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-900">Preview</p>
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <iframe
                    width="100%"
                    height="360"
                    src={embedSrc}
                    title="YouTube video player preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Make it responsive</p>
            <p className="mt-1 text-sm text-slate-600">
              Fixed pixel widths break on mobile. Wrap the iframe in a container with{" "}
              <code className="rounded bg-slate-200 px-1">aspect-ratio: 16 / 9</code> and set the
              iframe to <code className="rounded bg-slate-200 px-1">width: 100%; height: 100%</code>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
