import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/data/article",
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      source: z.string(),
      publishedDate: z.string(),
      description: z.string(),
      thumbnail: image(),
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
