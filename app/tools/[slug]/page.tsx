import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { tools, getTool } from "@/lib/tools";
import ToolShell from "@/components/ToolShell";

import { TagGeneratorTool } from "@/components/tools/TagGenerator";
import { tagGeneratorGuide, tagGeneratorFaqs } from "@/components/tools/TagGenerator.content";
import { TagExtractorTool } from "@/components/tools/TagExtractor";
import { tagExtractorGuide, tagExtractorFaqs } from "@/components/tools/TagExtractor.content";
import { ThumbnailDownloaderTool } from "@/components/tools/ThumbnailDownloader";
import { thumbnailDownloaderGuide, thumbnailDownloaderFaqs } from "@/components/tools/ThumbnailDownloader.content";
import { TitleGeneratorTool } from "@/components/tools/TitleGenerator";
import { titleGeneratorGuide, titleGeneratorFaqs } from "@/components/tools/TitleGenerator.content";
import { DescriptionGeneratorTool } from "@/components/tools/DescriptionGenerator";
import { descriptionGeneratorGuide, descriptionGeneratorFaqs } from "@/components/tools/DescriptionGenerator.content";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGenerator";
import { hashtagGeneratorGuide, hashtagGeneratorFaqs } from "@/components/tools/HashtagGenerator.content";
import { MoneyCalculatorTool } from "@/components/tools/MoneyCalculator";
import { moneyCalculatorGuide, moneyCalculatorFaqs } from "@/components/tools/MoneyCalculator.content";
import { ChannelNameGeneratorTool } from "@/components/tools/ChannelNameGenerator";
import { channelNameGuide, channelNameFaqs } from "@/components/tools/ChannelNameGenerator.content";
import { VideoIdeasTool } from "@/components/tools/VideoIdeasGenerator";
import { videoIdeasGuide, videoIdeasFaqs } from "@/components/tools/VideoIdeasGenerator.content";
import { EmbedCodeTool } from "@/components/tools/EmbedCodeGenerator";
import { embedCodeGuide, embedCodeFaqs } from "@/components/tools/EmbedCodeGenerator.content";
import { TimestampLinkTool } from "@/components/tools/TimestampLinkGenerator";
import { timestampLinkGuide, timestampLinkFaqs } from "@/components/tools/TimestampLinkGenerator.content";
import { ChannelBannerTool } from "@/components/tools/ChannelBannerGuide";
import { channelBannerGuide, channelBannerFaqs } from "@/components/tools/ChannelBannerGuide.content";
import { VideoScriptTool } from "@/components/tools/VideoScriptGenerator";
import { videoScriptGuide, videoScriptFaqs } from "@/components/tools/VideoScriptGenerator.content";
import { CommentPickerTool } from "@/components/tools/CommentPicker";
import { commentPickerGuide, commentPickerFaqs } from "@/components/tools/CommentPicker.content";
import { ChannelIdFinderTool } from "@/components/tools/ChannelIdFinder";
import { channelIdFinderGuide, channelIdFinderFaqs } from "@/components/tools/ChannelIdFinder.content";
import { InstagramHashtagGeneratorTool } from "@/components/tools/InstagramHashtagGenerator";
import { instagramHashtagGuide, instagramHashtagFaqs } from "@/components/tools/InstagramHashtagGenerator.content";
import { InstagramCaptionGeneratorTool } from "@/components/tools/InstagramCaptionGenerator";
import { instagramCaptionGuide, instagramCaptionFaqs } from "@/components/tools/InstagramCaptionGenerator.content";
import { InstagramBioGeneratorTool } from "@/components/tools/InstagramBioGenerator";
import { instagramBioGuide, instagramBioFaqs } from "@/components/tools/InstagramBioGenerator.content";
import { InstagramUsernameGeneratorTool } from "@/components/tools/InstagramUsernameGenerator";
import { instagramUsernameGuide, instagramUsernameFaqs } from "@/components/tools/InstagramUsernameGenerator.content";
import { InstagramReelIdeasTool } from "@/components/tools/InstagramReelIdeas";
import { instagramReelIdeasGuide, instagramReelIdeasFaqs } from "@/components/tools/InstagramReelIdeas.content";
import { InstagramEngagementCalculatorTool } from "@/components/tools/InstagramEngagementCalculator";
import { instagramEngagementGuide, instagramEngagementFaqs } from "@/components/tools/InstagramEngagementCalculator.content";
import { TikTokHashtagGeneratorTool } from "@/components/tools/TikTokHashtagGenerator";
import { tiktokHashtagGuide, tiktokHashtagFaqs } from "@/components/tools/TikTokHashtagGenerator.content";
import { TikTokCaptionGeneratorTool } from "@/components/tools/TikTokCaptionGenerator";
import { tiktokCaptionGuide, tiktokCaptionFaqs } from "@/components/tools/TikTokCaptionGenerator.content";
import { TikTokUsernameGeneratorTool } from "@/components/tools/TikTokUsernameGenerator";
import { tiktokUsernameGuide, tiktokUsernameFaqs } from "@/components/tools/TikTokUsernameGenerator.content";
import { TikTokVideoIdeasTool } from "@/components/tools/TikTokVideoIdeas";
import { tiktokVideoIdeasGuide, tiktokVideoIdeasFaqs } from "@/components/tools/TikTokVideoIdeas.content";
import { TikTokEngagementCalculatorTool } from "@/components/tools/TikTokEngagementCalculator";
import { tiktokEngagementGuide, tiktokEngagementFaqs } from "@/components/tools/TikTokEngagementCalculator.content";
import { FacebookPostCounterTool } from "@/components/tools/FacebookPostCounter";
import { facebookPostCounterGuide, facebookPostCounterFaqs } from "@/components/tools/FacebookPostCounter.content";
import { FacebookPageNameGeneratorTool } from "@/components/tools/FacebookPageNameGenerator";
import { facebookPageNameGuide, facebookPageNameFaqs } from "@/components/tools/FacebookPageNameGenerator.content";
import { FacebookPostIdeasTool } from "@/components/tools/FacebookPostIdeas";
import { facebookPostIdeasGuide, facebookPostIdeasFaqs } from "@/components/tools/FacebookPostIdeas.content";
import { FacebookEngagementCalculatorTool } from "@/components/tools/FacebookEngagementCalculator";
import { facebookEngagementGuide, facebookEngagementFaqs } from "@/components/tools/FacebookEngagementCalculator.content";
import { WhatsAppLinkGeneratorTool } from "@/components/tools/WhatsAppLinkGenerator";
import { whatsappLinkGuide, whatsappLinkFaqs } from "@/components/tools/WhatsAppLinkGenerator.content";
import { WhatsAppTextFormatterTool } from "@/components/tools/WhatsAppTextFormatter";
import { whatsappFormatterGuide, whatsappFormatterFaqs } from "@/components/tools/WhatsAppTextFormatter.content";
import { WhatsAppQrGeneratorTool } from "@/components/tools/WhatsAppQrGenerator";
import { whatsappQrGuide, whatsappQrFaqs } from "@/components/tools/WhatsAppQrGenerator.content";
import { YouTubeKeywordGeneratorTool } from "@/components/tools/YouTubeKeywordGenerator";
import { youtubeKeywordGuide, youtubeKeywordFaqs } from "@/components/tools/YouTubeKeywordGenerator.content";
import { YouTubeCtrCalculatorTool } from "@/components/tools/YouTubeCtrCalculator";
import { youtubeCtrGuide, youtubeCtrFaqs } from "@/components/tools/YouTubeCtrCalculator.content";
import { YouTubeWatchTimeCalculatorTool } from "@/components/tools/YouTubeWatchTimeCalculator";
import { youtubeWatchTimeGuide, youtubeWatchTimeFaqs } from "@/components/tools/YouTubeWatchTimeCalculator.content";
import { YouTubeChapterGeneratorTool } from "@/components/tools/YouTubeChapterGenerator";
import { youtubeChapterGuide, youtubeChapterFaqs } from "@/components/tools/YouTubeChapterGenerator.content";
import { YouTubeUploadChecklistTool } from "@/components/tools/YouTubeUploadChecklist";
import { youtubeUploadChecklistGuide, youtubeUploadChecklistFaqs } from "@/components/tools/YouTubeUploadChecklist.content";
import { YouTubeShortsHookGeneratorTool } from "@/components/tools/YouTubeShortsHookGenerator";
import { youtubeShortsHookGuide, youtubeShortsHookFaqs } from "@/components/tools/YouTubeShortsHookGenerator.content";
import { YouTubePlaylistTitleGeneratorTool } from "@/components/tools/YouTubePlaylistTitleGenerator";
import { youtubePlaylistGuide, youtubePlaylistFaqs } from "@/components/tools/YouTubePlaylistTitleGenerator.content";

