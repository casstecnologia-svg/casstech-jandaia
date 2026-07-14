# Casstech Jandaia — Blueprint Técnico Definitivo & Prompt para o Claude Code

**Documento mestre de arquitetura, design system e engenharia de conversão/SEO**
Preparado para: Alexandre — Casstech Jandaia
Domínio atual: https://www.casstechjandaia.com.br/

---

## PARTE 1 — Análise de Infraestrutura e Recomendação Técnica

Você pediu uma avaliação honesta entre três rotas. Abaixo está a comparação de elite, com o veredito e o porquê técnico.

### 1.1 O que realmente importa no seu cenário

O seu site **não é um app**: é um **site institucional de captação de clientes locais** (assistência técnica em Jandaia/GO). Isso muda tudo. Os fatores de sucesso, em ordem de peso, são:

1. **Core Web Vitals impecáveis** (LCP, INP, CLS) — o Google usa isso como fator de ranqueamento e é o que decide se o visitante do celular fica ou sai.
2. **SEO local dominante** — Schema `LocalBusiness`, NAP consistente, páginas por cidade, integração com Google Business Profile.
3. **Conversão para WhatsApp** — velocidade e clareza de CTA convertem mais do que qualquer "recurso".
4. **Custo baixo e manutenção simples** — você não quer pagar servidor caro nem sofrer com atualização/segurança.
5. **Você mesmo poder editar textos e preços** sem depender de programador.

### 1.2 Comparativo das rotas

