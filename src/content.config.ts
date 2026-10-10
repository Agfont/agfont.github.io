import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { WORK_FIELDS } from './utils/fields';
import { TECHNOLOGY_GROUPS } from './utils/technologies';

const technologyGroups = Object.keys(TECHNOLOGY_GROUPS) as [string, ...string[]];
const technologies = Object.values(TECHNOLOGY_GROUPS).flat() as [string, ...string[]];

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fields: z.array(z.enum(WORK_FIELDS)).default([]),
    technologies: z.partialRecord(z.enum(technologyGroups), z.array(z.enum(technologies))).default({}),
    link: z.url().optional(),
    industries: z.array(z.string()).default([]),
    order: z.number().optional(),
    date: z.coerce.date()
  }),
});

export const collections = { work };