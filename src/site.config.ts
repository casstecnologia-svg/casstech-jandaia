// Configuracao central da Casstech Jandaia.
// Edite aqui os dados de contato e navegacao usados em todo o site.

export const site = {
  name: 'Casstech Jandaia',
  legalName: 'Casstech Jandaia - Assistência Técnica e Soluções de TI',
  shortName: 'Casstech',
  domain: 'https://www.casstechjandaia.com.br',
  description:
    'Assistência técnica especializada em notebooks, recuperação de dados, upgrades e soluções de TI para empresas em Jandaia de Goiás e região. Também desenvolvemos aplicativos e sistemas sob medida.',
  city: 'Jandaia de Goiás',
  state: 'GO',
  region: 'Jandaia de Goiás e região',
  priceRange: '$$',
  // Contato
  phoneDisplay: '(64) 9 9313-5055',
  phoneRaw: '5564993135055',
  whatsappMessage: 'Olá, vim pelo site e quero um orçamento com a Casstech.',
  instagramHandle: '@casstech.jandaia',
  instagramUrl: 'https://instagram.com/casstech.jandaia',
  email: 'casstecnologia@gmail.com',
  // Horario
  openingHours: 'Segunda a Sexta, 08h às 18h - Sábado, 08h às 12h',
  // Geo aproximado de Jandaia de Goias (ajuste se necessario)
  geo: { latitude: -17.1281, longitude: -50.1439 },
};

export const whatsappLink = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const nav = [
  { label: 'Serviços', href: '/servicos' },
  { label: 'Desenvolvimento', href: '/servicos/desenvolvimento-de-aplicativos-e-sistemas' },
  { label: 'Empresas', href: '/empresas' },
  { label: 'Área de Atuação', href: '/area-de-atuacao' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

// Cidades atendidas (SEO local)
export const cidades = [
  'Jandaia de Goiás',
  'Acreúna',
  'Palmeiras de Goiás',
  'Cezarina',
  'Varjão',
  'Edealina',
  'Edéia',
  'Indiara',
  'Paraúna',
  'São João da Paraúna',
];
