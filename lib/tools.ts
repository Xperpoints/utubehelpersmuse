// Central registry of all 40 tools: used for listings, sitemap, navigation and SEO.

export interface ToolMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "SEO & Discovery" | "Channel Branding" | "Content Planning" | "Utilities" | "Analytics" | "Instagram" | "TikTok" | "Facebook" | "WhatsApp";
  keywords: string[];
}

export const tools: ToolMeta[] = [
  {
    slug: "youtube-tag-generator",
    name: "YouTube Tag Generator",
    tagline: "Generate SEO-friendly tags for any video topic",
    description:
      "Enter your video topic and get a ready-to-paste set of relevant YouTube tags — broad, specific, and long-tail tags that help YouTube understand your video.",
    category: "SEO & Discovery",
    keywords: ["youtube tag generator", "video tags", "youtube seo tags", "tag generator for youtube"],
  },
  {
    slug: "youtube-tag-extractor",
    name: "YouTube Tag Extractor",
    tagline: "See the tags any YouTube video is using",
    description:
      "Paste a YouTube video URL and reveal the tags its creator used. Reverse-engineer what's working in your niche and model your tag strategy on proven videos.",
    category: "SEO & Discovery",
    keywords: ["youtube tag extractor", "extract youtube tags", "video tags finder", "see youtube tags"],
  },
  {
    slug: "youtube-thumbnail-downloader",
    name: "YouTube Thumbnail Downloader",
    tagline: "Download any video thumbnail in full HD",
    description:
      "Grab any YouTube video's thumbnail in SD, HD, or Full HD with one click. Study high-CTR thumbnails or recover your own designs.",
    category: "Utilities",
    keywords: ["youtube thumbnail downloader", "download yt thumbnail", "thumbnail grabber", "yt thumbnail saver"],
  },
  {
    slug: "youtube-title-generator",
    name: "YouTube Title Generator",
    tagline: "Write titles people can't scroll past",
    description:
      "Turn a plain video topic into clickable, curiosity-driven YouTube titles using proven formulas — without crossing into clickbait that hurts retention.",
    category: "SEO & Discovery",
    keywords: ["youtube title generator", "video title ideas", "clickable titles", "youtube title maker"],
  },
  {
    slug: "youtube-description-generator",
    name: "YouTube Description Generator",
    tagline: "Build descriptions that rank and convert",
    description:
      "Generate a complete, structured video description — hook, keyword-rich summary, chapters, links, and CTAs — formatted exactly how YouTube's algorithm likes it.",
    category: "SEO & Discovery",
    keywords: ["youtube description generator", "video description template", "description maker"],
  },
  {
    slug: "youtube-hashtag-generator",
    name: "YouTube Hashtag Generator",
    tagline: "Find the right hashtags for your video",
    description:
      "Get a smart set of hashtags for your topic — broad reach tags plus niche tags — and learn where to place them so they actually help instead of looking spammy.",
    category: "SEO & Discovery",
    keywords: ["youtube hashtag generator", "video hashtags", "hashtag finder youtube"],
  },
  {
    slug: "youtube-money-calculator",
    name: "YouTube Money Calculator",
    tagline: "Estimate what your views are really worth",
    description:
      "Enter your views and RPM to estimate ad revenue, or work backwards from an income goal. Uses realistic RPM ranges by niche so your expectations stay honest.",
    category: "Analytics",
    keywords: ["youtube money calculator", "youtube earnings calculator", "rpm calculator", "how much youtube pays"],
  },
  {
    slug: "youtube-channel-name-generator",
    name: "YouTube Channel Name Generator",
    tagline: "Find a name worth building a brand on",
    description:
      "Generate memorable, brandable channel name ideas from your niche and style — with a built-in checklist to check availability and avoid names you'll regret.",
    category: "Channel Branding",
    keywords: ["youtube channel name generator", "channel name ideas", "yt name generator"],
  },
  {
    slug: "youtube-video-ideas-generator",
    name: "YouTube Video Ideas Generator",
    tagline: "Never run out of video ideas again",
    description:
      "Get fresh video ideas tailored to your niche and format, built on proven content frameworks like tutorials, comparisons, and challenge formats that audiences love.",
    category: "Content Planning",
    keywords: ["youtube video ideas generator", "content ideas", "video topics", "what to post on youtube"],
  },
  {
    slug: "youtube-embed-code-generator",
    name: "YouTube Embed Code Generator",
    tagline: "Embed videos on any website in seconds",
    description:
      "Paste a video URL and get a clean, responsive embed code with the options you want — autoplay, start time, privacy-enhanced mode, and more.",
    category: "Utilities",
    keywords: ["youtube embed code generator", "embed youtube video", "responsive youtube embed"],
  },
  {
    slug: "youtube-timestamp-link-generator",
    name: "YouTube Timestamp Link Generator",
    tagline: "Create shareable links to any moment",
    description:
      "Turn any video moment into a clickable timestamp link or a full chapter list for your description. Great for tutorials, podcasts, and long videos.",
    category: "Utilities",
    keywords: ["youtube timestamp link generator", "video chapters", "timestamp maker", "link to specific time"],
  },
  {
    slug: "youtube-channel-banner-generator",
    name: "YouTube Banner Guide & Safe-Area Checker",
    tagline: "Design a banner that looks right everywhere",
    description:
      "See the exact YouTube banner dimensions and safe areas for TV, desktop, and mobile, with a visual preview so your text never gets cropped on any device.",
    category: "Channel Branding",
    keywords: ["youtube banner size", "channel art dimensions", "banner safe area", "youtube banner template"],
  },
  {
    slug: "youtube-video-script-generator",
    name: "YouTube Video Script Generator",
    tagline: "Outline scripts that hold attention",
    description:
      "Build a complete video script outline — hook, setup, value beats, and CTA — using retention-focused structures that keep viewers watching to the end.",
    category: "Content Planning",
    keywords: ["youtube script generator", "video script template", "script outline"],
  },
  {
    slug: "youtube-comment-picker",
    name: "YouTube Comment Picker",
    tagline: "Pick a random giveaway winner fairly",
    description:
      "Paste in your video's comments and pick a verifiably random winner for giveaways and contests. Filter duplicates and set custom rules in seconds.",
    category: "Utilities",
    keywords: ["youtube comment picker", "random comment picker", "giveaway winner picker"],
  },
  {
    slug: "youtube-channel-id-finder",
    name: "YouTube Channel ID Finder",
    tagline: "Find any channel's ID or custom URL info",
    description:
      "Learn how to find any YouTube channel's ID, handle, and custom URL — the identifiers you need for embeds, API work, and channel verification.",
    category: "Utilities",
    keywords: ["youtube channel id finder", "find channel id", "channel url lookup"],
  },
  {
    slug: "instagram-hashtag-generator",
    name: "Instagram Hashtag Generator",
    tagline: "Find the best hashtags for Reels and posts",
    description:
      "Generate high-reach Instagram hashtags for your niche in seconds. Mix broad and niche tags to boost Reels and post discovery — free, no signup.",
    category: "Instagram",
    keywords: ["instagram hashtag generator", "instagram hashtags", "best hashtags for instagram", "reels hashtags"],
  },
  {
    slug: "instagram-caption-generator",
    name: "Instagram Caption Generator",
    tagline: "Write captions that earn likes and saves",
    description:
      "Create engaging Instagram captions in seconds — hooks, calls to action, and emoji placement tuned for likes, saves, and comments. Free caption maker.",
    category: "Instagram",
    keywords: ["instagram caption generator", "instagram captions", "caption ideas for instagram"],
  },
  {
    slug: "instagram-bio-generator",
    name: "Instagram Bio Generator",
    tagline: "Craft a bio that turns visitors into followers",
    description:
      "Build a compelling Instagram bio in seconds. Keyword-rich formulas that tell visitors who you help and why they should follow — free bio tool.",
    category: "Instagram",
    keywords: ["instagram bio generator", "instagram bio ideas", "best instagram bios"],
  },
  {
    slug: "instagram-username-generator",
    name: "Instagram Username Generator",
    tagline: "Brainstorm catchy, brandable handles",
    description:
      "Find a memorable Instagram username with our free generator. Brandable handle ideas for creators, businesses, and theme pages — no signup needed.",
    category: "Instagram",
    keywords: ["instagram username generator", "instagram name generator", "cool instagram usernames"],
  },
  {
    slug: "instagram-reel-ideas",
    name: "Instagram Reel Ideas Generator",
    tagline: "Never run out of Reels content ideas",
    description:
      "Get scroll-stopping Instagram Reels ideas for your niche — trending formats, hooks, and content angles that earn watch time. Free Reels idea generator.",
    category: "Instagram",
    keywords: ["instagram reel ideas", "reels ideas", "instagram content ideas", "reels content ideas"],
  },
  {
    slug: "instagram-engagement-rate-calculator",
    name: "Instagram Engagement Rate Calculator",
    tagline: "Measure how your content really performs",
    description:
      "Calculate your Instagram engagement rate instantly from likes, comments, and saves. Benchmark your performance against typical niche averages — free.",
    category: "Instagram",
    keywords: ["instagram engagement rate calculator", "engagement rate formula", "instagram engagement rate"],
  },
  {
    slug: "tiktok-hashtag-generator",
    name: "TikTok Hashtag Generator",
    tagline: "Hashtags that help you hit the For You Page",
    description:
      "Generate high-reach TikTok hashtags for your niche. Combine trending and niche tags to boost discovery on the For You Page — free hashtag tool.",
    category: "TikTok",
    keywords: ["tiktok hashtag generator", "tiktok hashtags", "fyp hashtags", "tiktok hashtag strategy"],
  },
  {
    slug: "tiktok-caption-generator",
    name: "TikTok Caption Generator",
    tagline: "Captions that drive comments and shares",
    description:
      "Write scroll-stopping TikTok captions with hooks and calls to action that spark comments and shares. Free caption generator for TikTok creators.",
    category: "TikTok",
    keywords: ["tiktok caption generator", "tiktok captions", "tiktok caption ideas"],
  },
  {
    slug: "tiktok-username-generator",
    name: "TikTok Username Generator",
    tagline: "Find a unique, memorable TikTok handle",
    description:
      "Brainstorm unique TikTok usernames that are memorable and on-brand. Handle ideas for creators and businesses — free username generator.",
    category: "TikTok",
    keywords: ["tiktok username generator", "tiktok name ideas", "cool tiktok usernames"],
  },
  {
    slug: "tiktok-video-ideas",
    name: "TikTok Video Ideas Generator",
    tagline: "Endless video ideas for your niche",
    description:
      "Get fresh TikTok video ideas tailored to your niche — trends, series formats, and hooks that earn watch time. Free TikTok idea generator.",
    category: "TikTok",
    keywords: ["tiktok video ideas", "tiktok content ideas", "tiktok ideas", "tiktok video topics"],
  },
  {
    slug: "tiktok-engagement-rate-calculator",
    name: "TikTok Engagement Rate Calculator",
    tagline: "See how your TikToks really perform",
    description:
      "Measure your TikTok engagement rate from likes, comments, and shares, and compare it with typical creator benchmarks. Free engagement calculator.",
    category: "TikTok",
    keywords: ["tiktok engagement rate calculator", "tiktok engagement rate", "tiktok analytics"],
  },
  {
    slug: "facebook-post-character-counter",
    name: "Facebook Post Character Counter",
    tagline: "Nail the ideal post length for reach",
    description:
      "Count characters, words, and hashtags in your Facebook post as you type. Stay within the ideal lengths for maximum reach — free character counter.",
    category: "Facebook",
    keywords: ["facebook character counter", "facebook post length", "character counter", "facebook post character limit"],
  },
  {
    slug: "facebook-page-name-generator",
    name: "Facebook Page Name Generator",
    tagline: "Names people remember and search finds",
    description:
      "Generate memorable Facebook Page names with keywords built in for search. Brandable ideas for businesses and creators — free Page name tool.",
    category: "Facebook",
    keywords: ["facebook page name generator", "facebook page name ideas", "fb page name"],
  },
  {
    slug: "facebook-post-ideas",
    name: "Facebook Post Ideas Generator",
    tagline: "Engaging post ideas on demand",
    description:
      "Beat the blank page with engaging Facebook post ideas — questions, polls, stories, and prompts your audience will respond to. Free idea generator.",
    category: "Facebook",
    keywords: ["facebook post ideas", "facebook content ideas", "engaging facebook posts"],
  },
  {
    slug: "facebook-engagement-rate-calculator",
    name: "Facebook Engagement Rate Calculator",
    tagline: "Benchmark your Page's performance",
    description:
      "Calculate your Facebook Page engagement rate and benchmark it against typical ranges for pages your size. Free engagement rate calculator.",
    category: "Facebook",
    keywords: ["facebook engagement rate calculator", "facebook engagement rate", "facebook page analytics"],
  },
  {
    slug: "whatsapp-click-to-chat-link-generator",
    name: "WhatsApp Click-to-Chat Link Generator",
    tagline: "Turn taps into WhatsApp conversations",
    description:
      "Create a wa.me click-to-chat WhatsApp link with a pre-filled message. Perfect for Instagram bios, websites, and ads — free link generator.",
    category: "WhatsApp",
    keywords: ["whatsapp link generator", "wa.me link generator", "whatsapp click to chat", "whatsapp chat link"],
  },
  {
    slug: "whatsapp-text-formatter",
    name: "WhatsApp Text Formatter",
    tagline: "Bold, italic, and styled WhatsApp text",
    description:
      "Format WhatsApp text with bold, italic, strikethrough, and monospace. Type normally, copy the styled version — free WhatsApp text formatter.",
    category: "WhatsApp",
    keywords: ["whatsapp text formatter", "whatsapp bold text", "whatsapp formatting", "whatsapp fonts"],
  },
  {
    slug: "whatsapp-qr-code-generator",
    name: "WhatsApp QR Code Generator",
    tagline: "Scannable QR codes for any link",
    description:
      "Turn any link — including your WhatsApp chat link — into a scannable QR code for packaging, flyers, and storefronts. Free QR code generator.",
    category: "WhatsApp",
    keywords: ["qr code generator", "whatsapp qr code", "free qr code generator", "qr code maker"],
  },
  {
    slug: "youtube-keyword-generator",
    name: "YouTube Keyword Generator",
    tagline: "Find search terms viewers actually type",
    description:
      "Discover YouTube keyword ideas for your videos — real search terms viewers type, with angles for titles, descriptions, and tags. Free keyword tool.",
    category: "SEO & Discovery",
    keywords: ["youtube keyword generator", "youtube keywords", "youtube keyword research", "youtube seo keywords"],
  },
  {
    slug: "youtube-ctr-calculator",
    name: "YouTube CTR Calculator",
    tagline: "Know if your click-through rate is healthy",
    description:
      "Calculate your YouTube click-through rate from impressions and clicks, and see what counts as good CTR at your channel size. Free CTR calculator.",
    category: "Analytics",
    keywords: ["youtube ctr calculator", "click through rate youtube", "youtube ctr", "impressions click-through rate"],
  },
  {
    slug: "youtube-watch-time-calculator",
    name: "YouTube Watch Time Calculator",
    tagline: "Track progress to 4,000 hours",
    description:
      "Estimate total watch time from views and average view duration. Track your progress toward the 4,000-hour YouTube monetization requirement — free.",
    category: "Analytics",
    keywords: ["youtube watch time calculator", "4000 hours watch time", "youtube watch hours", "youtube monetization hours"],
  },
  {
    slug: "youtube-chapter-generator",
    name: "YouTube Chapter Generator",
    tagline: "Format video chapters in seconds",
    description:
      "Turn a timestamp list into clean, formatted YouTube chapters ready to paste into your description. Free chapter generator and formatter.",
    category: "Utilities",
    keywords: ["youtube chapter generator", "youtube chapters", "video chapters", "youtube timestamps"],
  },
  {
    slug: "youtube-upload-checklist",
    name: "YouTube Upload Checklist",
    tagline: "Never publish a half-optimized video",
    description:
      "Interactive YouTube upload checklist — title, thumbnail, description, tags, cards, end screens — so every video goes out fully optimized. Free tool.",
    category: "Content Planning",
    keywords: ["youtube upload checklist", "youtube seo checklist", "video upload checklist"],
  },
  {
    slug: "youtube-shorts-hook-generator",
    name: "YouTube Shorts Hook Generator",
    tagline: "First-3-second hooks that stop the scroll",
    description:
      "Generate scroll-stopping hooks for YouTube Shorts. Proven first-3-second openers tailored to your topic — free Shorts hook generator.",
    category: "Content Planning",
    keywords: ["youtube shorts hooks", "shorts hook ideas", "youtube shorts ideas", "shorts hooks"],
  },
  {
    slug: "youtube-playlist-title-generator",
    name: "YouTube Playlist Title Generator",
    tagline: "Playlist titles that rank and get clicked",
    description:
      "Create search-friendly YouTube playlist titles that rank in search and earn clicks. Keyword-rich ideas for series and collections — free tool.",
    category: "SEO & Discovery",
    keywords: ["youtube playlist title", "playlist name ideas", "youtube playlist seo", "playlist titles"],
  },
];

export function getTool(slug: string): ToolMeta | undefined {
  return tools.find((t) => t.slug === slug);
}
