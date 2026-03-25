import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fields: z.array(z.string()).default([]),
    technologies: z.record(z.string(), z.array(z.string())).default({}),
    link: z.string().url().optional(),
    industries: z.array(z.string()).default([]),
    date: z.coerce.date()
  }),
});

export const collections = { work };