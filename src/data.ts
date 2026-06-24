import { HeadlineOption, SubheadlineOption, CtaOption, Benefit, WhatYouReceiveItem, Testimonial, FAQItem, SecondaryBenefit } from './types';

export const headlines: HeadlineOption[] = [
  {
    id: 1,
    text: "+500 dinâmicas prontas para ensinar inglês de forma divertida e eficiente.",
    highlightedParts: [
      { text: "+500 dinâmicas prontas ", color: "amarelo" },
      { text: "para ensinar inglês de forma divertida e eficiente.", color: "normal" }
    ],
    neuromarketingFocus: "Foco no volume de dinâmicas prontas e na eficiência prática direta."
  },
  {
    id: 2,
    text: "500+ Atividades para Ensinar Inglês Brincando",
    highlightedParts: [
      { text: "500+ Atividades", color: "amarelo" },
      { text: " para Ensinar ", color: "normal" },
      { text: "Inglês Brincando", color: "verde" }
    ],
    neuromarketingFocus: "Gatilho de ultra-valor numérico e aprendizado lúdico."
  },
  {
    id: 3,
    text: "Seu Filho Pode Falar Inglês Todos os Dias",
    highlightedParts: [
      { text: "Seu Filho Pode ", color: "normal" },
      { text: "Falar Inglês", color: "amarelo" },
      { text: " ", color: "normal" },
      { text: "Todos os Dias", color: "verde" }
    ],
    neuromarketingFocus: "Consistência e aprendizado diário sem estresse."
  },
  {
    id: 4,
    text: "O Método Prático para Ensinar Inglês sem Estresse",
    highlightedParts: [
      { text: "O Método Prático para ", color: "normal" },
      { text: "Ensinar Inglês", color: "amarelo" },
      { text: " ", color: "normal" },
      { text: "sem Estresse", color: "verde" }
    ],
    neuromarketingFocus: "Evita a barreira psicológica de desgaste dos pais."
  },
  {
    id: 5,
    text: "Aprender Inglês Nunca Foi Tão Divertido e Fácil",
    highlightedParts: [
      { text: "Aprender Inglês", color: "amarelo" },
      { text: " Nunca Foi Tão ", color: "normal" },
      { text: "Divertido e Fácil", color: "verde" }
    ],
    neuromarketingFocus: "Foco na simplicidade e diversão."
  },
  {
    id: 6,
    text: "Desenvolva o Bilinguismo Infantil de Forma 100% Natural",
    highlightedParts: [
      { text: "Desenvolva o ", color: "normal" },
      { text: "Bilinguismo Infantil", color: "amarelo" },
      { text: " de Forma ", color: "normal" },
      { text: "100% Natural", color: "verde" }
    ],
    neuromarketingFocus: "Apelo neurocientífico e progresso orgânico."
  },
  {
    id: 7,
    text: "Estimule a Atenção do Seu Filho com Inglês Prático",
    highlightedParts: [
      { text: "Estimule a Atenção", color: "amarelo" },
      { text: " do Seu Filho com ", color: "normal" },
      { text: "Inglês Prático", color: "verde" }
    ],
    neuromarketingFocus: "Valorização da concentração e foco ativo."
  },
  {
    id: 8,
    text: "Ensine Inglês sem Perder Horas Planejando",
    highlightedParts: [
      { text: "Ensine Inglês", color: "amarelo" },
      { text: " sem Perder ", color: "normal" },
      { text: "Horas Planejando", color: "verde" }
    ],
    neuromarketingFocus: "Solução prática de tempo."
  },
  {
    id: 9,
    text: "Ensine Inglês em Casa Sem Precisar Saber Inglês",
    highlightedParts: [
      { text: "Ensine Inglês em Casa", color: "amarelo" },
      { text: " ", color: "normal" },
      { text: "Sem Precisar Saber", color: "verde" }
    ],
    neuromarketingFocus: "Quebra de barreira de incompetência do tutor."
  },
  {
    id: 10,
    text: "Atividades para Prender o Foco de Crianças com TDAH",
    highlightedParts: [
      { text: "Prender o Foco", color: "amarelo" },
      { text: " de ", color: "normal" },
      { text: "Crianças com TDAH", color: "verde" }
    ],
    neuromarketingFocus: "Inclusão e facilitação pedagógica direcionada."
  },
  {
    id: 11,
    text: "Transforme Brincadeiras Simples em Fluência de Inglês",
    highlightedParts: [
      { text: "Brincadeiras Simples", color: "amarelo" },
      { text: " em ", color: "normal" },
      { text: "Fluência", color: "verde" }
    ],
    neuromarketingFocus: "Transformação do tempo comum em bilinguismo."
  },
  {
    id: 12,
    text: "O Guia Definitivo de Inglês para a Primeira Infância",
    highlightedParts: [
      { text: "Guia Definitivo", color: "amarelo" },
      { text: " de Inglês para a ", color: "normal" },
      { text: "Primeira Infância", color: "verde" }
    ],
    neuromarketingFocus: "Autoridade absoluta e posicionamento de mercado."
  },
  {
    id: 13,
    text: "Fluência Brincando: Inglês Divertido 15 Minutos por Dia",
    highlightedParts: [
      { text: "Fluência Brincando", color: "amarelo" },
      { text: " : Inglês Divertido ", color: "normal" },
      { text: "15 Minutos", color: "verde" }
    ],
    neuromarketingFocus: "Combate objeção de falta de tempo com eficiência."
  },
  {
    id: 14,
    text: "Liberte o Potencial Bilíngue do Seu Filho Hoje Mesmo",
    highlightedParts: [
      { text: "Potencial Bilíngue", color: "amarelo" },
      { text: " do Seu Filho ", color: "normal" },
      { text: "Hoje Mesmo", color: "verde" }
    ],
    neuromarketingFocus: "Imediatismo e despertar de inteligência natural."
  },
  {
    id: 15,
    text: "Como Alfabetizar em Inglês Brincando de Forma Leve",
    highlightedParts: [
      { text: "Alfabetizar em Inglês", color: "amarelo" },
      { text: " Brincando de ", color: "normal" },
      { text: "Forma Leve", color: "verde" }
    ],
    neuromarketingFocus: "Naturalidade no desenvolvimento da segunda língua."
  }
];

