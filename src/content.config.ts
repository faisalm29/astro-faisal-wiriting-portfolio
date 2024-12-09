import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/data/blog",
  }),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    publishedDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(
      z.enum([
        "Article",
        "Press Release",
        "Social Media Content",
        "Campaign",
        "DoCheck",
        "Insan Bumi Mandiri",
      ])
    ),
  }),
});

export const collections = { blog };
