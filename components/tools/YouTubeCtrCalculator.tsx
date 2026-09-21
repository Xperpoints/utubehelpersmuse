"use client";

import { useState } from "react";

interface CtrResult {
  ctr: number;
  perThousand: number;
  band: string;
  bandDetail: string;
  bandTone: "low" | "typical" | "strong";
}

function verdict(ctr: number): { band: string; bandDetail: string; bandTone: "low" | "typical" | "strong" } {
  if (ctr < 2) {
    return {
      band: "On the low side",
      bandDetail:
        "Below roughly 2% is often a packaging problem rather than a content problem — viewers aren't clicking, so they never see the video. Test a clearer title, a more contrasting thumbnail, or a tighter topic match between the two.",
      bandTone: "low",
    };
  }
  if (ctr <= 10) {
    return {
      band: "Within the typical range",
      bandDetail:
        "Roughly 2–10% is where a large share of videos land, though it varies a lot by niche, format, and traffic source. Small, steady improvements here compound — even half a point of CTR can meaningfully change a video's trajectory.",
      bandTone: "typical",
    };
  }
  return {
    band: "Strong",
    bandDetail:
      "Above roughly 10% suggests your packaging is resonating well with the audience being shown the video. Study what's working — the title structure, thumbnail style, and topic — and reuse the pattern deliberately.",
    bandTone: "strong",
  };
}

export function YouTubeCtrCalculatorTool() {
  const [impressions, setImpressions] = useState("");
  const [clicks, setClicks] = useState("");
  const [result, setResult] = useState<CtrResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const imp = Number(impressions.replace(/,/g, ""));
    const clk = Number(clicks.replace(/,/g, ""));
    if (!Number.isFinite(imp) || !Number.isFinite(clk) || imp <= 0 || clk < 0) {
      setError("Enter valid numbers — impressions above zero and clicks of zero or more.");
      setResult(null);
      return;
    }
    if (!Number.isInteger(imp) || !Number.isInteger(clk)) {
      setError("Impressions and clicks should be whole numbers (no decimals).");
      setResult(null);
      return;
    }
    if (clk > imp) {
      setError("Clicks can't be higher than impressions — double-check the two numbers.");
      setResult(null);
      return;
    }
    const ctr = (clk / imp) * 100;
    const v = verdict(ctr);
    setError("");
    setResult({ ctr, perThousand: (clk / imp) * 1000, ...v });
  };

  const toneStyles: Record<CtrResult["bandTone"], string> = {
    low: "border-amber-200 bg-amber-50 text-amber-800",
    typical: "border-sky-200 bg-sky-50 text-sky-800",
    strong: "border-emerald-200 bg-emerald-50 text-emerald-800",
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ctr-impressions" className="block text-sm font-semibold text-slate-900">
            Impressions
          </label>
          <input
            id="ctr-impressions"
            type="text"
            inputMode="numeric"
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 50000"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <p className="mt-1 text-xs text-slate-500">Find this in YouTube Studio under Analytics → Reach.</p>
        </div>
        <div>
          <label htmlFor="ctr-clicks" className="block text-sm font-semibold text-slate-900">
            Clicks
          </label>
          <input
            id="ctr-clicks"
            type="text"
            inputMode="numeric"
            value={clicks}
            onChange={(e) => setClicks(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
            placeholder="e.g. 2400"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <p className="mt-1 text-xs text-slate-500">Views that came from those impressions.</p>
        </div>
      </div>
      <button
        onClick={handleCalculate}
        disabled={!impressions.trim() || !clicks.trim()}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Calculate CTR
      </button>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      {result && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">Your click-through rate</p>
          <p className="mt-2 text-4xl font-extrabold text-slate-900">
            {result.ctr.toFixed(2)}%
          </p>
          <p className="mt-2 text-sm text-slate-600">
            That&apos;s about <strong>{result.perThousand.toFixed(1)}</strong> clicks for every
            1,000 impressions.
          </p>
          <div className={`mt-4 rounded-lg border px-4 py-3 text-sm leading-relaxed ${toneStyles[result.bandTone]}`}>
            <strong>{result.band}.</strong> {result.bandDetail}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            These bands are rough ranges, not official benchmarks — what counts as good varies
            widely by niche, video format, and where the impressions come from (browse, search,
            and suggested behave differently).
          </p>
        </div>
      )}
    </div>
  );
}