| Critério | Hostinger + WordPress | Netlify + Next.js | **Astro + Tailwind (recomendado)** |
|---|---|---|---|
| Velocidade / Core Web Vitals | Média (PHP + plugins pesam) | Boa (mas envia muito JS) | **Excelente — zero JS por padrão** |
| SEO técnico | Bom (com Rank Math/Yoast) | Bom | **Excelente (HTML estático puro, controle total)** |
| Segurança | Frágil (alvo #1 de ataques, plugins) | Alta | **Altíssima (site estático, sem backend exposto)** |
| Custo | Hospedagem + plugins pagos | Grátis (tier Netlify) | **Grátis (tier Netlify/Cloudflare)** |
| Painel para você editar | Sim (nativo) | Não nativo | **Sim, via CMS Git (Decap/TinaCMS)** |
| Manutenção | Constante (updates, backups) | Baixa | **Quase zero** |
| Escala p/ B2B / futuro | Média | Alta | **Alta** |

### 1.3 Veredito: a rota que supera as suas duas opções

**Recomendação: Astro + Tailwind CSS, com Decap CMS (painel administrativo Git), hospedado na Netlify.**

Por quê essa é superior às suas duas ideias:

- **Vs. Next.js:** o Next.js é um framework de *aplicação*. Ele envia JavaScript ("hydration") para o navegador mesmo em páginas que são puramente informativas. Para um site institucional, isso é peso morto que prejudica o LCP/INP no celular. O **Astro renderiza HTML estático e envia ~0 KB de JavaScript por padrão** (arquitetura de "ilhas" — só hidrata o que for interativo, como o menu mobile). Resultado prático: **Lighthouse 100/100** é atingível de forma consistente. Para SEO local isso é uma vantagem competitiva real sobre concorrentes em WordPress.

- **Vs. WordPress/Hostinger:** o WordPress atrai você pela facilidade do painel — mas cobra caro em velocidade, segurança e manutenção (é o CMS mais atacado do mundo, exige updates e backups constantes, e plugins acumulam bloat). **A boa notícia:** você não precisa abrir mão do painel. O **Decap CMS** (antigo Netlify CMS) te dá uma tela de administração visual (`seusite.com/admin`) para editar textos, preços, serviços e posts do blog — sem tocar em código — mas por baixo continua sendo um site estático ultrarrápido. Você ganha os dois mundos: **conforto de painel + performance de site estático.**

- **Hospedagem:** mantemos a **Netlify** (sua rota principal), que é perfeita para Astro: deploy automático via Git, HTTPS grátis, CDN global, formulários nativos e redirects fáceis. *(Cloudflare Pages é uma alternativa equivalente, também gratuita, caso queira comparar — mas Netlify já resolve com folga.)*

> **Resumo de uma linha:** Fique na Netlify, troque Next.js por **Astro** (mais rápido para o seu caso) e adicione o **Decap CMS** para ter o painel que o WordPress te oferecia — sem os defeitos do WordPress.

Se, mesmo assim, você preferir insistir em React/Next.js (por familiaridade ou intenção de virar um app no futuro), o prompt na Parte 4 traz uma **variante alternativa** pronta. Mas a recomendação de elite é Astro.

---

## PARTE 2 — Arquitetura da Informação e Árvore de Navegação

### 2.1 Sitemap (estrutura de páginas)

```
/
├── / .......................... Home (Landing de conversão)
├── /servicos .................. Hub de todos os serviços
│   ├── /servicos/manutencao-placa-mae-notebook
│   ├── /servicos/upgrade-ssd-e-memoria
│   ├── /servicos/gerenciamento-termico
│   ├── /servicos/recuperacao-de-dados
│   ├── /servicos/formatacao-e-instalacao
│   └── /servicos/redes-e-configuracao
├── /empresas .................. Soluções Corporativas B2B (contratos mensais de TI)
├── /sobre ..................... Autoridade, história, equipe, garantias
├── /area-de-atuacao ........... Jandaia + cidades vizinhas (SEO local por cidade)
├── /blog ...................... Conteúdo técnico p/ SEO ("como saber se a placa-mãe queimou" etc.)
│   └── /blog/[slug]
├── /contato ................... Mapa, WhatsApp, formulário, horário
└── /admin ..................... Painel Decap CMS (edição de conteúdo)
```

### 2.2 Estrutura da Home (ordem das seções = jornada de conversão)

A home é desenhada como uma **escada de persuasão** — cada seção responde a uma objeção e empurra para o WhatsApp:

1. **Header fixo** — logo, navegação, botão "Falar no WhatsApp" sempre visível.
2. **Hero** — headline de autoridade + subheadline com prova + 2 CTAs (WhatsApp primário, "Ver serviços" secundário). Fundo tech 4K com grid/glow animado sutil.
3. **Barra de confiança** — selos rápidos: "+X anos", "Orçamento sem compromisso", "Atendimento em Jandaia e região", "Garantia no serviço".
4. **Serviços de Alta Complexidade** — grid de cards com ícones futuristas (placa-mãe, SSD, térmico, recuperação de dados, formatação). Cada card leva à página do serviço.
5. **Bloco B2B** — seção destacada "Sua empresa parada custa caro" → contratos mensais de TI, gestão de chamados, para comércio local e órgãos públicos. CTA próprio.
6. **Diferenciais / Por que a Casstech** — know-how técnico, transparência, rapidez, gestão de chamados.
7. **Processo em 4 passos** — "Chama no Whats → Diagnóstico → Orçamento → Conserto" (reduz atrito/medo).
8. **Prova social** — depoimentos, avaliações Google, contador de atendimentos.
9. **Área de atuação** — Jandaia de Goiás e cidades vizinhas (mini-mapa + lista de cidades — reforço de SEO local).
10. **FAQ** — dúvidas comuns (com Schema `FAQPage` para rich results no Google).
11. **CTA final de alta conversão** — faixa com fundo tech + botão grande de WhatsApp.
12. **Footer** — NAP completo, redes, mapa, horários, links.

**Elementos persistentes (todas as páginas):**
- **Botão flutuante de WhatsApp** (canto inferior direito, pulsante).
- **Botão flutuante do Instagram** @casstech.jandaia (empilhado acima do WhatsApp).
- **Barra CTA "sticky" no mobile** na base da tela ("Orçamento no WhatsApp").

### 2.3 Estratégia de SEO (no centro do código, como você pediu)

- **On-page:** cada página com `<title>`, `meta description`, H1 único, headings hierárquicos, URLs limpas com palavra-chave.
- **Palavras-chave locais alvo:** "assistência técnica de notebook em Jandaia", "conserto de placa-mãe Jandaia de Goiás", "recuperação de dados região de Jandaia", "manutenção de TI para empresas Jandaia", "upgrade de SSD notebook Goiás".
- **Dados estruturados (JSON-LD):** `LocalBusiness` (com `geo`, `openingHours`, `telephone`, `sameAs` para Instagram), `Service` por página de serviço, `FAQPage`, `BreadcrumbList`.
- **NAP consistente** em todo o site (nome, endereço, telefone idênticos ao Google Business Profile).
- **Técnico:** `sitemap.xml` e `robots.txt` automáticos, Open Graph + Twitter Cards, canonical tags, imagens em WebP/AVIF com `alt` descritivo e `lazy loading`, `hreflang` pt-BR.
- **Performance como SEO:** meta Lighthouse ≥ 95 em todas as categorias; LCP < 2,0s no 4G.
- **Blog** como motor de cauda longa para capturar buscas informativas e converter em clientes.

---

## PARTE 3 — Design System 4K ("Alta Tecnologia & Autoridade")

### 3.1 Conceito visual

**"Laboratório de engenharia futurista":** fundo escuro profundo (dark-first), superfícies com efeito vidro (glassmorphism), acentos em ciano/azul-elétrico com brilho neon controlado, tipografia técnica e geométrica, micro-animações suaves. Sensação de precisão, confiança e vanguarda — sem exageros que atrapalhem a leitura.

### 3.2 Paleta de cores (tokens)

```
--bg-900:      #05070D   /* fundo base, quase preto azulado */
--bg-800:      #0A0E1A   /* seções alternadas */
--surface:     #111827   /* cards / superfícies */
--surface-glass: rgba(255,255,255,0.05) /* vidro */
--border:      #1E2A44   /* bordas sutis */

--primary-500: #00E5FF   /* ciano elétrico — cor de marca / CTA tech */
--primary-600: #00B8D4
--accent-500:  #3B82F6   /* azul autoridade */
--accent-glow: #22D3EE   /* brilho / halos */

--whatsapp:    #25D366   /* botão WhatsApp (cor oficial, alta conversão) */
--instagram:   #E1306C   /* botão Instagram */

--text-100:    #F8FAFC   /* títulos */
--text-300:    #CBD5E1   /* corpo */
--text-500:    #94A3B8   /* legendas */

--success:     #22C55E
--warning:     #F59E0B
```

Gradientes de marca: `linear-gradient(135deg, #00E5FF, #3B82F6)` para destaques e botões primários; halos radiais ciano para o hero.

### 3.3 Tipografia

- **Títulos:** `Space Grotesk` ou `Sora` (geométrica, tech, autoridade).
- **Corpo:** `Inter` (legibilidade máxima em todos os tamanhos).
- Escala fluida (`clamp()`) para responsividade real "4K → mobile".
- Pesos: 700/600 para títulos, 400/500 para corpo. Tracking levemente negativo em headlines grandes.

### 3.4 Iconografia futurista

- Base: **Lucide** (traço fino, moderno e consistente) — `cpu`, `hard-drive`, `thermometer`, `database`, `shield-check`, `network`, `wrench`, `server`.
- Estilo: contorno fino (1.5px), com **glow ciano** no hover, dentro de "chips" de vidro com borda gradiente.
- Ícones de serviço podem ganhar um leve efeito de circuito/linha animada no hover.

### 3.5 Componentes-chave

- **Cards de serviço** — vidro, borda gradiente no hover, ícone + título + 1 linha + link "Saiba mais".
- **Botão primário** — gradiente ciano→azul, sombra/glow, estado hover com leve elevação.
- **Botão WhatsApp** — verde oficial, ícone, texto "Orçamento no WhatsApp".
- **Badges de confiança** — pílulas de vidro com ícone.
- **Seção B2B** — layout diferenciado (fundo mais claro ou com padrão de grid) para destacar o público corporativo.
- **FAB (Floating Action Buttons)** — WhatsApp (pulsante) + Instagram, canto inferior direito.
- **Acordeão FAQ** — expansível, acessível (teclado + ARIA).

### 3.6 Movimento e acessibilidade

- Animações de entrada sutis (fade/slide on scroll), respeitando `prefers-reduced-motion`.
- Contraste AA/AAA garantido (texto claro sobre fundo escuro).
- Foco visível, navegação por teclado, `alt` em todas as imagens, ARIA nos componentes interativos.

---

## PARTE 4 — PROMPT FINAL PARA O CLAUDE CODE

> Copie **todo o bloco abaixo** e cole no Claude Code (de preferência dentro de uma pasta vazia do projeto). Ele foi escrito para gerar o projeto completo, pronto para `git push` na Netlify.

---

````markdown
# TAREFA: Construir o site institucional completo da "Casstech Jandaia"

Você é um engenheiro front-end sênior especialista em Astro, Tailwind CSS, SEO técnico e performance (Core Web Vitals). Construa, do zero, um site institucional de alta conversão para uma assistência técnica de informática, pronto para deploy na Netlify.

## STACK OBRIGATÓRIA
- **Astro** (última versão, output estático `static`).
- **Tailwind CSS** (via `@astrojs/tailwind`), configuração dark-first.
- **@astrojs/sitemap** para sitemap automático.
- **Decap CMS** em `/public/admin` (config.yml com Git Gateway) para painel de edição de conteúdo.
- **astro-icon** ou **lucide-astro** para ícones (base Lucide).
- Fontes via `@fontsource` (Space Grotesk + Inter) — self-hosted, sem chamada externa que atrase o LCP.
- Zero JavaScript desnecessário: use ilhas do Astro apenas onde houver interação (menu mobile, acordeão FAQ, botões flutuantes).
- Conteúdo (serviços, FAQ, cidades, posts) em arquivos de **Content Collections** (Markdown/JSON) para ser editável pelo CMS.

## DADOS REAIS DA EMPRESA (use exatamente)
- Nome: **Casstech Jandaia**
- Segmento: Assistência técnica de informática e soluções de TI.
- Localização: **Jandaia de Goiás – GO** e cidades vizinhas.
- WhatsApp: **(64) 9 9513-5055** → link `https://wa.me/5564995135055?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento`
- Instagram: **@casstech.jandaia** → `https://instagram.com/casstech.jandaia`
- Domínio: `https://www.casstechjandaia.com.br`

## PALETA E DESIGN (tokens no tailwind.config)
- bg-900 #05070D, bg-800 #0A0E1A, surface #111827, border #1E2A44
- primary #00E5FF, primary-600 #00B8D4, accent #3B82F6, glow #22D3EE
- whatsapp #25D366, instagram #E1306C
- text-100 #F8FAFC, text-300 #CBD5E1, text-500 #94A3B8
- Tema: dark-first, glassmorphism, bordas gradiente no hover, halos radiais ciano no hero.
- Títulos: Space Grotesk; Corpo: Inter. Escala fluida com clamp().
- Estética "engenharia futurista": ícones de traço fino com glow ciano no hover, micro-animações on-scroll respeitando prefers-reduced-motion.

## ESTRUTURA DE PÁGINAS (crie todas)
- `/` Home (landing de conversão — ver seções abaixo)
- `/servicos` hub de serviços
- `/servicos/manutencao-placa-mae-notebook`
- `/servicos/upgrade-ssd-e-memoria`
- `/servicos/gerenciamento-termico`
- `/servicos/recuperacao-de-dados`
- `/servicos/formatacao-e-instalacao`
- `/servicos/redes-e-configuracao`
- `/empresas` (Soluções Corporativas B2B)
- `/sobre`
- `/area-de-atuacao`
- `/blog` e `/blog/[slug]` (com 2 posts de exemplo)
- `/contato`
- `/404`

## SEÇÕES DA HOME (nesta ordem)
1. Header fixo com backdrop-blur: logo "Casstech" (wordmark com ícone de cpu/glow), navegação (Serviços, Empresas, Área de Atuação, Blog, Sobre, Contato) e botão "Falar no WhatsApp".
2. Hero: headline de autoridade (ex.: "Tecnologia que resolve. Confiança que fica."), subheadline citando Jandaia e região, 2 CTAs (WhatsApp primário + "Ver serviços"). Fundo escuro com grid tech e glow ciano animado sutil.
3. Barra de confiança: 4 badges de vidro (Orçamento sem compromisso, Atendimento em Jandaia e região, Garantia no serviço, Diagnóstico especializado).
4. Serviços de Alta Complexidade: grid responsivo de cards com ícones Lucide (placa-mãe=cpu, SSD=hard-drive, térmico=thermometer, recuperação=database, formatação=refresh-cw). Cada card linka para sua página.
5. Bloco B2B destacado: "Mantenha a TI da sua empresa sempre no ar" — contratos mensais de manutenção, gestão de chamados técnicos, para comércio local e órgãos públicos. CTA "Falar sobre contrato".
6. Diferenciais (Por que a Casstech): 3–4 pilares com ícones.
7. Processo em 4 passos: Chamou no WhatsApp → Diagnóstico → Orçamento transparente → Conserto com garantia.
8. Prova social: 3 depoimentos + selo de avaliações.
9. Área de atuação: Jandaia de Goiás + lista de cidades vizinhas (reforço SEO local).
10. FAQ em acordeão (5–6 perguntas) com Schema FAQPage.
11. CTA final full-width com fundo tech e botão grande de WhatsApp.
12. Footer: NAP completo, redes sociais, horário, navegação, © ano.

## ELEMENTOS GLOBAIS (em todas as páginas via layout)
- Botão flutuante do WhatsApp (canto inf. direito, verde, pulsante, aria-label).
- Botão flutuante do Instagram (empilhado acima do WhatsApp).
- No mobile, barra CTA sticky na base ("Orçamento no WhatsApp").
- Menu mobile (hambúrguer) como ilha interativa.

## SEO — REQUISITO CENTRAL (implemente rigorosamente)
- Componente `<SEO>` reutilizável no `<head>`: title único, meta description, canonical, Open Graph + Twitter Card, `lang="pt-BR"`.
- JSON-LD:
  - `LocalBusiness` global (name, telephone, address em Jandaia de Goiás/GO, geo, openingHours, sameAs=[instagram], priceRange).
  - `Service` em cada página de serviço.
  - `FAQPage` na home.
  - `BreadcrumbList` nas páginas internas.
- `sitemap.xml` e `robots.txt` gerados automaticamente.
- Imagens: componente `<Image>` do Astro em AVIF/WebP, `loading="lazy"`, `alt` descritivo com palavra-chave local.
- Títulos otimizados por página. Ex. da home: "Casstech Jandaia | Assistência Técnica de Notebook e TI em Jandaia de Goiás".
- Palavras-chave alvo: assistência técnica notebook Jandaia, conserto placa-mãe Jandaia de Goiás, recuperação de dados, upgrade SSD, manutenção de TI para empresas.
- Meta de performance: Lighthouse ≥ 95 em Performance, SEO, Acessibilidade e Best Practices. Sem JS que bloqueie render; fontes self-hosted com `font-display: swap`.

## FORMULÁRIO DE CONTATO
- Em `/contato`, formulário Netlify Forms (`data-netlify="true"`) com nome, telefone/WhatsApp, cidade, mensagem, honeypot anti-spam. Além do form, botão direto de WhatsApp e mapa incorporado de Jandaia de Goiás.

## CMS (painel de edição)
- Configurar Decap CMS em `/public/admin/index.html` + `config.yml`, com coleções para: Serviços, Depoimentos, FAQ, Cidades atendidas e Blog. Backend git-gateway (Netlify Identity). Documentar no README como habilitar o Identity na Netlify.

## ENTREGÁVEIS
- Projeto Astro completo e funcional (`npm install && npm run build` sem erros).
- `netlify.toml` configurado (build command `npm run build`, publish `dist`).
- `README.md` com: como rodar local, como fazer deploy na Netlify (conectar repo Git), como ativar Netlify Identity + Git Gateway para o CMS, e onde editar cada conteúdo.
- Conteúdo em português (pt-BR), textos persuasivos e reais para o segmento (sem "lorem ipsum").
- Código limpo, componentizado, comentado onde necessário, acessível (ARIA, foco, contraste AA).

Comece criando a estrutura do projeto e o tailwind.config com os tokens, depois o layout base com SEO + botões flutuantes, e então construa a Home seção por seção, seguido das demais páginas. Ao final, rode o build e liste o que foi criado.
````

---

### Variante alternativa (se você insistir em Next.js)

Caso opte por Next.js em vez de Astro, troque no prompt acima:
- "Astro" → **Next.js 14 (App Router) com `output: 'export'` (site 100% estático)**.
- "Content Collections" → **arquivos MDX/JSON + `next-mdx-remote`**.
- "@astrojs/sitemap" → **`next-sitemap`**.
- "Decap CMS" → **TinaCMS** (painel visual compatível com Next).
- Componente `<Image>` do Astro → **`next/image`** (com `unoptimized: true` no export estático, servindo AVIF/WebP pré-gerados).
- Mantenha **todos** os requisitos de SEO, design e conversão idênticos.

> Recomendação mantida: **Astro** entrega Core Web Vitals superiores para este tipo de site e é a rota que mais te ajuda a dominar o SEO local de Jandaia.

---

## PARTE 5 — Checklist pós-lançamento (rápido)

- [ ] Conectar o repositório Git à Netlify e apontar o domínio `casstechjandaia.com.br`.
- [ ] Ativar **Netlify Identity + Git Gateway** para o painel `/admin` funcionar.
- [ ] Criar/atualizar o **Google Business Profile** com NAP idêntico ao do site.
- [ ] Enviar o `sitemap.xml` no **Google Search Console**.
- [ ] Confirmar o número de WhatsApp e o @ do Instagram nos botões.
- [ ] Rodar o **PageSpeed Insights** e validar Lighthouse ≥ 95.
- [ ] Publicar 2–3 posts locais no blog nas primeiras semanas (cauda longa de SEO).
