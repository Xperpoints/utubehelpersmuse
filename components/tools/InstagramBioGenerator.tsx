"use client";

import { useState } from "react";

const BIO_LIMIT = 150;

function buildBios(name: string, whatYouDo: string, whoFor: string): string[] {
  const n = name.trim();
  const what = whatYouDo.trim();
  const who = whoFor.trim();

  const v1 = [n, what, `Helping ${who}`, "New here? Start with my pinned posts"].join("\n");

  const v2 = [`${what} | ${n}`, `For ${who} who want results`, "DM me to work together"].join("\n");

  const v3 = [n, `${what} for ${who}`, "Sharing the journey daily"].join("\n");

  return [v1, v2, v3];
}

export function InstagramBioGeneratorTool() {
  const [name, setName] = useState("");
  const [whatYouDo, setWhatYouDo] = useState("");
  const [whoFor, setWhoFor] = useState("");
  const [bios, setBios] = useState<string[] | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const valid = name.trim() && whatYouDo.trim() && whoFor.trim();

  const handleGenerate = () => {
    if (!valid) return;
    setBios(buildBios(name, whatYouDo, whoFor));
    setCopiedIdx(null);
  };

  const copyBio = async (idx: number, bio: string) => {
    try {
      await navigator.clipboard.writeText(bio);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const inputCls =
    "mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="ibg-name" className="block text-sm font-semibold text-slate-900">
            Name or brand
          </label>
          <input
            id="ibg-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sara Ahmed"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="ibg-what" className="block text-sm font-semibold text-slate-900">
            What you do
          </label>
          <input
            id="ibg-what"
            type="text"
            value={whatYouDo}
            onChange={(e) => setWhatYouDo(e.target.value)}
            placeholder="e.g. Home workout coach"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="ibg-who" className="block text-sm font-semibold text-slate-900">
            Who it&apos;s for
          </label>
          <input
            id="ibg-who"
            type="text"
            value={whoFor}
            onChange={(e) => setWhoFor(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && valid && handleGenerate()}
            placeholder="e.g. busy beginners"
            className={inputCls}
          />
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!valid}
        className="mt-4 w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
      >
        Generate bios
      </button>

      {bios && (
        <div className="mt-6 space-y-4">
          {bios.map((bio, i) => {
            const over = bio.length > BIO_LIMIT;
            return (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Option {i + 1}{" "}
                    <span className={`font-normal ${over ? "text-red-600" : "text-slate-500"}`}>
                      ({bio.length}/{BIO_LIMIT} characters{over ? " — over the limit" : ""})
                    </span>
                  </p>
                  <button
                    onClick={() => copyBio(i, bio)}
                    className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {copiedIdx === i ? "Copied!" : "Copy bio"}
                  </button>
                </div>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                  {bio}
                </p>
                {over && (
                  <p className="mt-2 text-xs text-red-600">
                    This one is over Instagram&apos;s {BIO_LIMIT}-character bio limit — shorten a
                    line before using it.
                  </p>
                )}
              </div>
            );
          })}
          <div className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
            <strong>Tip:</strong> your bio is searchable, so keep the keywords that describe what
            you do. Pair it with a clear profile photo and one link — that combination converts
            profile visits into follows far better than a clever one-liner alone.
          </div>
        </div>
      )}
    </div>
  );
}
