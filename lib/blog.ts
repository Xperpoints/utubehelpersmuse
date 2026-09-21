import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export interface Faq {
  q: string;
  a: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  faqs: Faq[];
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
}

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    // Support both legacy (description/tags) and new (excerpt/keywords) frontmatter schemas.
    description: (data.description as string | undefined) ?? (data.excerpt as string) ?? "",
    date: data.date as string,
    updated: data.updated as string | undefined,
    author: (data.author as string) ?? "hussnain",
    tags: ((data.tags as string[] | undefined) ?? (data.keywords as string[] | undefined)) ?? [],
    faqs: (data.faqs as Faq[]) ?? [],
    readingMinutes: readingMinutes(content),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      const meta: PostMeta = {
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        tags: post.tags,
        faqs: post.faqs,
        slug: post.slug,
        readingMinutes: post.readingMinutes,
      };
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
