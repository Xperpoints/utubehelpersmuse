import type { ReactNode } from "react";
import Link from "next/link";

export const youtubePlaylistGuide: ReactNode = (
  <>
    <h2>Playlists are YouTube&apos;s most underused growth lever</h2>
    <p>
      A playlist turns one view into a viewing session. When a video ends, YouTube
      autoplays the next video in the playlist instead of sending the viewer back to the
      home feed — and session time is one of the strongest signals YouTube optimizes for.
      Playlists also rank in search independently: a well-titled playlist can appear in
      Google and YouTube results for broad topic queries, acting as a landing page for
      your whole series. Most creators treat playlists as an afterthought, which means
      doing them deliberately is an easy competitive edge. The generator above gives you
      twelve title options mixing search-friendly and curiosity-driven styles.
    </p>
    <h2>Keyword-first titles win search; curiosity wins browse</h2>
    <p>
      Playlist titles serve two discovery paths. Keyword-first titles (&quot;Sourdough
      Baking: The Complete Beginner&apos;s Series&quot;) match what people type into
      search and tell YouTube exactly what the collection covers. Curiosity titles
      (&quot;Why Sourdough Finally Clicked for Me&quot;) perform better in browse and
      suggested placements where the viewer isn&apos;t actively searching. Neither is
      universally better — match the title to how viewers actually find that content.
      Tutorial series usually deserve keyword-first titles; personality-driven journeys
      can lean into curiosity. When in doubt, keyword-first is the safer default because
      search traffic compounds over time.
    </p>
    <h2>Order your playlists like a course, not a pile</h2>
    <p>
      The title gets viewers in; the ordering keeps them watching. Arrange videos in the
      sequence a beginner should watch them — fundamentals first, advanced topics later —
      even if that isn&apos;t chronological upload order. A playlist that starts with
      video #1 &quot;What is sourdough?&quot; and progresses logically feels like a free
      course, which dramatically increases the chance a viewer watches three or four
      videos instead of one. Revisit ordering whenever you publish a new video in the
      series; a series playlist with a gap in the learning path leaks viewers at exactly
      the wrong moment.
    </p>
    <h2>Write descriptions for playlists too</h2>
    <p>
      Playlist descriptions are indexed and shown in search results, yet most are blank.
      Write two to three sentences describing who the playlist is for and what
      they&apos;ll learn, using the natural search phrasing for the topic. This is also
      where you can link the series together narratively — &quot;Start here if
      you&apos;re new, then work through in order.&quot; Our{" "}
      <Link href="/tools/youtube-description-generator">Description Generator</Link>{" "}
      works for structuring these, and the keyword thinking from our{" "}
      <Link href="/tools/youtube-keyword-generator">Keyword Generator</Link> applies
      directly: the playlist is essentially a long-form piece of content competing for
      the same searches as individual videos.
    </p>
    <h2>Use playlists strategically across the channel</h2>
    <p>
      Beyond series, playlists can organize your channel for different viewer intents: a
      &quot;Start here&quot; playlist for new visitors, a &quot;Most popular&quot;
      playlist as social proof, and topic playlists that each target a keyword cluster.
      Feature your best series playlist on your channel homepage and link playlists in
      video descriptions and end screens (add them during upload with our{" "}
      <Link href="/tools/youtube-upload-checklist">Upload Checklist</Link>). Every
      playlist is also a shareable asset — one link that delivers hours of your content
      instead of a single video. For naming the individual videos inside, our{" "}
      <Link href="/tools/youtube-title-generator">Title Generator</Link> keeps the
      series&apos; titles consistent and clickable.
    </p>
  </>
);

export const youtubePlaylistFaqs = [
  {
    q: "Do YouTube playlists help with SEO?",
    a: "Yes. Playlists can rank independently in YouTube and Google search results, their titles and descriptions are indexed, and they increase session watch time by autoplaying the next video — a signal YouTube values. A keyword-titled playlist targeting a topic cluster is one of the cheapest SEO wins on the platform.",
  },
  {
    q: "What makes a good playlist title?",
    a: "Clarity first: a viewer should instantly know what the collection covers and who it's for. Keyword-first titles ('Watercolor Painting: Complete Beginner's Series') suit tutorial content and search discovery; curiosity-led titles suit browse traffic. Avoid vague names like 'My videos part 1'.",
  },
  {
    q: "How many videos should a playlist have?",
    a: "There's no magic number, but a playlist should feel substantial — aim for at least 5 videos so it reads as a real series rather than a stub. Very long playlists (50+) can feel intimidating; consider splitting those into beginner/intermediate/advanced sequences.",
  },
  {
    q: "Should playlist videos be in a specific order?",
    a: "Yes — order them by viewing logic, not upload date. For educational series, that's beginner to advanced. For vlogs or journeys, chronological usually works. The goal is that a viewer who finishes one video naturally wants the next, which is what drives the session-time benefit.",
  },
  {
    q: "Can I add other creators' videos to my playlists?",
    a: "Yes, and it can be strategic — a curated playlist mixing your videos with complementary content from others can rank for topic searches and serve your audience. Just make sure your own videos are well represented, and never reupload someone else's content as your own.",
  },
];