export const subheadlines: SubheadlineOption[] = [
  {
    id: 1,
    text: "Mais de 500 atividades prontas para desenvolver o inglês infantil de forma divertida, natural e 100% longe das telas.",
    focus: "Foco em Aprendizado Ativo Sem Telas"
  },
  {
    id: 2,
    text: "Desenvolva o bilinguismo de forma natural com dinâmicas simples que você pode aplicar hoje mesmo.",
    focus: "Maternidade e Praticidade"
  },
  {
    id: 3,
    text: "Atividades lúdicas de alta concentração, perfeitas para prender o foco e engajar crianças com ou sem TDAH.",
    focus: "Concentração Ativa e Inclusão"
  },
  {
    id: 4,
    text: "Tudo pronto para baixar, imprimir e aplicar. Perfeito para pais ensinarem em casa e professores em escolas ou clínicas.",
    focus: "Praticidade de Uso Imediato"
  },
  {
    id: 5,
    text: "Um acervo completo de dinâmicas divertidas com entrega instantânea no seu e-mail para transformar a rotina do seu filho.",
    focus: "Gatilho de Imediatismo Digital"
  },
  {
    id: 6,
    text: "Acelere a fala e o vocabulário do seu pequeno na fase em que o cérebro dele mais absorve novos idiomas.",
    focus: "Estágio de Neuroplasticidade"
  },
  {
    id: 7,
    text: "Brincadeiras divertidas, flashcards e tabuleiros que ensinam inglês sem parecer estudo ou obrigação cansativa.",
    focus: "Conforto Cognitivo Sem Estudo"
  },
  {
    id: 8,
    text: "Substitua o celular por momentos inesquecíveis em família com o único material focado em diversão ativa.",
    focus: "Troca Saudável por Conexão"
  },
  {
    id: 9,
    text: "Insira o inglês no dia a dia do seu filho de forma espontânea, sem precisar que você seja fluente no idioma.",
    focus: "Facilitação para Pais Não Fluentes"
  },
  {
    id: 10,
    text: "Aprovado por mães e educadores: o passo a passo prático para destravar o aprendizado bilíngue na primeira infância.",
    focus: "Prova Social e Validação Didática"
  },
  {
    id: 11,
    text: "Abra as portas do futuro para seu filho com dinâmicas fáceis de 10 a 15 minutos que fixam o conteúdo naturalmente.",
    focus: "Eficiência de Tempo com Resultado"
  },
  {
    id: 12,
    text: "Aprender inglês nunca foi tão prático: material 100% digital estruturado para uma rotina leve e divertida.",
    focus: "Convenência e Leveza de Entrega"
  },
  {
    id: 13,
    text: "O fim das aulas de inglês cansativas. Brincadeiras lúdicas e divertidas que engajam de verdade.",
    focus: "Quebra de Metodologias Antigas"
  },
  {
    id: 14,
    text: "O compilado ideal para clínicas e consultórios psicopedagógicos trabalharem o foco ativo e linguagem de forma lúdica.",
    focus: "Foco Clínico e Pedagógico"
  },
  {
    id: 15,
    text: "Acesso vitalício ao maior acervo infantil de inglês prático. Baixe, imprima e transforme a rotina hoje.",
    focus: "Escalabilidade de Uso e Valor Descontado"
  }
];