interface ToolEntry {
  Tool: () => ReactNode;
  guide: ReactNode;
  faqs: { q: string; a: string }[];
}

const registry: Record<string, ToolEntry> = {
  "youtube-tag-generator": { Tool: TagGeneratorTool, guide: tagGeneratorGuide, faqs: tagGeneratorFaqs },
  "youtube-tag-extractor": { Tool: TagExtractorTool, guide: tagExtractorGuide, faqs: tagExtractorFaqs },
  "youtube-thumbnail-downloader": { Tool: ThumbnailDownloaderTool, guide: thumbnailDownloaderGuide, faqs: thumbnailDownloaderFaqs },
  "youtube-title-generator": { Tool: TitleGeneratorTool, guide: titleGeneratorGuide, faqs: titleGeneratorFaqs },
  "youtube-description-generator": { Tool: DescriptionGeneratorTool, guide: descriptionGeneratorGuide, faqs: descriptionGeneratorFaqs },
  "youtube-hashtag-generator": { Tool: HashtagGeneratorTool, guide: hashtagGeneratorGuide, faqs: hashtagGeneratorFaqs },
  "youtube-money-calculator": { Tool: MoneyCalculatorTool, guide: moneyCalculatorGuide, faqs: moneyCalculatorFaqs },
  "youtube-channel-name-generator": { Tool: ChannelNameGeneratorTool, guide: channelNameGuide, faqs: channelNameFaqs },
  "youtube-video-ideas-generator": { Tool: VideoIdeasTool, guide: videoIdeasGuide, faqs: videoIdeasFaqs },
  "youtube-embed-code-generator": { Tool: EmbedCodeTool, guide: embedCodeGuide, faqs: embedCodeFaqs },
  "youtube-timestamp-link-generator": { Tool: TimestampLinkTool, guide: timestampLinkGuide, faqs: timestampLinkFaqs },
  "youtube-channel-banner-generator": { Tool: ChannelBannerTool, guide: channelBannerGuide, faqs: channelBannerFaqs },
  "youtube-video-script-generator": { Tool: VideoScriptTool, guide: videoScriptGuide, faqs: videoScriptFaqs },
  "youtube-comment-picker": { Tool: CommentPickerTool, guide: commentPickerGuide, faqs: commentPickerFaqs },
  "youtube-channel-id-finder": { Tool: ChannelIdFinderTool, guide: channelIdFinderGuide, faqs: channelIdFinderFaqs },
  "instagram-hashtag-generator": { Tool: InstagramHashtagGeneratorTool, guide: instagramHashtagGuide, faqs: instagramHashtagFaqs },
  "instagram-caption-generator": { Tool: InstagramCaptionGeneratorTool, guide: instagramCaptionGuide, faqs: instagramCaptionFaqs },
  "instagram-bio-generator": { Tool: InstagramBioGeneratorTool, guide: instagramBioGuide, faqs: instagramBioFaqs },
  "instagram-username-generator": { Tool: InstagramUsernameGeneratorTool, guide: instagramUsernameGuide, faqs: instagramUsernameFaqs },
  "instagram-reel-ideas": { Tool: InstagramReelIdeasTool, guide: instagramReelIdeasGuide, faqs: instagramReelIdeasFaqs },
  "instagram-engagement-rate-calculator": { Tool: InstagramEngagementCalculatorTool, guide: instagramEngagementGuide, faqs: instagramEngagementFaqs },
  "tiktok-hashtag-generator": { Tool: TikTokHashtagGeneratorTool, guide: tiktokHashtagGuide, faqs: tiktokHashtagFaqs },
  "tiktok-caption-generator": { Tool: TikTokCaptionGeneratorTool, guide: tiktokCaptionGuide, faqs: tiktokCaptionFaqs },
  "tiktok-username-generator": { Tool: TikTokUsernameGeneratorTool, guide: tiktokUsernameGuide, faqs: tiktokUsernameFaqs },
  "tiktok-video-ideas": { Tool: TikTokVideoIdeasTool, guide: tiktokVideoIdeasGuide, faqs: tiktokVideoIdeasFaqs },
  "tiktok-engagement-rate-calculator": { Tool: TikTokEngagementCalculatorTool, guide: tiktokEngagementGuide, faqs: tiktokEngagementFaqs },
  "facebook-post-character-counter": { Tool: FacebookPostCounterTool, guide: facebookPostCounterGuide, faqs: facebookPostCounterFaqs },
  "facebook-page-name-generator": { Tool: FacebookPageNameGeneratorTool, guide: facebookPageNameGuide, faqs: facebookPageNameFaqs },
  "facebook-post-ideas": { Tool: FacebookPostIdeasTool, guide: facebookPostIdeasGuide, faqs: facebookPostIdeasFaqs },
  "facebook-engagement-rate-calculator": { Tool: FacebookEngagementCalculatorTool, guide: facebookEngagementGuide, faqs: facebookEngagementFaqs },
  "whatsapp-click-to-chat-link-generator": { Tool: WhatsAppLinkGeneratorTool, guide: whatsappLinkGuide, faqs: whatsappLinkFaqs },
  "whatsapp-text-formatter": { Tool: WhatsAppTextFormatterTool, guide: whatsappFormatterGuide, faqs: whatsappFormatterFaqs },
  "whatsapp-qr-code-generator": { Tool: WhatsAppQrGeneratorTool, guide: whatsappQrGuide, faqs: whatsappQrFaqs },
  "youtube-keyword-generator": { Tool: YouTubeKeywordGeneratorTool, guide: youtubeKeywordGuide, faqs: youtubeKeywordFaqs },
  "youtube-ctr-calculator": { Tool: YouTubeCtrCalculatorTool, guide: youtubeCtrGuide, faqs: youtubeCtrFaqs },
  "youtube-watch-time-calculator": { Tool: YouTubeWatchTimeCalculatorTool, guide: youtubeWatchTimeGuide, faqs: youtubeWatchTimeFaqs },
  "youtube-chapter-generator": { Tool: YouTubeChapterGeneratorTool, guide: youtubeChapterGuide, faqs: youtubeChapterFaqs },
  "youtube-upload-checklist": { Tool: YouTubeUploadChecklistTool, guide: youtubeUploadChecklistGuide, faqs: youtubeUploadChecklistFaqs },
  "youtube-shorts-hook-generator": { Tool: YouTubeShortsHookGeneratorTool, guide: youtubeShortsHookGuide, faqs: youtubeShortsHookFaqs },
  "youtube-playlist-title-generator": { Tool: YouTubePlaylistTitleGeneratorTool, guide: youtubePlaylistGuide, faqs: youtubePlaylistFaqs },
};

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool not found" };
  return {
    title: `${tool.name} — Free Online`,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: `https://utubehelpers.com/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name} — Free Online | UtubeHelpers`,
      description: tool.description,
      url: `https://utubehelpers.com/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  const entry = registry[slug];
  if (!tool || !entry) notFound();

  const { Tool, guide, faqs } = entry;
  return (
    <ToolShell tool={tool} guide={guide} faqs={faqs}>
      <Tool />
    </ToolShell>
  );
}
