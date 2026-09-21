"use client";

import { useState } from "react";

function cleanNumber(raw: string): string {
  return raw.replace(/[\s+\-().]/g, "");
}

export function WhatsAppLinkGeneratorTool() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const digits = cleanNumber(phone);

    if (!digits) {
      setError("Enter a phone number first — include the country code, e.g. 923001234567.");
      setLink("");
      return;
    }
    if (!/^\d+$/.test(digits)) {
      setError(
        "Phone numbers can only contain digits (plus spaces, dashes, or a leading + which are removed automatically). Remove any letters or symbols."
      );
      setLink("");
      return;
    }
    if (digits.length < 7 || digits.length > 15) {
      setError(
        `That number has ${digits.length} digits after cleaning. WhatsApp numbers need 7–15 digits including the country code — double-check you included it and didn't add extra digits.`
      );
      setLink("");
      return;
    }

    setError("");
    setCopied(false);
    const base = `https://wa.me/${digits}`;
    setLink(message.trim() ? `${base}?text=${encodeURIComponent(message.trim())}` : base);
  };

  const copyLink = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wal-phone" className="block text-sm font-semibold text-slate-900">
            Phone number with country code
          </label>
          <input
            id="wal-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="e.g. 923001234567"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <p className="mt-1 text-xs text-slate-500">
            Digits only after cleaning — spaces, dashes, and a leading + are removed for you.
          </p>
        </div>
        <div>
          <label htmlFor="wal-message" className="block text-sm font-semibold text-slate-900">
            Pre-filled message <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="wal-message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="e.g. Hi! I'd like to place an order."
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!phone.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate chat link
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {link && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-900">Your click-to-chat link</p>
          <code className="mt-2 block break-all rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-sm text-slate-800">
            {link}
          </code>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={copyLink}
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              {copied ? "Copied!" : "Copy link"}
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
            >
              Test it in WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
