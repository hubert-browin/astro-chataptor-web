import { defineCollection, z } from 'astro:content';

const localeEnum = z.enum(['pl', 'en', 'de', 'fr', 'es', 'it', 'cs', 'sk']);

const translationFields = {
  sourceFile: z.string().optional(),
  sourceHash: z.string().optional(),
  reviewed: z.boolean().default(false),
  reviewedAt: z.coerce.date().optional(),
  translatedAt: z.coerce.date().optional(),
  translatedBy: z.enum(['openai', 'deepl', 'manual']).optional(),
  translateTo: z
    .union([z.literal('all'), z.array(z.string())])
    .default('all'),
};

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: localeEnum,
    updatedAt: z.coerce.date().optional(),
    ...translationFields,
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: localeEnum,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    ...translationFields,
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: localeEnum,
    features: z.array(z.string()).default([]),
    ...translationFields,
  }),
});

export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
  products: productsCollection,
};