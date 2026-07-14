# Casstech Jandaia — Site Institucional

Site de alta performance para a **Casstech Jandaia** (assistência técnica, soluções de TI e desenvolvimento de sistemas em Jandaia de Goiás e região).

Construído com **Astro + Tailwind CSS**, com SEO local no centro da arquitetura, painel de edição via **Decap CMS** e deploy na **Netlify**.

---

## 🚀 Stack

- **Astro** (site estático, ~0 KB de JS por padrão → Core Web Vitals no topo)
- **Tailwind CSS** (design system dark-first, glassmorphism, tema tech)
- **@astrojs/sitemap** (sitemap automático)
- **astro-icon + Lucide** (ícones futuristas)
- **Decap CMS** (painel de administração em `/admin`)
- Fontes self-hosted (Space Grotesk + Inter)

## 💻 Rodar localmente

Requer Node.js 18+ (recomendado 20).

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`.

Build de produção:

```bash
npm run build      # gera a pasta dist/
npm run preview    # pré-visualiza o build
```

## 🌐 Deploy na Netlify

1. Suba este projeto para um repositório Git (GitHub, GitLab ou Bitbucket).
2. Na Netlify: **Add new site → Import an existing project** e conecte o repositório.
3. As configurações de build já estão no `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Após o primeiro deploy, aponte o domínio **casstechjandaia.com.br** em **Domain settings**.

## 🔐 Ativar o painel de edição (Decap CMS)

O painel fica em `https://SEU-SITE/admin`. Para funcionar em produção:

1. Na Netlify, vá em **Site configuration → Identity** e clique em **Enable Identity**.
2. Em **Identity → Services → Git Gateway**, clique em **Enable Git Gateway**.
3. Em **Identity → Registration**, defina como **Invite only** e convide o e-mail do administrador (`casstecnologia@gmail.com`).
4. Aceite o convite pelo e-mail, crie a senha e acesse `/admin` para editar serviços, blog, depoimentos e FAQ.

> Para testar o painel **localmente**, descomente `local_backend: true` em `public/admin/config.yml` e rode `npx decap-server` em outro terminal.

## ✏️ Onde editar cada conteúdo

| Conteúdo | Local | No painel |
|---|---|---|
| Dados de contato, WhatsApp, Instagram, cidades | `src/site.config.ts` | (via código) |
| Serviços | `src/content/servicos/*.md` | Serviços |
| Posts do blog | `src/content/blog/*.md` | Blog |
| Depoimentos | `src/content/depoimentos/*.json` | Depoimentos |
| Perguntas frequentes | `src/content/faq/*.json` | Perguntas Frequentes |
| Cores e tema | `tailwind.config.mjs` | (via código) |

## 📈 SEO já incluído

- JSON-LD: `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`
- `sitemap.xml` e `robots.txt` automáticos
- Open Graph + Twitter Cards, canonical, `lang="pt-BR"`, meta geo
- Títulos e descrições otimizados por página com foco em Jandaia de Goiás e região

### Recomendações pós-lançamento

- Crie/atualize o **Google Business Profile** com o mesmo NAP do site.
- Envie o `sitemap.xml` no **Google Search Console**.
- Substitua `public/og-image.svg` por um **og-image.png** (1200×630) para melhor pré-visualização em redes sociais.
- Rode o **PageSpeed Insights** e confira Lighthouse ≥ 95.