export const ctas: CtaOption[] = [
  { id: 1, text: "🚀 QUERO AS 500 ATIVIDADES AGORA", urgencyLevel: "alta" },
  { id: 2, text: "🚀 LIBERAR MEU ACESSO IMEDIATO", urgencyLevel: "alta" },
  { id: 3, text: "🚀 COMEÇAR A ENSINAR INGLÊS", urgencyLevel: "foco-benefício" },
  { id: 4, text: "🚀 GARANTIR MEU ACESSO IMEDIATO", urgencyLevel: "alta" },
  { id: 5, text: "🚀 QUERO MEU FILHO FALANDO INGLÊS", urgencyLevel: "foco-benefício" },
  { id: 6, text: "🚀 ATIVAR MEU DESCONTO EXCLUSIVO", urgencyLevel: "alta" },
  { id: 7, text: "🚀 SIM! QUERO ENSINAR BRINCANDO", urgencyLevel: "foco-benefício" },
  { id: 8, text: "🚀 COMEÇAR HOJE MESMO EM CASA", urgencyLevel: "foco-benefício" },
  { id: 9, text: "🚀 COMPRAR AGORA COM COMPRA SEGURA", urgencyLevel: "média" },
  { id: 10, text: "🚀 QUERO O ACESSO COMPLETO", urgencyLevel: "alta" },
  { id: 11, text: "🚀 DESTRAVAR O INGLÊS DO MEU FILHO", urgencyLevel: "foco-benefício" },
  { id: 12, text: "🚀 RECEBER O MATERIAL NO MEU E-MAIL", urgencyLevel: "alta" },
  { id: 13, text: "🚀 APRENDA INGLÊS BRINCANDO HOJE", urgencyLevel: "foco-benefício" },
  { id: 14, text: "🚀 QUERO ACESSO VITALÍCIO AGORA", urgencyLevel: "alta" },
  { id: 15, text: "🚀 ADQUIRIR MATERIAL COM DESCONTO", urgencyLevel: "alta" },
  { id: 16, text: "🚀 ENTRAR PARA O EXPLORAÇÃO INGLÊS", urgencyLevel: "foco-benefício" },
  { id: 17, text: "🚀 EXPERIMENTAR JÁ SEM RISCO ALGUM", urgencyLevel: "média" },
  { id: 18, text: "🚀 MAIS DE 500 ATIVIDADES JÁ", urgencyLevel: "alta" },
  { id: 19, text: "🚀 QUERO ALFABETIZAR BRINCANDO", urgencyLevel: "foco-benefício" },
  { id: 20, text: "🚀 GARANTIR MEU PDF IMEDIATAMENTE", urgencyLevel: "alta" }
];

