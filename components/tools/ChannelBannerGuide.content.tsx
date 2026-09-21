import type { ReactNode } from "react";

export const channelBannerGuide: ReactNode = (
  <>
    <h2>Why your banner looks wrong on some devices</h2>
    <p>
      YouTube asks for one banner image but displays it on TVs, desktops, tablets, and phones —
      each cropping it differently. Design for the full 2560 × 1440 canvas and your text gets
      sliced off on mobile. Design only for mobile and the TV version looks empty. The solution
      is the <strong>safe area</strong>: a 1546 × 423 rectangle in the exact center that every
      device shows. Put everything important inside it; treat the rest as decoration.
    </p>
    <h2>The safe-area rule, simply</h2>
    <p>
      Imagine your banner as a wide poster with a smaller &quot;guaranteed visible&quot; frame
      in the middle. Channel name, tagline, upload schedule, logo, and any call-to-action go
      inside the frame. Backgrounds, patterns, gradients, and decorative imagery can fill the
      whole canvas. If you remember one thing: <strong>no text outside the center frame,
      ever.</strong>
    </p>
    <h2>Text placement that survives cropping</h2>
    <p>
      Keep text large — what looks fine at full size becomes tiny on a phone. Use high contrast
      (light text on dark backgrounds or vice versa), limit yourself to one or two lines, and
      leave breathing room around the edges of the safe area. A banner that says your channel
      name and one line about what you post beats a paragraph nobody can read.
    </p>
    <h2>Match your thumbnails</h2>
    <p>
      Your banner, thumbnails, and profile picture are one brand system. Use the same 2–3
      colors and the same font family across all of them so a viewer recognizes your content
      instantly in a crowded subscription feed. Consistency builds familiarity, and familiarity
      builds clicks.
    </p>
    <h2>How to upload it</h2>
    <p>
      In YouTube Studio, go to <strong>Customization → Branding → Banner image → Change</strong>,
      upload your file, and use the built-in crop preview to double-check each device view
      before publishing. YouTube shows you exactly what desktop, mobile, and TV will display —
      verify all three every time.
    </p>
  </>
);

export const channelBannerFaqs = [
  {
    q: "What are the exact YouTube banner dimensions?",
    a: "Upload at 2560 × 1440 pixels (minimum 2048 × 1152). The safe area — the part visible on all devices — is 1546 × 423 pixels in the exact center. Maximum file size is 6MB.",
  },
  {
    q: "Why does my banner look cropped on phones but fine on desktop?",
    a: "Because each device shows a different crop of the same image. Phones only display the 1546 × 423 center safe area, while desktop shows a wider 2560 × 423 band. Anything important placed outside the center safe area gets cut on mobile.",
  },
  {
    q: "What's the maximum file size for a YouTube banner?",
    a: "6MB. If your design tool exports a larger file, export as JPG at slightly lower quality or compress the image — you won't notice the difference on screen, and it'll upload without errors.",
  },
  {
    q: "Can I design my banner in Canva?",
    a: "Yes. Canva has a YouTube banner template at the right dimensions, and it can show safe-area guides. Just verify the final result with the visualizer above and YouTube Studio's own crop preview before publishing.",
  },
  {
    q: "How often should I update my channel banner?",
    a: "Only when something meaningful changes: a rebrand, a new content direction, or a new upload schedule worth advertising. A good banner is timeless — updating it constantly just confuses returning viewers.",
  },
];
