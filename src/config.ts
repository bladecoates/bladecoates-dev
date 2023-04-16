export const SITE = {
  url: "https://bladecoates.dev",
  slug: "",
  title: "Blade Coates",
  description: "Your website description.",
  defaultLanguage: "en_US",
  giscus_github_repo: "bladecoates/bladecoates-dev",
  giscus_github_repo_id: "R_kgDOJVt0Wg"
};

// This is the type of the Frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};