export const microBenefits: string[] = [
  "🧠 Desenvolve atenção e vocabulário naturalmente",
  "🎯 Com ou sem TDAH: alta concentração",
  "🏠 Ideal para casa, escola ou clínicas",
  "🚀 Aplicação imediata e fácil sem planejamento",
  "🖨️ Pronto para imprimir e usar onde quiser",
  "⚡ Acesso digital imediato em 1 minuto",
  "🔑 Material didático completo e exclusivo",
  "📱 100% livre de telas e celulares nocivos",
  "🎓 Desenvolvido por especialistas em bilinguismo precoce",
  "⏳ Apenas 15 minutos de diversão por dia",
  "🔑 Acesso vitalício com todas as futuras atualizações",
  "🎁 Bônus exclusivos inclusos hoje sem custo extra",
  "✅ Sem precisar saber inglês para ensinar",
  "🌟 Mais de 5.000 crianças já transformadas",
  "🛡️ Garantia incondicional de 7 dias protegida",
  "💬 Suporte exclusivo para tirar todas as dúvidas",
  "💰 Preço promocional único com desconto imediato",
  "📈 Resultados visíveis nas primeiras semanas de uso",
  "🧩 Jogos, tabuleiros, flashcards e dinâmicas ativas",
  "🎉 Transforme momentos comuns em aprendizado bilíngue"
];

export const quickProofs: string[] = [
  "⭐⭐⭐⭐⭐ Mais de 5.000 famílias transformadas",
  "⭐ Mais de 500 atividades infantis prontas",
  "✔ Entrega digital imediata em 1 minuto",
  "✔ Método validado de fácil aplicação",
  "🛡️ Compra 100% segura com garantia de 7 dias",
  "💬 Acesso vitalício com atualizações grátis",
  "✔ Ideal para ensinar de forma leve e descomplicada",
  "🎯 Estimula o foco ativo de crianças com ou sem TDAH",
  "📱 100% livre de telas: diversão segura",
  "⭐ Ideal para ensinar em casa sem saber inglês"
];

export const benefits: Benefit[] = [
  {
    iconName: "Sparkles",
    title: "Inglês através do brincar",
    description: "Método 100% lúdico focado em canções, mímicas, brincadeiras físicas e comandos que ensinam inglês sem parecer estudo."
  },
  {
    iconName: "SmartphoneOff",
    title: "Redução ativa de telas",
    description: "Proporcione atividades físicas e sensoriais divertidas que afastam seu filho do celular, gerando tempo de qualidade real."
  },
  {
    iconName: "Brain",
    title: "Desenvolvimento cognitivo",
    description: "Estimula conexões neurais na fase mais importante da neuroplasticidade, expandindo a flexibilidade mental e memória."
  },
  {
    iconName: "Activity",
    title: "Coordenação motora",
    description: "Brincadeiras e dinâmicas corporais ativas, essenciais para o engajamento e desenvolvimento de alunos do 1º ano de escola ao 5º ano de escola."
  },
  {
    iconName: "Focus",
    title: "Aumento da concentração",
    description: "Dinâmicas com começo, meio e fim projetadas para prender o foco e canalizar a energia de pequenos ativos que têm muita energia."
  },
  {
    iconName: "HeartHandshake",
    title: "Interação familiar afetuosa",
    description: "Crie memórias afetivas inesquecíveis enquanto você e seu filho se divertem e aprendem juntos no aconchego de casa."
  }
];

export const whatYouReceiveItems: WhatYouReceiveItem[] = [
  {
    id: 1,
    title: "📅 Economize Horas de Planejamento",
    features: [
      "Tudo pronto em 1 minuto: abra, imprima e aplique",
      "Passo a passo lúdico e mastigado em português",
      "Diga adeus a preparar ou elaborar planos de aula exaustivos"
    ],
    badge: "Praticidade Total",
    footerLabel: "Sem Perder Tempo"
  },
  {
    id: 2,
    title: "🖨️ Atividades Prontas Para Imprimir",
    features: [
      "Material digital em PDF de alta resolução",
      "Mais de 500 dinâmicas, tabuleiros e cartões ilustrados",
      "Economia real de tempo e dinheiro com materiais extras"
    ],
    badge: "Alta Resolução",
    footerLabel: "Baixe e Imprima"
  },
  {
    id: 3,
    title: "🎈 Crianças Aprendem Brincando",
    features: [
      "Método ativo lúdico livre de decorebas ou pressão",
      "Engajamento físico real e controle saudável de telas",
      "Foco cognitivo ativo focado em diversão saudável"
    ],
    badge: "100% Divertido",
    footerLabel: "Aprendizado Natural"
  }
];

