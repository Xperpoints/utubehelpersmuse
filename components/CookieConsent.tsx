"use client";

import { useState } from "react";
import Link from "next/link";

const KEY = "uh-cookie-consent";

function readStoredConsent(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  // Lazy initializer reads localStorage once — avoids setState inside an effect.
  const [consent, setConsent] = useState<string | null>(() =>
    typeof window === "undefined" ? null : readStoredConsent()
  );

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable */
    }
    setConsent(value);
  };

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 p-4"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 shadow-2xl">
        <p className="text-sm font-semibold text-slate-900">We value your privacy</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          We store your cookie choice on this device so we don&apos;t ask again. We don&apos;t
          set tracking or advertising cookies at this time. Read our{" "}
          <Link href="/cookie-policy" className="text-red-600 underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => choose("accepted")}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Accept
          </button>
          <button
            onClick={() => choose("declined")}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
