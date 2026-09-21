"use client";

import { useState } from "react";

function parseNumber(raw: string): number | null {
  const n = Number(raw.replace(/,/g, "").trim());
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

function verdictFor(rate: number): { label: string; detail: string } {
  if (rate < 1)
    return {
      label: "Below typical range",
      detail:
        "An engagement rate under 1% usually signals that posts are not reaching or resonating with much of the follower base. Common culprits: posting inconsistently, content that does not invite interaction, or followers accumulated long ago who no longer care about the topic. Focus on interactive formats — questions, polls, stories — and reply to every comment to restart conversations.",
    };
  if (rate < 3)
    return {
      label: "In the typical range",
      detail:
        "Most pages land somewhere in the 1–3% range, so you are in normal territory. The path upward is usually format variety and consistency rather than a radical overhaul: more posts that ask for a response, fewer pure announcements, and a steady schedule your audience can rely on.",
    };
  if (rate < 6)
    return {
      label: "Strong engagement",
      detail:
        "A rate in the 3–6% range means your content is genuinely connecting — this is above what most pages achieve. Keep doing what is working, note which post formats drive it, and resist the urge to chase follower count at the expense of this responsiveness.",
    };
  return {
    label: "Excellent engagement",
    detail:
      "Above 6% is exceptional and usually means a tight, loyal community rather than a large passive audience. Protect this: keep engaging personally, maintain your posting rhythm, and be cautious with anything (like aggressive promotion or off-topic content) that could dilute the trust you have built.",
  };
}

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

export function FacebookEngagementCalculatorTool() {
  const [followers, setFollowers] = useState("");
  const [reactions, setReactions] = useState("");
  const [comments, setComments] = useState("");
  const [shares, setShares] = useState("");
  const [rate, setRate] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const f = parseNumber(followers);
    const r = parseNumber(reactions);
    const c = parseNumber(comments);
    const s = parseNumber(shares);

    if (f === null || f === 0) {
      setError("Enter a valid page follower count greater than zero.");
      setRate(null);
      return;
    }
    if (r === null || c === null || s === null) {
      setError("Reactions, comments, and shares must be valid numbers (0 or more).");
      setRate(null);
      return;
    }
    setError("");
    setRate(((r + c + s) / f) * 100);
  };

  const verdict = rate !== null ? verdictFor(rate) : null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fec-followers" className="block text-sm font-semibold text-slate-900">
            Page followers
          </label>
          <input
            id="fec-followers"
            type="text"
            inputMode="numeric"
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 12500"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="fec-reactions" className="block text-sm font-semibold text-slate-900">
            Avg. reactions per post
          </label>
          <input
            id="fec-reactions"
            type="text"
            inputMode="numeric"
            value={reactions}
            onChange={(e) => setReactions(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 180"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="fec-comments" className="block text-sm font-semibold text-slate-900">
            Avg. comments per post
          </label>
          <input
            id="fec-comments"
            type="text"
            inputMode="numeric"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 24"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="fec-shares" className="block text-sm font-semibold text-slate-900">
            Avg. shares per post
          </label>
          <input
            id="fec-shares"
            type="text"
            inputMode="numeric"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 12"
            className={inputClass}
          />
        </div>
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
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Your engagement rate
          </p>
          <p className="mt-1 text-4xl font-extrabold text-slate-900">{rate.toFixed(2)}%</p>
          <p className="mt-1 text-xs text-slate-500">
            (avg. reactions + comments + shares) ÷ followers × 100
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-900">{verdict.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{verdict.detail}</p>
          </div>
        </div>
      )}
    </div>
  );
}
