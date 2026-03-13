export const SITE_CONFIG = {
  name: "Alê Lopes",
  title: "Personal Trainer Online",
  whatsapp: "https://wa.me/5511948314280?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20SlimFit28.",
  instagram: "https://www.instagram.com/alepersonal_/",
  youtube: "https://www.youtube.com/@alelopespersonaltrainer9046",
  email: "contato@alelopes.com.br",
  address: "Av. Paulista - Baixo Augusta, São Paulo - SP",
  phone: "(11) 94831-4280",
};

export const NAVIGATION = [
  { name: "Início", href: "#" },
  { name: "Método", href: "#metodo" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Planos", href: "#planos" },
  { name: "Sobre", href: "#sobre" },
  { name: "FAQ", href: "#faq" },
];

export const TESTIMONIALS = [
  {
    text: "Com o Alê, eu aprendi que emagrecer não é só perder peso... é se fortalecer por dentro e por fora. E ele me ajudou nisso tudo, com amor e muita técnica.",
    author: "Gaby Djubi"
  },
  {
    text: "Ótimo profissional, super competente. Com ele tem resultado de verdade. Você é DEMAIS Alê!",
    author: "Poliana Ketlyn"
  },
  {
    text: "Eu já tinha desistido. Mas o Alê me fez tentar mais uma vez — e dessa vez, funcionou. Porque ele entende o que a gente sente, ele não julga, ele transforma.",
    author: "Suh Caroline"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Preciso ir à academia?",
    answer: "Não! Os treinos são totalmente adaptáveis. Você pode treinar em casa, no parque ou na academia, de acordo com a sua realidade e os equipamentos que tiver disponível."
  },
  {
    question: "Quanto tempo duram os treinos?",
    answer: "Os treinos são focados em eficiência. Levam em média de 25 a 45 minutos, ideais para serem encaixados em rotinas corridas."
  },
  {
    question: "Como funciona o acompanhamento?",
    answer: "O acompanhamento é feito via WhatsApp e através da nossa plataforma exclusiva. Você terá suporte para tirar dúvidas sobre exercícios, postura e motivação."
  },
  {
    question: "Tenho mais de 40 anos, o método serve para mim?",
    answer: "Com certeza! O Método SlimFit28 é especialmente desenhado para mulheres 30+, respeitando o metabolismo e as necessidades específicas dessa fase da vida."
  }
];

export const PRICING_PLANS = [
  {
    name: "Slim Inicial",
    price: "R$ 97/mês",
    desc: "Ideal para começar",
    features: ["Planilha de treinos mensal", "Suporte via App", "Guia de Nutrição Básico"],
    recommended: false
  },
  {
    name: "Vip Diamond",
    price: "R$ 197/mês",
    desc: "O mais escolhido",
    features: ["Treinos Personalizados", "Suporte WhatsApp Prioritário", "Análise de Execução por Vídeo", "Plano Alimentar Estratégico"],
    recommended: true
  },
  {
    name: "Consultoria Premium",
    price: "Consulte",
    desc: "Acompanhamento 1:1",
    features: ["Tudo do VIP", "Videochamada Mensal", "Ajustes Semanais", "Vagas Limitadas"],
    recommended: false
  }
];
