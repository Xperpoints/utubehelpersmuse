import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How UtubeHelpers uses cookies: what we store, why, and how you can control or delete them.",
  alternates: { canonical: "https://utubehelpers.com/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Cookie Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: September 22, 2026</p>

      <div className="prose-custom mt-6 text-slate-700">
        <p>
          This Cookie Policy explains how UtubeHelpers uses cookies and similar technologies. By
          using our site, you consent to the cookies described here unless you have disabled them
          (see &quot;Managing cookies&quot; below).
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device by your browser. They help websites
          remember your preferences and understand how visitors use the site.
        </p>

        <h2>Cookies we use</h2>
        <ul>
          <li>
            <strong>Consent choice</strong> — remembers whether you accepted or declined (so we don&apos;t ask you on every visit). Stored in your browser&apos;s local storage.
          </li>
          <li>
            <strong>Functional preferences</strong> — some tools may remember your last-used
            settings (for example, your niche in a generator) in your browser&apos;s local
            storage to save you retyping them.
          </li>
          <li>
            <strong>Analytics cookies</strong> — if enabled, these help us understand aggregate
            usage (which pages are popular). No personally identifying information is collected.
          </li>
          <li>
            <strong>Advertising cookies</strong> — we do not currently show ads. If we enable
            advertising in the future (for example, Google AdSense), advertising partners may set
            cookies to serve relevant ads and measure performance. We will update this policy
            before that happens.
          </li>
        </ul>

        <h2>Managing cookies</h2>
        <p>You can control cookies in several ways:</p>
        <ul>
          <li>Use the Accept / Decline banner when you first visit (your choice is remembered).</li>
          <li>
            Change your choice at any time by clearing your browser&apos;s local storage for this
            site — the banner will appear again.
          </li>
          <li>
            Block or delete cookies in your browser settings. Note that blocking essential cookies
            may affect how the site works.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions about cookies: <strong>contact@utubehelpers.com</strong>.
        </p>
      </div>
    </div>
  );
}
