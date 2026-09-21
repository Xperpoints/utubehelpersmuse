import type { ReactNode } from "react";
import Link from "next/link";

export const whatsappFormatterGuide: ReactNode = (
  <>
    <h2>Why formatting matters in a plain-text app</h2>
    <p>
      WhatsApp is deliberately plain — no fonts, no colors, no headings. That simplicity is its
      charm, but it means a wall of unformatted text is genuinely hard to read, and important
      details like prices, dates, and addresses drown in the paragraph. WhatsApp&apos;s answer
      is a small set of text markers: asterisks for bold, underscores for italic, tildes for
      strikethrough, and triple backticks for monospace. Used sparingly, they act like
      highlighter strokes, guiding the reader&apos;s eye to what matters. For anyone using
      WhatsApp for business — taking orders, answering queries, sending quotes — formatting is
      the difference between looking professional and looking chaotic.
    </p>
    <h2>The four formats and when to use each</h2>
    <p>
      Bold (*text*) is your workhorse: prices, deadlines, names, and the one action you want
      the reader to take. If only one thing in your message is bold, it will be read first, so
      choose deliberately. Italic (_text_) is for emphasis and tone — stressing a word the way
      you would in speech, or marking aside comments. Strikethrough (~text~) is surprisingly
      useful in business chats: showing a crossed-out old price next to a new one, or visibly
      correcting information without deleting the record. Monospace (```text```) renders in a
      fixed-width font, handy for codes, addresses, or anything where alignment matters. A good
      rule of thumb: if more than a fifth of your message is formatted, nothing stands out —
      restraint is the whole technique.
    </p>
    <h2>How the formatter above works</h2>
    <p>
      Type or paste your message, select the words you want to emphasize, and hit the format
      button — the markers wrap your selection instantly. With nothing selected, the button
      drops a fresh pair of markers at the end of your text with the cursor parked between
      them, ready for typing. The preview box shows exactly what to paste into WhatsApp, markers
      and all; WhatsApp renders them into styled text the moment you send. Everything happens in
      your browser, so drafts of quotes, invoices, or customer messages never leave your
      device. One caution: markers must wrap text with no space between the marker and the
      first/last character (* correct * will not bold), so if formatting ever fails to render,
      check for stray spaces first.
    </p>
    <h2>Formatting patterns for business chats</h2>
    <p>
      A few patterns cover most business needs. The quote message: greet, then *Total: Rs
      2,500* on its own line, followed by plain-text breakdown and a clear next step. The
      correction: ~Old timing~ *New timing: 4 PM* — transparent and unambiguous. The menu or
      price list: item names in plain text with *prices* bolded so scanning is effortless. The
      announcement: one bold headline line, then short plain paragraphs — never bold whole
      paragraphs, or the emphasis disappears. And the gentle nudge: italicize the softening
      phrase (_just checking in_) so it reads as tone, not pressure. Combine these with a
      frictionless entry point from our{" "}
      <Link href="/tools/whatsapp-click-to-chat-link-generator">
        WhatsApp Click-to-Chat Link Generator
      </Link>{" "}
      and your chat channel starts feeling like a real storefront.
    </p>
    <h2>Common mistakes that break formatting</h2>
    <p>
      Three mistakes account for nearly all formatting failures. First, spaces inside the
      markers, as noted above — WhatsApp requires the markers to hug the text. Second, mixing
      markers across a line break in ways that confuse the parser; keep each formatted span on
      one line where possible. Third, over-formatting: bolding every other word trains readers
      to ignore bold entirely, defeating the purpose. Also note that formatting renders for
      the recipient only when sent as a message — it will not render inside link previews or
      some notification banners, so never put critical information *only* in formatting that a
      glance at a notification might miss. For sharing your chat access offline, pair clean
      messages with a scannable code from our{" "}
      <Link href="/tools/whatsapp-qr-code-generator">WhatsApp QR Code Generator</Link>.
    </p>
  </>
);

export const whatsappFormatterFaqs = [
  {
    q: "How do I make text bold in WhatsApp?",
    a: "Wrap the text in asterisks with no spaces between the markers and the text: *like this*. WhatsApp also supports _italic_, ~strikethrough~, and ```monospace```. The formatter above adds these markers for you — just select text and click.",
  },
  {
    q: "Why isn't my WhatsApp formatting working?",
    a: "The most common cause is a space between the marker and the text — * bold * won't render, but *bold* will. Also check that markers are properly paired and that the formatted span doesn't cross awkward line breaks.",
  },
  {
    q: "Can I combine bold and italic in WhatsApp?",
    a: "Yes — nest the markers, e.g. *_bold italic_* renders as bold italic. Keep nesting simple; deeply nested markers are easy to mistype and hard for readers to parse.",
  },
  {
    q: "Does formatting work in WhatsApp Business too?",
    a: "Yes. The same markers work in personal WhatsApp, WhatsApp Business, and WhatsApp Web. They render when the message is sent — recipients see styled text, not the raw markers.",
  },
  {
    q: "Is my message sent anywhere when I use this formatter?",
    a: "No. All formatting happens locally in your browser. Your message text never leaves your device until you paste it into WhatsApp yourself.",
  },
];
