"use client";

import { useState } from "react";
import QRCode from "qrcode";

export function WhatsAppQrGeneratorTool() {
  const [input, setInput] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    const clean = input.trim();
    if (!clean) {
      setError("Enter a URL or some text first — for example, your WhatsApp chat link.");
      setDataUrl("");
      return;
    }
    if (clean.length > 2000) {
      setError(
        "That text is very long for a QR code and may be hard for phones to scan. Try keeping it under 2,000 characters."
      );
      setDataUrl("");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const url = await QRCode.toDataURL(clean, { width: 512, margin: 2 });
      setDataUrl(url);
    } catch {
      setError("Something went wrong generating the QR code. Please try again with shorter text.");
      setDataUrl("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label htmlFor="wqr-input" className="block text-sm font-semibold text-slate-900">
        URL or text to encode
      </label>
      <input
        id="wqr-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        placeholder="e.g. https://wa.me/923001234567?text=Hi!"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <p className="mt-1 text-xs text-slate-500">
        Tip: paste your WhatsApp chat link here — generate one with our click-to-chat tool and
        turn it into a code people can scan.
      </p>

      <button
        onClick={handleGenerate}
        disabled={!input.trim() || loading}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        {loading ? "Generating..." : "Generate QR code"}
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {dataUrl && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
          <p className="text-sm font-bold text-slate-900">Your QR code</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dataUrl}
            alt="Generated QR code"
            width={256}
            height={256}
            className="mx-auto mt-4 rounded-lg border border-slate-200 bg-white"
          />
          <div className="mt-4">
            <a
              href={dataUrl}
              download="qr-code.png"
              className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              Download PNG
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Test it with your phone camera before printing — if it does not scan instantly,
            regenerate with shorter text.
          </p>
        </div>
      )}
    </div>
  );
}
