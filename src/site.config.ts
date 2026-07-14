// Configuracao central da Casstech Jandaia.
// Edite aqui os dados de contato e navegacao usados em todo o site.

export const site = {
  name: 'Casstech Jandaia',
  legalName: 'Casstech Jandaia - Assistencia Tecnica e Solucoes de TI',
  shortName: 'Casstech',
  domain: 'https://www.casstechjandaia.com.br',
  description:
    'Assistencia tecnica especializada em notebooks, recuperacao de dados, upgrades e solucoes de TI para empresas em Jandaia de Goias e regiao. Tambem desenvolvemos aplicativos e sistemas sob medida.',
  city: 'Jandaia de Goias',
  state: 'GO',
  region: 'Jandaia de Goias e regiao',
  priceRange: '$$',
  // Contato
  phoneDisplay: '(64) 9 9513-5055',
  phoneRaw: '5564995135055',
  whatsappMessage: 'Ola, vim pelo site e quero um orcamento com a Casstech.',
  instagramHandle: '@casstech.jandaia',
  instagramUrl: 'https://instagram.com/casstech.jandaia',
  email: 'casstecnologia@gmail.com',
  // Horario
  openingHours: 'Segunda a Sexta, 08h as 18h - Sabado, 08h as 12h',
  // Geo aproximado de Jandaia de Goias (ajuste se necessario)
  geo: { latitude: -17.1281, longitude: -50.1439 },
};

export const whatsappLink = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const nav = [
  { label: 'Servicos', href: '/servicos' },
  { label: 'Desenvolvimento', href: '/servicos/desenvolvimento-de-aplicativos-e-sistemas' },
  { label: 'Empresas', href: '/empresas' },
  { label: 'Area de Atuacao', href: '/area-de-atuacao' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

// Cidades atendidas (SEO local)
export const cidades = [
  'Jandaia de Goias',
  'Acrena',
  'Palmeiras de Goias',
  'Cezarina',
  'Varjao',
  'Edealina',
  'Edeia',
  'Indiara',
  'Parauna',
  'Sao Joao da Parauna',
];
