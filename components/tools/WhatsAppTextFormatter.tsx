"use client";

import { useRef, useState } from "react";

const FORMATS = [
  { label: "Bold", marker: "*", hint: "*text*" },
  { label: "Italic", marker: "_", hint: "_text_" },
  { label: "Strikethrough", marker: "~", hint: "~text~" },
  { label: "Monospace", marker: "```", hint: "```text```" },
] as const;

export function WhatsAppTextFormatterTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const wrapSelection = (marker: string) => {
    const area = areaRef.current;
    if (!area) return;
    const { selectionStart, selectionEnd, value } = area;

    let next: string;
    let cursorPos: number;
    if (selectionStart !== selectionEnd) {
      const selected = value.slice(selectionStart, selectionEnd);
      next = value.slice(0, selectionStart) + marker + selected + marker + value.slice(selectionEnd);
      cursorPos = selectionEnd + marker.length * 2;
    } else {
      next = value + (value && !value.endsWith("\n") ? " " : "") + marker + marker;
      cursorPos = next.length - marker.length;
    }

    setText(next);
    setCopied(false);
    requestAnimationFrame(() => {
      area.focus();
      area.setSelectionRange(cursorPos, cursorPos);
    });
  };

  const copyText = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const clearText = () => {
    setText("");
    setCopied(false);
    areaRef.current?.focus();
  };

  return (
    <div>
      <label htmlFor="wtf-text" className="block text-sm font-semibold text-slate-900">
        Your message
      </label>
      <textarea
        id="wtf-text"
        ref={areaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message, select words, then hit a format button..."
        rows={6}
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {FORMATS.map((f) => (
          <button
            key={f.label}
            onClick={() => wrapSelection(f.marker)}
            title={`Wrap selection as ${f.hint}`}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            {f.label}
          </button>
        ))}
        {text && (
          <button
            onClick={clearText}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
          >
            Clear
          </button>
        )}
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Select text first to format just that part — with nothing selected, the markers are
        added at the end for you to type between.
      </p>

      {text && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-900">Formatted output (paste into WhatsApp)</p>
          <pre className="mt-2 whitespace-pre-wrap break-words rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-sm text-slate-800">
            {text}
          </pre>
          <button
            onClick={copyText}
            className="mt-4 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            {copied ? "Copied!" : "Copy formatted text"}
          </button>
        </div>
      )}
    </div>
  );
}
