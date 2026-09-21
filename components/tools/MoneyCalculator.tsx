"use client";

import { useState } from "react";

const NICHE_PRESETS = [
  { label: "Gaming", rpm: 2.0 },
  { label: "Entertainment", rpm: 2.5 },
  { label: "Vlogging", rpm: 3.5 },
  { label: "Education", rpm: 6.0 },
  { label: "Tech", rpm: 8.0 },
  { label: "Finance", rpm: 12.0 },
] as const;

function fmtUSD(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function fmtNum(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

export function MoneyCalculatorTool() {
  const [mode, setMode] = useState<"earnings" | "goal">("earnings");
  const [views, setViews] = useState("100000");
  const [rpm, setRpm] = useState(4);
  const [goal, setGoal] = useState("1000");

  const viewsNum = Math.max(0, parseInt(views.replace(/[^0-9]/g, ""), 10) || 0);
  const goalNum = Math.max(0, parseFloat(goal.replace(/[^0-9.]/g, "")) || 0);

  const monthlyRevenue = (viewsNum / 1000) * rpm;
  const yearlyRevenue = monthlyRevenue * 12;
  const viewsNeededMonthly = rpm > 0 ? (goalNum / rpm) * 1000 : 0;
  const viewsNeededDaily = viewsNeededMonthly / 30;

  const tabCls = (active: boolean) =>
    `flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
      active ? "bg-red-600 text-white" : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <div>
      <div className="flex gap-2 rounded-xl bg-slate-100 p-1.5">
        <button onClick={() => setMode("earnings")} className={tabCls(mode === "earnings")}>
          Views → Earnings
        </button>
        <button onClick={() => setMode("goal")} className={tabCls(mode === "goal")}>
          Income goal → Views needed
        </button>
      </div>

      {mode === "earnings" ? (
        <div className="mt-6">
          <label htmlFor="mc-views" className="block text-sm font-semibold text-slate-900">
            Monthly views
          </label>
          <input
            id="mc-views"
            type="text"
            inputMode="numeric"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="e.g. 100000"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <label htmlFor="mc-rpm" className="block text-sm font-semibold text-slate-900">
                RPM (revenue per 1,000 views)
              </label>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-sm font-bold text-slate-900">
                ${rpm.toFixed(1)}
              </span>
            </div>
            <input
              id="mc-rpm"
              type="range"
              min={0.5}
              max={30}
              step={0.5}
              value={rpm}
              onChange={(e) => setRpm(parseFloat(e.target.value))}
              className="mt-2 w-full accent-red-600"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {NICHE_PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setRpm(p.rpm)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    rpm === p.rpm
                      ? "border-red-600 bg-red-50 text-red-700"
                      : "border-slate-300 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {p.label} · ${p.rpm}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Estimated monthly revenue
            </p>
            <p className="mt-1 text-4xl font-extrabold text-slate-900">{fmtUSD(monthlyRevenue)}</p>
            <p className="mt-2 text-sm text-slate-600">
              ≈ {fmtUSD(yearlyRevenue)} per year at this pace
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {fmtNum(viewsNum)} views ÷ 1,000 × ${rpm.toFixed(2)} RPM
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <label htmlFor="mc-goal" className="block text-sm font-semibold text-slate-900">
            Monthly income goal (USD)
          </label>
          <input
            id="mc-goal"
            type="text"
            inputMode="decimal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g. 1000"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <label htmlFor="mc-rpm2" className="block text-sm font-semibold text-slate-900">
                Your RPM (USD)
              </label>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-sm font-bold text-slate-900">
                ${rpm.toFixed(1)}
              </span>
            </div>
            <input
              id="mc-rpm2"
              type="range"
              min={0.5}
              max={30}
              step={0.5}
              value={rpm}
              onChange={(e) => setRpm(parseFloat(e.target.value))}
              className="mt-2 w-full accent-red-600"
            />
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Views needed per month
            </p>
            <p className="mt-1 text-4xl font-extrabold text-slate-900">{fmtNum(viewsNeededMonthly)}</p>
            <p className="mt-2 text-sm text-slate-600">
              ≈ {fmtNum(viewsNeededDaily)} views per day
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {fmtUSD(goalNum)} ÷ ${rpm.toFixed(2)} RPM × 1,000
            </p>
          </div>
        </div>
      )}

      <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
        <strong>Estimate only.</strong> Real earnings vary with audience geography, season,
        ad-block usage, and YouTube&apos;s revenue share. Use this for planning, not promises.
      </p>
    </div>
  );
}
