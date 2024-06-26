/*
 * Copyright (c) 2024.
 */

export const site = {
  url: "https://bladecoates.dev",
  slug: "",
  title: "Blade Coates",
  description: "Your website description.",
  defaultLanguage: "en_US",
};

export const giscus = {
  repo: "bladecoates/bladecoates-dev",
  repoId: "R_kgDOJVt0Wg",
  category: "General",
  categoryId: "DIC_kwDOJVt0Ws4CV0HV",
  mapping: "pathname",
  strict: "1",
  term: "Welcome to @giscus/react component!",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  theme: "dark_tritanopia",
  lang: "en",
  loading: "lazy",
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