export const secondaryBenefitsList: SecondaryBenefit[] = [
  {
    id: 1,
    title: "Vocabulário & Pronúncia",
    description: "Estímulo fonético com passo a passo em português, facilitando mesmo para quem não domina inglês.",
    icon: "🗣️"
  },
  {
    id: 4,
    title: "Acesso Digital Instantâneo",
    description: "Entrega automática em menos de 1 minuto em seu e-mail após a validação da compra.",
    icon: "⚡"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "Mãe do Guilherme",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    text: "Meu filho é muito elétrico e não parava quieto. Com as dinâmicas ele foca de verdade e já fala várias palavras completas!",
    rating: 5,
    result: "Foco triplicado e fala destravada em 3 semanas"
  },
  {
    id: 2,
    name: "Ricardo Silva",
    role: "Pai da Luiza",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    text: "Conseguimos tirar o tablet e o celular da rotina dela sem choro. Brincamos em família e ela aprende brincando todos os dias.",
    rating: 5,
    result: "Substituição total das telas por brincadeiras"
  },
  {
    id: 3,
    name: "Dra. Letícia Brandão",
    role: "Neuropediatra",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    text: "Altamente recomendado para a neuroplasticidade infantil. O material trabalha atenção, coordenação motora e fala de forma leve.",
    rating: 5,
    result: "Validação médica e científica do bilinguismo"
  },
  {
    id: 4,
    name: "Patrícia Alencar",
    role: "Professora de Educação Infantil",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    text: "Aplico as atividades com meus alunos na escola. Eles amam os flashcards e participam ativamente!",
    rating: 5,
    result: "Excelente recurso pedagógico e lúdico"
  },
  {
    id: 5,
    name: "Thiago Mendes",
    role: "Pai do Arthur",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    text: "Eu não falo inglês e achei que não saberia ensinar, mas o passo a passo em português é muito simples e fácil de aplicar.",
    rating: 5,
    result: "Pais ensinando em casa sem precisar falar inglês"
  },
  {
    id: 6,
    name: "Carla Rezende",
    role: "Mãe da Sofia",
    avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150",
    text: "A melhor compra que fiz para minha filha. O material digital é lindo, prático e as brincadeiras duram menos de 15 minutos.",
    rating: 5,
    result: "Ideal para desenvolvimento ativo e natural"
  },
  {
    id: 7,
    name: "Dr. Hugo Vasconcelos",
    role: "Psicopedagogo",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    text: "Aprovado para crianças com ou sem TDAH. As dinâmicas de movimento ativo são ótimas para manter o foco cognitivo no topo.",
    rating: 5,
    result: "Aprovado para foco ativo e crianças com TDAH"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Como vou receber o material?",
    answer: "Após a confirmação do pagamento, você recebe acesso imediato ao material completo diretamente no seu e-mail."
  },
  {
    id: 2,
    question: "Preciso saber inglês fluentemente para utilizar?",
    answer: "Não. As atividades já estão organizadas para facilitar a aplicação e o aprendizado."
  },
  {
    id: 3,
    question: "As atividades exigem muito preparo?",
    answer: "Não. O material foi criado para economizar tempo. Basta escolher a dinâmica, imprimir e aplicar."
  },
  {
    id: 4,
    question: "O material é indicado para professores?",
    answer: "Sim. É ideal para professores, reforço escolar, aulas particulares e também para pais que desejam complementar o aprendizado."
  },
  {
    id: 5,
    question: "As crianças realmente se envolvem nas atividades?",
    answer: "Sim. As dinâmicas utilizam brincadeiras, interação e participação ativa para tornar o aprendizado mais divertido."
  },
  {
    id: 6,
    question: "O pagamento é único?",
    answer: "Sim. Você paga apenas uma vez e recebe acesso completo ao material."
  },
  {
    id: 7,
    question: "Tenho garantia?",
    answer: "Sim. Sua compra é protegida por garantia para que você possa adquirir o material com total segurança."
  }
];
