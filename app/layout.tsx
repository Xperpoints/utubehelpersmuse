import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://utubehelpers.com";
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UtubeHelpers — Free Creator Tools for YouTube, Instagram, TikTok & More",
    template: "%s | UtubeHelpers",
  },
  description:
    "Free creator tools for YouTube, Instagram, TikTok, Facebook, and WhatsApp: tag and caption generators, thumbnail downloader, engagement calculators, and practical growth guides. No signup, no cost.",
  keywords: [
    "creator tools",
    "free creator tools",
    "youtube tools",
    "instagram tools",
    "tiktok tools",
    "youtube tag generator",
    "youtube thumbnail downloader",
    "instagram caption generator",
    "social media tools",
  ],
  authors: [{ name: "Hussnain", url: SITE_URL }],
  creator: "UtubeHelpers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "UtubeHelpers",
    title: "UtubeHelpers — Free Creator Tools for YouTube, Instagram, TikTok & More",
    description:
      "Free creator tools for YouTube, Instagram, TikTok, Facebook, and WhatsApp: tag and caption generators, thumbnail downloader, engagement calculators, and practical growth guides. No signup, no cost.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UtubeHelpers — Free Creator Tools for YouTube, Instagram, TikTok & More",
    description:
      "Free creator tools and practical growth guides for YouTube, Instagram, TikTok, Facebook, and WhatsApp. No signup, no cost.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UtubeHelpers",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  founder: {
    "@type": "Person",
    name: "Hussnain",
    url: `${SITE_URL}/about`,
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UtubeHelpers",
  url: SITE_URL,
  description: "Free YouTube tools and practical growth guides for creators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {ADSENSE_ID ? (
          <meta name="google-adsense-account" content={ADSENSE_ID} />
        ) : null}
      </head>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
