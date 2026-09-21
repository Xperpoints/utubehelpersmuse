"use client";

import { useState } from "react";

function parseNumber(raw: string): number | null {
  const n = Number(raw.replace(/,/g, "").trim());
  if (!raw.trim() || Number.isNaN(n) || n < 0) return null;
  return n;
}

function verdictFor(rate: number): { label: string; detail: string; tone: string } {
  if (rate < 3) {
    return {
      label: "Below typical",
      detail:
        "As a rough guide, many active TikTok creators land somewhere between 3% and 9%. A lower number often means your videos are reaching people who scroll past — experiment with stronger opening hooks and tighter editing.",
      tone: "text-amber-700",
    };
  }
  if (rate <= 9) {
    return {
      label: "Typical range",
      detail:
        "This sits in the zone where a lot of consistent creators land. Keep doing what's working, and test one new format a week to find your next breakout.",
      tone: "text-emerald-700",
    };
  }
  return {
    label: "Strong",
    detail:
      "This is well above what most creators see. Whatever you're doing — your hooks, your niche fit, your posting rhythm — double down on it.",
    tone: "text-emerald-700",
  };
}

export function TikTokEngagementCalculatorTool() {
  const [followers, setFollowers] = useState("");
  const [likes, setLikes] = useState("");
  const [comments, setComments] = useState("");
  const [shares, setShares] = useState("");
  const [rate, setRate] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const f = parseNumber(followers);
    const l = parseNumber(likes);
    const c = parseNumber(comments);
    const s = parseNumber(shares);
    if (f === null || l === null || c === null || s === null) {
      setError("Enter valid numbers (0 or more) in every field.");
      setRate(null);
      return;
    }
    if (f === 0) {
      setError("Followers must be more than zero to calculate a rate.");
      setRate(null);
      return;
    }
    setError("");
    setRate(((l + c + s) / f) * 100);
  };

  const verdict = rate !== null ? verdictFor(rate) : null;

  const field = (
    id: string,
    label: string,
    value: string,
    setter: (v: string) => void,
    placeholder: string
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-900">
        {label}
      </label>
      <input
        id={id}
        type="number"
        min="0"
        inputMode="numeric"
        value={value}
        onChange={(e) => setter(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
    </div>
  );

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {field("te-followers", "Followers", followers, setFollowers, "e.g. 12500")}
        {field("te-likes", "Average likes per video", likes, setLikes, "e.g. 850")}
        {field("te-comments", "Average comments per video", comments, setComments, "e.g. 45")}
        {field("te-shares", "Average shares per video", shares, setShares, "e.g. 60")}
      </div>

      <button
        onClick={handleCalculate}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 sm:w-auto"
      >
        Calculate engagement rate
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {rate !== null && verdict && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-600">Your engagement rate</p>
          <p className="mt-1 text-4xl font-extrabold text-slate-900">{rate.toFixed(2)}%</p>
          <p className={`mt-2 text-base font-bold ${verdict.tone}`}>{verdict.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{verdict.detail}</p>
          <p className="mt-3 text-sm text-slate-500">
            Formula: (avg likes + avg comments + avg shares) / followers x 100. Use averages from
            your last 10-20 videos for a fair picture — one viral outlier can skew the result.
          </p>
        </div>
      )}
    </div>
  );
}
