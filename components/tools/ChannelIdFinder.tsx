"use client";

import { useState } from "react";

type ResultKind = "channel-id" | "handle" | "legacy" | "invalid" | null;

interface Result {
  kind: Exclude<ResultKind, null>;
  label: string;
  value: string;
  copyable: boolean;
}

function analyze(input: string): Result {
  const trimmed = input.trim();

  // Direct channel ID paste
  if (/^UC[A-Za-z0-9_-]{22}$/.test(trimmed)) {
    return { kind: "channel-id", label: "Channel ID", value: trimmed, copyable: true };
  }

  let url: URL;
  try {
    url = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
  } catch {
    return { kind: "invalid", label: "", value: "", copyable: false };
  }

  if (!/(\.|^)(youtube\.com|youtu\.be)$/.test(url.hostname)) {
    return { kind: "invalid", label: "", value: "", copyable: false };
  }

  const path = url.pathname;

  const channelMatch = path.match(/^\/channel\/(UC[A-Za-z0-9_-]{22})\/?$/);
  if (channelMatch) {
    return { kind: "channel-id", label: "Channel ID", value: channelMatch[1], copyable: true };
  }

  const handleMatch = path.match(/^\/@([^/]+)\/?$/);
  if (handleMatch) {
    return { kind: "handle", label: "Channel handle", value: `@${decodeURIComponent(handleMatch[1])}`, copyable: true };
  }

  const legacyMatch = path.match(/^\/(c|user)\/([^/]+)\/?$/);
  if (legacyMatch) {
    return {
      kind: "legacy",
      label: legacyMatch[1] === "c" ? "Custom URL name" : "Legacy username",
      value: decodeURIComponent(legacyMatch[2]),
      copyable: true,
    };
  }

  return { kind: "invalid", label: "", value: "", copyable: false };
}

export function ChannelIdFinderTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFind = () => {
    setResult(analyze(input));
    setCopied(false);
  };

  const copyValue = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const channelUrl = input.trim().startsWith("http")
    ? input.trim()
    : input.trim()
      ? `https://${input.trim()}`
      : "";

  return (
    <div>
      <label htmlFor="ci-url" className="block text-sm font-semibold text-slate-900">
        Paste any YouTube channel URL
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id="ci-url"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleFind()}
          placeholder="https://www.youtube.com/@SomeChannel"
          className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
        <button
          onClick={handleFind}
          disabled={!input.trim()}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Find info
        </button>
      </div>

      {result && result.kind === "invalid" && (
        <p className="mt-3 rounded-lg bg-red-50 p-4 text-sm font-semibold text-red-700">
          That doesn&apos;t look like a YouTube channel URL. Try a link like
          youtube.com/@ChannelHandle or youtube.com/channel/UCxxxxxxxxxxxxxxxxxxxxxx.
        </p>
      )}

      {result && result.kind === "channel-id" && (
        <div className="mt-4 rounded-xl border-2 border-green-500 bg-green-50 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-green-700">Channel ID found</p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <code className="break-all font-mono text-sm font-semibold text-slate-900">{result.value}</code>
            <button
              onClick={copyValue}
              className="shrink-0 rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
            >
              {copied ? "Copied!" : "Copy ID"}
            </button>
          </div>
        </div>
      )}

      {(result?.kind === "handle" || result?.kind === "legacy") && (
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-5">
          <p className="text-sm font-bold text-slate-900">
            Found: {result.label} <span className="font-mono">{result.value}</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            A handle can&apos;t be converted into a channel ID offline — no tool can do this
            without YouTube&apos;s servers. To get the ID, open the channel and:
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm text-slate-700">
            <li>Go to the channel&apos;s <strong>About</strong> tab</li>
            <li>Click <strong>Share channel</strong> (or the share icon)</li>
            <li>Choose <strong>Copy channel ID</strong> — then paste it above to verify it</li>
          </ol>
          {channelUrl && (
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Open channel →
            </a>
          )}
        </div>
      )}

      <div className="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Quick reference</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li><span className="font-mono text-xs">youtube.com/channel/UC…</span> — contains the channel ID directly</li>
          <li><span className="font-mono text-xs">youtube.com/@handle</span> — the modern handle (unique, but not the ID)</li>
          <li><span className="font-mono text-xs">youtube.com/c/name</span> or <span className="font-mono text-xs">/user/name</span> — older URL formats</li>
        </ul>
      </div>
    </div>
  );
}
