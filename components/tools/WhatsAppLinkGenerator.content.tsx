import type { ReactNode } from "react";
import Link from "next/link";

export const whatsappLinkGuide: ReactNode = (
  <>
    <h2>What a click-to-chat link does</h2>
    <p>
      Normally, messaging someone on WhatsApp requires saving their number as a contact first —
      a small friction that quietly kills conversions. A click-to-chat link removes it: anyone
      who taps your wa.me link lands directly in a chat with you, no contact-saving step, on
      phone or desktop. For businesses this is transformative — the link can live in your
      Instagram bio, your Facebook page button, your email signature, product packaging, or a
      website contact section. Every place a phone number used to sit as dead text becomes a
      one-tap conversation starter. And because the chat opens with your pre-filled message
      already typed, even shy customers know exactly what to say first.
    </p>
    <h2>Getting the number format right</h2>
    <p>
      The single most common reason a wa.me link fails is number formatting. WhatsApp expects
      the full international format with no plus sign, no spaces, no dashes, and no leading
      zeros after the country code — for example, a Pakistani mobile becomes 923001234567, not
      +92 300 1234567 and not 03001234567. The generator above strips spaces, dashes,
      parentheses, and a leading + automatically, and it validates that 7–15 digits remain,
      which is WhatsApp&apos;s accepted range. Always test the generated link yourself (the
      &quot;Test it in WhatsApp&quot; button opens it directly) before printing it on anything
      permanent. A broken link on a thousand flyers is an expensive lesson.
    </p>
    <h2>Writing a pre-filled message that converts</h2>
    <p>
      The pre-filled message is your silent salesperson: it appears in the visitor&apos;s chat
      box, ready to send, lowering the effort of starting a conversation to a single tap. The
      best ones are specific and low-pressure. &quot;Hi! I&apos;d like to place an order&quot;
      beats a blank chat because it tells the customer what happens next. Match the message to
      the context where the link appears: a link on a product page might pre-fill &quot;Hi, I
      have a question about [product],&quot; while a link in an ad might say &quot;Hi! I saw
      your ad and I&apos;d like to know more.&quot; Keep it short — long pre-filled paragraphs
      feel robotic and get deleted. And remember the message is a suggestion, not a lock; the
      visitor can edit or replace it before sending.
    </p>
    <h2>Where to place your chat link</h2>
    <p>
      Treat the link as infrastructure and put it everywhere a conversation could start. On
      social profiles, it belongs in the bio or as the action button. On a website, a floating
      chat button or a &quot;Chat on WhatsApp&quot; option next to the contact form typically
      outperforms the form itself for quick questions. In packaging and receipts, a link (or
      better, a QR code — see our{" "}
      <Link href="/tools/whatsapp-qr-code-generator">WhatsApp QR Code Generator</Link>)
      turns one-time buyers into repeat conversations for support and reorders. In ads, a
      click-to-chat call-to-action often converts better than sending traffic to a landing
      page, because the commitment of starting a chat is smaller than filling a form. If you
      run several campaigns, consider generating slightly different pre-filled messages per
      placement so you can tell which source each conversation came from.
    </p>
    <h2>Formatting the conversation once it starts</h2>
    <p>
      Getting the chat started is only half the job — how you write inside WhatsApp affects
      whether people read and respond. Short paragraphs, bold key details like prices and
      timings, and clear next steps make business chats feel professional instead of chaotic.
      Our <Link href="/tools/whatsapp-text-formatter">WhatsApp Text Formatter</Link> lets you
      compose with bold, italic, and strikethrough formatting and copy the result straight
      into your chats. Between a frictionless entry link and well-formatted replies, you turn
      WhatsApp from a messaging app into a genuine sales and support channel.
    </p>
  </>
);

export const whatsappLinkFaqs = [
  {
    q: "How does a WhatsApp click-to-chat link work?",
    a: "It uses WhatsApp's official wa.me format: https://wa.me/<full international number>. Tapping it opens a chat with that number directly, without the visitor needing to save the contact first. Adding ?text=<message> pre-fills the chat box with your chosen text.",
  },
  {
    q: "What number format does wa.me require?",
    a: "The full international number with no plus sign, spaces, dashes, or leading zeros — e.g. 923001234567 for a Pakistani mobile. The country code is required. The generator above cleans and validates the format for you.",
  },
  {
    q: "Can I tell which link placement a chat came from?",
    a: "Yes — generate separate links with slightly different pre-filled messages for each placement (website, Instagram bio, flyers). When a conversation starts with a particular message, you know its source.",
  },
  {
    q: "Do I need WhatsApp Business for click-to-chat links?",
    a: "No. Click-to-chat links work with any WhatsApp number, personal or Business. WhatsApp Business adds useful extras like greeting messages and catalogs, but the link itself needs nothing special.",
  },
  {
    q: "Is it safe to publish my WhatsApp number as a link?",
    a: "Anyone with the link can message you, so use a dedicated business number rather than your personal one if possible. Set expectations with a greeting message and business hours, and block/report spam as needed — the same hygiene as publishing any contact detail.",
  },
];
