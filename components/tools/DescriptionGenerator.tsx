"use client";

import { useState } from "react";

function buildDescription(opts: {
  topic: string;
  keyword: string;
  channel: string;
  link: string;
  chapters: string[];
}): string {
  const { topic, keyword, channel, link, chapters } = opts;
  const lines: string[] = [];

  // Hook + summary (visible before "show more")
  lines.push(`${topic} — everything you need to know, explained simply.`);
  lines.push(
    `In this video, we break down ${keyword || topic} step by step, so you can ${keyword ? `master ${keyword}` : "get results"} without the guesswork.`
  );
  lines.push("");

  // In this video
  lines.push("IN THIS VIDEO:");
  lines.push(`- What ${keyword || topic} actually is (and what it isn't)`);
  lines.push("- The most common beginner mistakes to avoid");
  lines.push("- A simple step-by-step process you can follow today");
  lines.push("- Pro tips that took us years to learn");
  lines.push("");

  // Chapters
  const cleanChapters = chapters.map((c) => c.trim()).filter(Boolean);
  if (cleanChapters.length > 0) {
    lines.push("CHAPTERS:");
    cleanChapters.forEach((c, i) => {
      lines.push(`${c} - Section ${i + 1}`);
    });
    lines.push("");
  } else {
    lines.push("CHAPTERS:");
    lines.push("00:00 - Intro");
    lines.push("01:30 - Getting started");
    lines.push("05:00 - Step-by-step walkthrough");
    lines.push("12:00 - Common mistakes");
    lines.push("15:30 - Final tips");
    lines.push("");
  }

  // Links
  lines.push("LINKS & RESOURCES:");
  if (link) lines.push(`- Our website: ${link}`);
  lines.push("- More guides: https://utubehelpers.com/blog");
  lines.push("");

  // CTA
  lines.push(
    `If this helped, subscribe to ${channel || "the channel"} for weekly videos on ${keyword || topic} — new uploads every week.`
  );
  lines.push("");
  lines.push("HASHTAGS:");
  const tagBase = (keyword || topic).toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
  const hashtags = [
    "#" + tagBase.join(""),
    "#" + (tagBase[0] || "youtube"),
    "#youtube",
  ];
  lines.push(hashtags.join(" "));

  return lines.join("\n");
}

export function DescriptionGeneratorTool() {
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [channel, setChannel] = useState("");
  const [link, setLink] = useState("");
  const [chapters, setChapters] = useState(["", "", ""]);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setOutput(buildDescription({ topic: topic.trim(), keyword: keyword.trim(), channel: channel.trim(), link: link.trim(), chapters }));
    setCopied(false);
  };

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const wordCount = output ? output.trim().split(/\s+/).length : 0;

  const inputCls =
    "mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dg-topic" className="block text-sm font-semibold text-slate-900">
            Video topic *
          </label>
          <input id="dg-topic" type="text" value={topic} onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. How to start a podcast" className={inputCls} />
        </div>
        <div>
          <label htmlFor="dg-keyword" className="block text-sm font-semibold text-slate-900">
            Main keyword
          </label>
          <input id="dg-keyword" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}
            placeholder="e.g. start a podcast" className={inputCls} />
        </div>
        <div>
          <label htmlFor="dg-channel" className="block text-sm font-semibold text-slate-900">
            Channel name
          </label>
          <input id="dg-channel" type="text" value={channel} onChange={(e) => setChannel(e.target.value)}
            placeholder="e.g. Creator Academy" className={inputCls} />
        </div>
        <div>
          <label htmlFor="dg-link" className="block text-sm font-semibold text-slate-900">
            Website / social link (optional)
          </label>
          <input id="dg-link" type="text" value={link} onChange={(e) => setLink(e.target.value)}
            placeholder="https://…" className={inputCls} />
        </div>
      </div>

      <div className="mt-4">
        <span className="block text-sm font-semibold text-slate-900">
          Chapters (optional — format: MM:SS)
        </span>
        <div className="mt-1.5 grid gap-2 sm:grid-cols-3">
          {chapters.map((c, i) => (
            <input
              key={i}
              type="text"
              value={c}
              onChange={(e) => {
                const next = [...chapters];
                next[i] = e.target.value;
                setChapters(next);
              }}
              placeholder={`e.g. 0${i * 2}:00`}
              aria-label={`Chapter ${i + 1} timestamp`}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!topic.trim()}
        className="mt-5 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate description
      </button>

      {output && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">
              Your description · {output.length} characters · {wordCount} words
            </p>
            <button
              onClick={copyOutput}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? "Copied!" : "Copy all"}
            </button>
          </div>
          <textarea
            readOnly
            rows={16}
            value={output}
            aria-label="Generated video description"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-mono text-xs leading-relaxed text-slate-700"
          />
          <p className="mt-2 text-xs text-slate-500">
            Review and personalize before publishing — especially the chapters and links.
          </p>
        </div>
      )}
    </div>
  );
}
