import { motion } from 'motion/react';
import { MessageSquare, Music, Gift } from 'lucide-react';
import imgGuiaConversao from '../assets/images/guia_conversao_isolated_1782655177846.jpg';
import imgInglesComMusica from '../assets/images/ingles_musica_isolated_1782655192837.jpg';

export default function Bonuses() {
  const bonuses = [
    {
      title: "Guia de Conversação em Inglês",
      value: "R$ 47,00",
      description: "Diálogos simples e práticos para destravar a fala e estimular a conversação activa das crianças desde o primeiro dia.",
      icon: MessageSquare,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-100",
      image: imgGuiaConversao,
      imgClass: "h-full w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105",
    },
    {
      title: "Inglês com Música",
      value: "R$ 20,00",
      description: "Atividades rítmicas e cantigas selecionadas para treinar a fala, o vocabulário e a pronúncia de forma lúdica.",
      icon: Music,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-50 border-indigo-100",
      image: imgInglesComMusica,
      imgClass: "h-full w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105",
    }
  ];

  return (
    <section id="bonus" className="pt-16 pb-10 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] font-display tracking-tight mb-2">
            Seus Bônus Especiais e Gratuitos
          </h2>
        </div>

        {/* Bonuses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <motion.div
                key={bonus.title}
                className="p-6 bg-white border-2 border-blue-400 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:scale-[1.01] hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <div>
                  {bonus.image ? (
                    <div className="flex items-center justify-center mb-5 h-72 sm:h-80 w-full mx-auto">
                      <img 
                        src={bonus.image} 
                        alt={bonus.title} 
                        className={bonus.imgClass}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center mb-5">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${bonus.iconBg}`}>
                        <IconComponent className={`w-6 h-6 ${bonus.iconColor}`} />
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-slate-900 font-extrabold text-lg leading-tight mb-2 font-display">
                      {bonus.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-[13px] leading-loose mt-4">
                      {bonus.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                      De:
                    </span>
                    <span className="text-base text-slate-500 font-extrabold line-through decoration-slate-500/60 decoration-2">
                      {bonus.value}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-0.5">
                      Por Apenas:
                    </span>
                    <span className="text-sm font-black text-white bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1.5 rounded-xl shadow-sm border border-emerald-400 uppercase tracking-widest text-center">
                      GRÁTIS
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
