import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of UtubeHelpers free YouTube tools and content.",
  alternates: { canonical: "https://utubehelpers.com/terms-of-service" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: September 22, 2026</p>

      <div className="prose-custom mt-6 text-slate-700">
        <p>
          By accessing UtubeHelpers.com (&quot;the Site&quot;), you agree to these Terms of Service.
          If you do not agree, please do not use the Site.
        </p>

        <h2>1. Free tools</h2>
        <p>
          All tools on this Site are provided free of charge for your personal and commercial use
          as a content creator. You may use tool outputs (tags, titles, descriptions, ideas) in
          your own content without attribution, though a link back is appreciated.
        </p>

        <h2>2. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site for any unlawful purpose or in violation of any regulations.</li>
          <li>
            Attempt to disrupt, scrape aggressively, or overload the Site&apos;s infrastructure.
          </li>
          <li>
            Misrepresent tool outputs as guarantees — for example, our calculators provide
            estimates, not promises of earnings or growth.
          </li>
          <li>Copy the Site&apos;s design or content wholesale and republish it as your own.</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>
          The Site&apos;s design, text, and guides are owned by UtubeHelpers unless stated
          otherwise. Tool outputs generated from your own inputs belong to you. Thumbnails
          downloaded via our thumbnail tool belong to their respective copyright holders — see the
          Disclaimer.
        </p>

        <h2>4. Third-party services</h2>
        <p>
          Some tools interact with public YouTube URLs or documented public endpoints. This Site is
          not affiliated with YouTube or Google LLC. Your use of YouTube itself is governed by
          YouTube&apos;s own terms.
        </p>

        <h2>5. No warranties</h2>
        <p>
          The Site and its tools are provided &quot;as is&quot; without warranties of any kind. We
          do not guarantee that tools will be error-free, uninterrupted, or suitable for any
          particular purpose. Growth guides reflect personal experience and opinion, not
          professional advice.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, UtubeHelpers is not liable for any indirect,
          incidental, or consequential damages arising from your use of the Site, including
          decisions you make based on calculator estimates or guide recommendations.
        </p>

        <h2>7. Changes</h2>
        <p>
          We may update these terms at any time. Continued use of the Site after changes
          constitutes acceptance of the new terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions about these terms: <strong>contact@utubehelpers.com</strong>.
        </p>
      </div>
    </div>
  );
}
