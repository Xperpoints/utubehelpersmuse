"use client";

import { useState } from "react";

function parseNum(v: string): number | null {
  if (!v.trim()) return null;
  const n = Number(v.replace(/,/g, ""));
  return Number.isFinite(n) && n >= 0 ? n : null;
}

function verdict(rate: number): { label: string; detail: string; tone: string } {
  if (rate < 1)
    return {
      label: "Below the typical range",
      detail:
        "Most accounts see roughly 1–3% by this formula, so there's likely room to improve content, posting consistency, or audience targeting.",
      tone: "text-amber-700",
    };
  if (rate <= 3)
    return {
      label: "Within the typical range",
      detail:
        "This sits where a large share of active accounts land. Steady, and a good base to build on.",
      tone: "text-sky-700",
    };
  if (rate <= 6)
    return {
      label: "Strong",
      detail:
        "This is above what most accounts achieve — your audience is genuinely responding to what you post.",
      tone: "text-emerald-700",
    };
  return {
    label: "Exceptionally high — double-check the inputs",
    detail:
      "Rates this high are rare and usually mean an input was mistyped (for example, using total likes across many posts instead of the per-post average). If the numbers are right, you're doing something remarkable.",
    tone: "text-emerald-700",
  };
}

export function InstagramEngagementCalculatorTool() {
  const [followers, setFollowers] = useState("");
  const [likes, setLikes] = useState("");
  const [comments, setComments] = useState("");
  const [saves, setSaves] = useState("");
  const [result, setResult] = useState<{ rate: number; total: number } | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const f = parseNum(followers);
    const l = parseNum(likes);
    const c = parseNum(comments);
    const s = parseNum(saves);
    if (f === null || f === 0) {
      setError("Enter your follower count — it must be a number greater than zero.");
      setResult(null);
      return;
    }
    if (l === null || c === null || s === null) {
      setError("Likes, comments, and saves must be numbers (zero is fine).");
      setResult(null);
      return;
    }
    setError("");
    const total = l + c + s;
    setResult({ rate: (total / f) * 100, total });
  };

  const inputCls =
    "mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ier-followers" className="block text-sm font-semibold text-slate-900">
            Followers
          </label>
          <input
            id="ier-followers"
            type="text"
            inputMode="decimal"
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
            placeholder="e.g. 12500"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="ier-likes" className="block text-sm font-semibold text-slate-900">
            Average likes per post
          </label>
          <input
            id="ier-likes"
            type="text"
            inputMode="decimal"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            placeholder="e.g. 320"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="ier-comments" className="block text-sm font-semibold text-slate-900">
            Average comments per post
          </label>
          <input
            id="ier-comments"
            type="text"
            inputMode="decimal"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="e.g. 18"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="ier-saves" className="block text-sm font-semibold text-slate-900">
            Average saves per post
          </label>
          <input
            id="ier-saves"
            type="text"
            inputMode="decimal"
            value={saves}
            onChange={(e) => setSaves(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 45"
            className={inputCls}
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

      {result && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">Your engagement rate</p>
          <p className="mt-2 text-4xl font-extrabold text-slate-900">{result.rate.toFixed(2)}%</p>
          <p className="mt-1 text-sm text-slate-600">
            Based on {result.total.toLocaleString()} average interactions per post
          </p>
          {(() => {
            const v = verdict(result.rate);
            return (
              <div className="mt-4">
                <p className={`text-base font-bold ${v.tone}`}>{v.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{v.detail}</p>
              </div>
            );
          })()}
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
            <strong>Keep in mind:</strong> this is a rough guide, not a grade. Typical rates vary
            a lot by niche, account size, and content type — smaller, focused accounts often
            outperform large ones. Use your own trend over time as the real benchmark: is the
            number going up?
          </div>
        </div>
      )}
    </div>
  );
}
