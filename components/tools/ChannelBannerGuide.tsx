"use client";

import { useState } from "react";

type View = "tv" | "desktop" | "mobile";

const VIEW_INFO: Record<View, { label: string; dims: string; desc: string }> = {
  tv: {
    label: "TV",
    dims: "2560 × 1440",
    desc: "On TVs the full banner image is visible — this is the only screen that shows everything.",
  },
  desktop: {
    label: "Desktop",
    dims: "2560 × 423 visible",
    desc: "On desktop, YouTube crops the banner to a wide band across the middle. Anything above or below gets cut.",
  },
  mobile: {
    label: "Mobile",
    dims: "1546 × 423 safe area",
    desc: "On phones only the center rectangle is guaranteed visible. This is where your text and logo must live.",
  },
};

const CHECKLIST = [
  "All text sits inside the 1546 × 423 center safe area",
  "Text is large and high-contrast enough to read on a phone",
  "No faces, logos, or key details near the edges",
  "Colors and fonts match my thumbnails and channel branding",
  "Banner still looks good when cropped to the desktop band",
  "File is under 6MB and at least 2048 × 1152 pixels",
];

export function ChannelBannerTool() {
  const [view, setView] = useState<View>("mobile");
  const [checked, setChecked] = useState<boolean[]>(CHECKLIST.map(() => false));

  const toggleCheck = (i: number) =>
    setChecked(checked.map((c, idx) => (idx === i ? !c : c)));

  const doneCount = checked.filter(Boolean).length;

  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">Safe-area visualizer</p>
      <p className="mt-1 text-sm text-slate-600">
        You upload one image (2560 × 1440), but every device crops it differently. Toggle the
        views to see what survives.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(VIEW_INFO) as View[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold ${
              view === v
                ? "bg-red-600 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {VIEW_INFO[v].label}
          </button>
        ))}
      </div>

      {/* Scaled banner: full 2560x1440 at 16:9 */}
      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg border-2 border-slate-300 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200">
        {/* Desktop visible band: 423/1440 of height, centered */}
        {(view === "desktop" || view === "mobile") && (
          <div
            className="absolute left-0 w-full border-y-2 border-dashed border-slate-400 bg-white/30"
            style={{ top: "35.3%", height: "29.4%" }}
          />
        )}
        {/* Mobile safe area: 1546/2560 wide, 423/1440 tall, centered */}
        {view === "mobile" && (
          <div
            className="absolute border-2 border-red-600 bg-red-600/10"
            style={{
              left: "19.8%",
              width: "60.4%",
              top: "35.3%",
              height: "29.4%",
            }}
          >
            <span className="absolute left-1 top-1 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
              1546 × 423 SAFE
            </span>
          </div>
        )}
        {view === "desktop" && (
          <span className="absolute left-2 top-[36%] rounded bg-slate-700 px-1.5 py-0.5 text-[10px] font-bold text-white">
            2560 × 423 visible on desktop
          </span>
        )}
        {view === "tv" && (
          <div className="absolute inset-0 border-2 border-green-600 bg-green-600/5">
            <span className="absolute left-2 top-2 rounded bg-green-700 px-1.5 py-0.5 text-[10px] font-bold text-white">
              Full 2560 × 1440 visible on TV
            </span>
          </div>
        )}
        {/* Corner marks to suggest "image" */}
        <span className="absolute bottom-2 right-2 text-[10px] font-semibold text-slate-400">
          Your banner image here
        </span>
      </div>

      <div className="mt-3 rounded-lg bg-slate-50 p-4">
        <p className="text-sm font-bold text-slate-900">
          {VIEW_INFO[view].label}: {VIEW_INFO[view].dims}
        </p>
        <p className="mt-1 text-sm text-slate-600">{VIEW_INFO[view].desc}</p>
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-slate-900">Official specs</p>
        <div className="mt-2 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Recommended size", "2560 × 1440 px"],
                ["Minimum size", "2048 × 1152 px"],
                ["Maximum file size", "6 MB"],
                ["Safe area (all devices)", "1546 × 423 px, centered"],
                ["Desktop visible band", "2560 × 423 px, centered vertically"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-slate-200 last:border-0">
                  <td className="bg-slate-50 px-4 py-2.5 font-semibold text-slate-700">{k}</td>
                  <td className="px-4 py-2.5 text-slate-900">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900">Pre-upload checklist</p>
          <p className="text-sm text-slate-500">
            {doneCount}/{CHECKLIST.length} done
          </p>
        </div>
        <div className="mt-2 space-y-2">
          {CHECKLIST.map((item, i) => (
            <label
              key={item}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm ${
                checked[i] ? "border-green-300 bg-green-50" : "border-slate-200 bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggleCheck(i)}
                className="mt-0.5 h-4 w-4 rounded accent-green-600"
              />
              <span className={checked[i] ? "text-slate-500 line-through" : "text-slate-800"}>
                {item}
              </span>
            </label>
          ))}
        </div>
        {doneCount === CHECKLIST.length && (
          <p className="mt-3 rounded-lg bg-green-100 p-3 text-sm font-semibold text-green-800">
            Your banner is ready to upload. Head to YouTube Studio → Customization → Branding.
          </p>
        )}
      </div>
    </div>
  );
}
