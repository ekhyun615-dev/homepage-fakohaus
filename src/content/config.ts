import { defineCollection, z } from 'astro:content';

const info = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { info };
