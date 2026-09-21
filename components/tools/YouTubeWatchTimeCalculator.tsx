"use client";

import { useState } from "react";

const YPP_HOURS = 4000;

function parseDuration(input: string): number | null {
  const parts = input.trim().split(":").map((p) => p.trim());
  if (parts.length < 2 || parts.length > 3) return null;
  if (!parts.every((p) => /^\d+$/.test(p))) return null;
  const nums = parts.map(Number);
  if (nums.length === 3) {
    if (nums[1] >= 60 || nums[2] >= 60) return null;
    return nums[0] * 3600 + nums[1] * 60 + nums[2];
  }
  if (nums[1] >= 60) return null;
  const total = nums[0] * 60 + nums[1];
  return total > 0 ? total : null;
}

interface WatchTimeResult {
  totalHours: number;
  percent: number;
  remaining: number;
}

export function YouTubeWatchTimeCalculatorTool() {
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState<WatchTimeResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const v = Number(views.replace(/,/g, ""));
    if (!Number.isFinite(v) || v <= 0 || !Number.isInteger(v)) {
      setError("Enter your total views as a whole number above zero.");
      setResult(null);
      return;
    }
    const avgSeconds = parseDuration(duration);
    if (avgSeconds === null) {
      setError("Enter the average view duration as mm:ss (for example 4:37) or hh:mm:ss.");
      setResult(null);
      return;
    }
    const totalHours = (v * avgSeconds) / 3600;
    const percent = Math.min(100, (totalHours / YPP_HOURS) * 100);
    setError("");
    setResult({ totalHours, percent, remaining: Math.max(0, YPP_HOURS - totalHours) });
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="wt-views" className="block text-sm font-semibold text-slate-900">
            Total views (last 12 months)
          </label>
          <input
            id="wt-views"
            type="text"
            inputMode="numeric"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 120000"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <p className="mt-1 text-xs text-slate-500">Use long-form views — see the Shorts note below.</p>
        </div>
        <div>
          <label htmlFor="wt-duration" className="block text-sm font-semibold text-slate-900">
            Average view duration
          </label>
          <input
            id="wt-duration"
            type="text"
            inputMode="numeric"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 4:37"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <p className="mt-1 text-xs text-slate-500">Find this in YouTube Studio under Analytics → Engagement.</p>
        </div>
      </div>
      <button
        onClick={handleCalculate}
        disabled={!views.trim() || !duration.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Calculate watch time
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {result && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">Estimated watch time</p>
          <p className="mt-2 text-4xl font-extrabold text-slate-900">
            {result.totalHours.toLocaleString("en-US", { maximumFractionDigits: 1 })}{" "}
            <span className="text-lg font-semibold text-slate-500">hours</span>
          </p>
          <div className="mt-5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-700">Progress toward 4,000 hours</span>
              <span className="font-bold text-slate-900">{result.percent.toFixed(1)}%</span>
            </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-red-600 transition-all"
                style={{ width: `${result.percent}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-slate-600">
              {result.remaining > 0 ? (
                <>
                  About <strong>{result.remaining.toLocaleString("en-US", { maximumFractionDigits: 0 })} hours</strong>{" "}
                  to go. At your current pace, focus on videos that keep viewers watching longer.
                </>
              ) : (
                <>You&apos;ve hit the 4,000-hour mark on watch time — the subscriber requirement (1,000 subscribers) is the other half of the equation.</>
              )}
            </p>
          </div>
          <div className="mt-5 space-y-2 text-xs leading-relaxed text-slate-500">
            <p>
              <strong className="text-slate-700">Shorts note:</strong> Shorts views don&apos;t
              count toward the 4,000 watch hours. They count toward a separate threshold — 10
              million valid Shorts views in 90 days — as an alternative path to monetization.
            </p>
            <p>
              Monetization rules change, so verify the current thresholds (watch hours,
              subscribers, and policy requirements) on YouTube&apos;s official monetization
              page before making plans around them.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
