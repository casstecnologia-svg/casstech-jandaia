import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/site.config';

const staticPaths = [
  '',
  'servicos',
  'empresas',
  'sobre',
  'area-de-atuacao',
  'contato',
  'blog',
];

export const GET: APIRoute = async () => {
  const servicos = await getCollection('servicos');
  const blog = await getCollection('blog');

  const urls = [
    ...staticPaths.map((p) => (p ? `${site.domain}/${p}` : site.domain)),
    ...servicos.map((s) => `${site.domain}/servicos/${s.slug}`),
    ...blog.map((b) => `${site.domain}/blog/${b.slug}`),
  ];

  const today = new Date().toISOString().split('T')[0];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
