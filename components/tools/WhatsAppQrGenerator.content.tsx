import type { ReactNode } from "react";
import Link from "next/link";

export const whatsappQrGuide: ReactNode = (
  <>
    <h2>Why QR codes beat typed links for WhatsApp</h2>
    <p>
      A wa.me link is perfect for the digital world — bios, websites, emails. But half of
      real-world customer contact happens offline: a shop counter, a flyer, a product box, a
      business card, a restaurant table. Nobody is going to carefully type
      &quot;https://wa.me/923001234567&quot; from a poster, but almost everyone will point
      their phone camera at a QR code. Scanning takes two seconds and drops them straight into
      a chat with you. For local businesses especially, a QR code at the point of sale turns
      one-time foot traffic into an ongoing WhatsApp relationship — reorders, support, and
      repeat business — with zero typing and zero friction.
    </p>
    <h2>What to encode: the chat link, not just the number</h2>
    <p>
      You can encode any text in a QR code, but the highest-converting choice is your full
      click-to-chat link including a pre-filled message — e.g.
      https://wa.me/923001234567?text=Hi! I&apos;d like to place an order. That way the scan
      does not just open a chat; it opens a chat with the conversation already started. If you
      do not have a chat link yet, generate one first with our{" "}
      <Link href="/tools/whatsapp-click-to-chat-link-generator">
        WhatsApp Click-to-Chat Link Generator
      </Link>{" "}
      and paste it into the box above. Keep the encoded text reasonably short: very long
      strings create denser codes that are slower to scan, especially in poor lighting or at
      small print sizes. Shorter is snappier.
    </p>
    <h2>Printing and placement that actually gets scanned</h2>
    <p>
      A QR code only works if people notice it and can scan it comfortably. Print it at least
      2 × 2 cm — bigger for anything viewed at distance, like posters or vehicle decals. Always
      add a short call to action next to it: &quot;Scan to chat with us on WhatsApp&quot;
      outperforms a lonely code because it tells people what they get. Place codes at decision
      points: beside the cash register, on the menu, on packaging, on delivery bags, on
      appointment cards. Avoid glossy reflections and curved surfaces that distort the code,
      and always test-scan the final printed version with two different phones before a big
      print run. The download button above gives you a crisp 512px PNG that stays sharp at
      typical print sizes.
    </p>
    <h2>Tracking which codes bring customers</h2>
    <p>
      One underused trick: generate a slightly different pre-filled message for each physical
      placement — the counter code says &quot;Hi! I&apos;m at your store…&quot;, the flyer code
      says &quot;Hi! I saw your flyer…&quot;. When chats arrive, the opening message tells you
      exactly which placement earned them, turning a dumb poster into measurable marketing.
      This costs nothing extra and answers the question every offline advertiser asks: did that
      print run actually work? Rotate or retire placements that never produce a scan, and
      double down on the ones that do.
    </p>
    <h2>Keep the conversation quality high after the scan</h2>
    <p>
      The scan is the beginning, not the end. Respond promptly — a QR code promises instant
      contact, and a reply three days later breaks that promise. Use clear formatting so your
      replies are easy to scan: bold prices and timings, short paragraphs, one clear next
      step. Our <Link href="/tools/whatsapp-text-formatter">WhatsApp Text Formatter</Link>{" "}
      helps you compose those replies with proper bold and italic styling before pasting them
      in. Between a well-placed code, a smart pre-filled message, and crisp replies, WhatsApp
      becomes less a messaging app and more your hardest-working sales channel.
    </p>
  </>
);

export const whatsappQrFaqs = [
  {
    q: "What should I put in a WhatsApp QR code?",
    a: "Your full click-to-chat link (https://wa.me/<number>?text=<message>) is the best choice — scanning opens a chat with your pre-filled message ready. You can encode any URL or text, but a bare phone number without the wa.me format won't open a chat directly.",
  },
  {
    q: "How big should I print a QR code?",
    a: "At least 2 × 2 cm for hand-held scanning, larger for posters or anything viewed at distance. The PNG downloaded from this tool is 512px, which prints sharply at typical sizes. Always test-scan the final print with a real phone.",
  },
  {
    q: "Do QR codes expire?",
    a: "A QR code encoding your wa.me link lasts as long as the number stays active on WhatsApp — there is no built-in expiry. If you change numbers, you'll need to reprint with the new link.",
  },
  {
    q: "Can I track which QR code placement works best?",
    a: "Yes — use a slightly different pre-filled message in the link encoded at each location (store counter, flyer, packaging). The opening message of each incoming chat reveals its source, giving you free attribution for offline marketing.",
  },
  {
    q: "Is the QR code generated on my device or a server?",
    a: "On your device, entirely in the browser using the qrcode library. Your link or text is never uploaded anywhere, so it's safe for business numbers and private links.",
  },
];
