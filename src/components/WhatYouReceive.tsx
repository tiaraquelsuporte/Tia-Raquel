import { motion } from 'motion/react';

interface WhatYouReceiveProps {
  onCtaClick?: () => void;
}

export default function WhatYouReceive({ onCtaClick }: WhatYouReceiveProps) {
  const coreDeliverables = [
    {
      title: "+500 Dinâmicas de Inglês Prontas Para Aplicar",
      description: "Atividades práticas, divertidas e prontas para imprimir que ajudam crianças a aprender inglês de forma natural e envolvente.",
      icon: "🎯",
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      title: "Aprendizado 100% Longe das Telas",
      description: "Menos tempo em dispositivos e mais interação, movimento e participação activa durante as atividades.",
      icon: "📵",
      iconBg: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Material Organizado e Fácil de Utilizar",
      description: "Encontre rapidamente a dinâmica ideal para cada momento da aula sem perder horas planejando.",
      icon: "📂",
      iconBg: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Economize Horas de Planejamento",
      description: "Escolha a atividade, imprima e aplique. Tudo já está pronto para ser utilizado.",
      icon: "⏱️",
      iconBg: "bg-amber-50 text-amber-600",
    },
    {
      title: "Ideal Para Inglês Infantil",
      description: "Dinâmicas desenvolvidas para estimular a participação das crianças através de brincadeiras, jogos e interação.",
      icon: "🎈",
      iconBg: "bg-rose-50 text-rose-600",
    },
    {
      title: "Acesso Imediato",
      description: "Receba o material completo logo após a confirmação do pagamento.",
      icon: "⚡",
      iconBg: "bg-violet-50 text-violet-600",
    }
  ];

  return (
    <section id="conteudo" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background radial soft light flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] font-display tracking-tight mb-4">
            O Que Você Recebe ao Garantir Hoje
          </h2>
        </div>

        {/* 6 Core Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreDeliverables.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 bg-white border border-slate-100/80 rounded-2xl shadow-xs hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-2xl mb-4 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-slate-900 font-extrabold text-[15px] sm:text-[16px] leading-tight mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
