import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema reserved for future blog posts. No entries are created in Phase 1
// (per Phase 1 scope: no blog articles / marketing copy yet).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };
