// Author profiles for E-E-A-T: every article and tool page is attributed to a real person.

export interface Author {
  slug: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  initials: string;
}

export const authors: Record<string, Author> = {
  hussnain: {
    slug: "hussnain",
    name: "Hussnain",
    role: "Founder of UtubeHelpers",
    location: "Pakistan",
    initials: "H",
    bio: "Hussnain founded UtubeHelpers in 2026 to give creators free, no-signup tools and practical, hype-free growth guides — honest numbers, no guru hype.",
  },
};

export function getAuthor(slug: string): Author {
  return authors[slug] ?? authors.hussnain;
}
