import { defineCollection, z } from 'astro:content';

const servicos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    order: z.number().default(99),
    icon: z.string(), // ex.: "lucide:cpu"
    excerpt: z.string(),
    category: z.enum(['alta-complexidade', 'geral', 'desenvolvimento', 'corporativo']),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const depoimentos = defineCollection({
  type: 'data',
  schema: z.object({
    nome: z.string(),
    cidade: z.string(),
    texto: z.string(),
    nota: z.number().min(1).max(5).default(5),
    order: z.number().default(99),
  }),
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    pergunta: z.string(),
    resposta: z.string(),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Equipe Casstech'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

export const collections = { servicos, depoimentos, faq, blog };
