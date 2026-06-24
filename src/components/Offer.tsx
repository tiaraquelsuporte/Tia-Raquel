import { motion } from 'motion/react';
import { Check, Gift, Sparkles, X } from 'lucide-react';
// @ts-ignore
import kitImage from '../assets/images/kit_mockup_premium_1782157527288.jpg';

interface OfferProps {
  onCtaClick?: (plan: 'basic' | 'premium') => void;
}

export default function Offer({ onCtaClick }: OfferProps) {
  const premiumFeatures = [
    "Mais de 500 atividades prontas",
    "Aprendizado infantil longe das telas",
    "Material organizado para imprimir",
    "Economize horas de planejamento",
    "Acesso imediato após a compra",
    "Acesso vitalício",
    "Avaliações e simulados inclusos",
    "Certificados inclusos",
    "Vídeos complementares"
  ];

  const basicFeaturesIn = [
    "Mais de 500 atividades prontas",
    "Aprendizado infantil longe das telas",
    "Material organizado para imprimir",
    "Economize horas de planejamento",
    "Acesso imediato após a compra",
    "Acesso vitalício",
    "Avaliações e simulados inclusos",
    "Certificados inclusos",
    "Vídeos complementares",
    "Material Inglês",
    "Bingo em Inglês",
    "Dinâmicas de Inglês",
    "Pagamento único"
  ];

  const basicFeaturesOut = [
    "Avaliações e Simulados de Inglês",
    "Certificados",
    "Vídeos",
    "Guia de Conversação em Inglês",
    "Inglês com Música",
    "Acesso Vitalício"
  ];

  return (
    <section id="oferta" className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden flex flex-col items-center justify-center select-none">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-12 relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] font-display tracking-tight mb-3">
          Escolha o Plano Ideal para Você
        </h2>
      </div>

      {/* Centered single container for the remaining plan card */}
      <div className="max-w-md mx-auto px-4 w-full relative z-10 flex justify-center">
        
        {/* ==================== PLANO BÁSICO ==================== */}
        <motion.div 
          className="bg-[#0B132B] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-500/30 relative flex flex-col justify-between w-full overflow-hidden ring-2 ring-blue-500/25 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle glowing header stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500" />

          <div>
            {/* Header Title & Subtitle */}
            <div className="mb-6 pt-3 text-center flex flex-col items-center">
              {/* Kit Mockup Image */}
              <div className="flex justify-center mb-6 -mt-2">
                <img 
                  src={kitImage} 
                  alt="Kit 500+ Dinâmicas de Inglês" 
                  className="w-[290px] sm:w-[350px] h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-300 ease-out z-10"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight font-display uppercase mb-4">
                GUIA COMPLETO
              </h3>

              {/* Pricing Section placed below title and above list */}
              <div className="mb-6 pb-6 border-b border-white/[0.08] text-center">
                <div className="text-slate-400 text-xs sm:text-sm font-semibold mb-1.5 line-through">
                  De R$ 37,90
                </div>

                <div className="inline-block px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[9px] uppercase font-black tracking-widest rounded-md mb-2">
                  POR APENAS
                </div>

                {/* Giant Price */}
                <div className="flex items-start justify-center text-white font-sans tracking-tight">
                  <span className="text-xl sm:text-2xl font-black mt-2 mr-0.5">R$</span>
                  <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none drop-shadow-[0_4px_20px_rgba(59,130,246,0.15)]">
                    9
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold mt-2 font-mono">,90</span>
                </div>
              </div>
            </div>

            {/* Basic Inclusions Features List */}
            <ul className="space-y-2.5 mb-6">
              {basicFeaturesIn.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-[13px] leading-snug">
                  {/* Custom round green checkcircle matching Premium style */}
                  <div className="w-4.5 h-4.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-[11px] font-black leading-none">✓</span>
                  </div>
                  <span className="font-semibold text-slate-100">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Exclusive Bonuses List right above the pricing for Basic, styled exactly like Premium */}
            <div className="mb-6 pt-4.5 border-t border-white/[0.08] space-y-2.5">
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5 mb-1.5">
                <Gift className="w-3.5 h-3.5" />
                Bônus Exclusivos Inclusos:
              </span>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-left">
                  <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-200 text-xs font-semibold">Guia de Conversação em Inglês</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-left">
                  <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 text-xs font-semibold">Inglês com Música</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-auto pt-4.5 border-t border-white/[0.08]">
            {/* Primary CTA Button for High Conversion */}
            <motion.button
              onClick={() => onCtaClick?.('basic')}
              className="w-full py-4 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm tracking-widest uppercase shadow-[0_4px_24px_rgba(37,99,235,0.4)] cursor-pointer flex items-center justify-center gap-2 transition-all border border-blue-400/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <span>QUERO O GUIA COMPLETO</span>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
