/*
 * Copyright (c) 2024.
 */

import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    // Transform string to Date object
    dates: z.object({
      created: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      published: z
        .string()
        .or(z.date())
        .transform((val) => (val ? new Date(val) : undefined)),
      updated: z.string().or(z.date()).optional(),
    }),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const links = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    type: z.string(),
    links: z.array(
      z.object({ link: z.string(), title: z.string(), summary: z.string() }),
    ),
    // Transform string to Date object
    dates: z.object({
      created: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      published: z
        .string()
        .or(z.date())
        .transform((val) => (val ? new Date(val) : undefined)),
      updated: z.string().or(z.date()).optional(),
    }),
    draft: z.boolean().optional(),
  }),
});

const books = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    type: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    ISBN: z.string(),
    // Transform string to Date object
    dates: z.object({
      created: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      published: z
        .string()
        .or(z.date())
        .transform((val) => (val ? new Date(val) : undefined)),
      updated: z.string().or(z.date()).optional(),
    }),
    cover: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, links, books };
