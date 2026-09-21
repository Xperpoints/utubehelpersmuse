import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How UtubeHelpers collects, uses, and protects your data. We collect minimal data, never sell it, and most tools run entirely in your browser.",
  alternates: { canonical: "https://utubehelpers.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: September 22, 2026</p>

      <div className="prose-custom mt-6 text-slate-700">
        <p>
          UtubeHelpers (&quot;we&quot;, &quot;our&quot;) respects your privacy. This policy explains
          what information we collect, how we use it, and the choices you have. If you have
          questions, contact us at <strong>contact@utubehelpers.com</strong>.
        </p>

        <h2>1. Information we collect</h2>
        <p>We deliberately collect as little as possible:</p>
        <ul>
          <li>
            <strong>Information you provide:</strong> if you email us, we receive your email address
            and the contents of your message so we can reply.
          </li>
          <li>
            <strong>Technical information:</strong> like most websites, our hosting provider may
            log basic technical data (IP address, browser type, pages visited) for security and
            diagnostics.
          </li>
          <li>
            <strong>Cookies:</strong> we use a small number of cookies as described in our{" "}
            <a href="/cookie-policy">Cookie Policy</a>.
          </li>
        </ul>
        <p>
          <strong>Important:</strong> most of our tools run entirely in your browser. Text you enter
          into tools (video ideas, titles, comments for the picker) is processed locally on your
          device and is never sent to our servers.
        </p>

        <h2>2. How we use information</h2>
        <ul>
          <li>To operate and secure the website.</li>
          <li>To respond to messages you send us.</li>
          <li>To understand aggregate usage so we can improve the site (see Analytics below).</li>
        </ul>
        <p>We do not sell your personal information. We do not share it with third parties for marketing.</p>

        <h2>3. Analytics</h2>
        <p>
          We may use privacy-friendly analytics to understand which pages and tools are popular.
          This data is aggregated and cannot be used to identify you personally.
        </p>

        <h2>4. Advertising</h2>
        <p>
          We may display ads in the future to cover hosting costs. If we do, our advertising
          partners (such as Google AdSense) may use cookies to serve ads based on your prior visits
          to this and other websites. Google&apos;s use of advertising cookies enables it and its
          partners to serve ads based on your visit to our site. You may opt out of personalized
          advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google&apos;s Ads Settings
          </a>
          . See our <a href="/cookie-policy">Cookie Policy</a> for how to manage cookies.
        </p>

        <h2>5. Data retention</h2>
        <p>
          Emails you send us are kept only as long as needed to handle your request. Server logs
          are retained for a limited period for security purposes and then deleted or anonymized.
        </p>

        <h2>6. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, or delete
          personal data we hold about you, and to object to certain processing. Email{" "}
          <strong>contact@utubehelpers.com</strong> with &quot;Privacy request&quot; in the subject
          line and we will do our best to respond promptly.
        </p>

        <h2>7. Children&apos;s privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not knowingly collect personal
          information from children. If you believe a child has provided us personal information,
          contact us and we will delete it.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date at the top
          will reflect the most recent changes. Continued use of the site after changes means you
          accept the updated policy.
        </p>
      </div>
    </div>
  );
}
