import { motion } from 'motion/react';
import { Check, Gift } from 'lucide-react';
// @ts-ignore
import kitImage from '../assets/images/kit_mockup_700_white_bg_1783319214377.jpg';

interface OfferProps {
  onCtaClick?: (plan: 'basic' | 'premium') => void;
}

export default function Offer({ onCtaClick }: OfferProps) {
  const basicFeaturesIn = [
    "Mais de 500 atividades prontas",
    "Aprendizado infantil longe das telas",
    "Material organizado para imprimir",
    "Economize horas de planejamento",
    "Acesso imediato após a compra",
    "Certificados inclusos",
    "Material Inglês",
    "Pagamento único"
  ];

  return (
    <section id="oferta" className="pt-6 pb-12 bg-slate-50 text-slate-800 relative overflow-hidden flex flex-col items-center justify-center select-none">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-6 relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] font-display tracking-tight mb-2">
          Plano Ideal para Você
        </h2>
      </div>

      {/* Centered single container for the remaining plan card */}
      <div className="max-w-md mx-auto px-4 w-full relative z-10 flex justify-center">
        
        {/* ==================== PLANO BÁSICO ==================== */}
        <motion.div 
          className="bg-[#0B132B] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-blue-500/30 relative flex flex-col justify-between w-full overflow-hidden ring-2 ring-blue-500/25 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle glowing header stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500" />

          <div>
            {/* Header Title & Subtitle */}
            <div className="mb-4 pt-4 sm:pt-6 text-center flex flex-col items-center">
              {/* Kit Mockup Image */}
              <div className="flex justify-center mb-4 -mt-2">
                <img 
                  src={kitImage} 
                  alt="Kit 700+ Dinâmicas de Inglês" 
                  className="w-[220px] sm:w-[260px] h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-300 ease-out z-10"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight font-display uppercase mb-2">
                GUIA COMPLETO
              </h3>

              {/* Pricing Section placed below title and above list */}
              <div className="mb-4 pb-4 border-b border-white/[0.08] text-center w-full">
                <div className="text-slate-400 text-xs font-semibold mb-1 line-through">
                  De R$ 37,90
                </div>

                <div className="inline-block px-2 py-0.5 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[9px] uppercase font-black tracking-widest rounded mb-1.5">
                  POR APENAS
                </div>

                {/* Giant Price */}
                <div className="flex items-start justify-center text-white font-sans tracking-tight">
                  <span className="text-lg sm:text-xl font-black mt-1.5 mr-0.5">R$</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight leading-none drop-shadow-[0_4px_20px_rgba(59,130,246,0.15)]">
                    19
                  </span>
                  <span className="text-xl sm:text-2xl font-bold mt-1.5 font-mono">,90</span>
                </div>
              </div>
            </div>

            {/* Basic Inclusions Features List */}
            <ul className="space-y-1.5 mb-4">
              {basicFeaturesIn.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-200 text-xs sm:text-[13px] leading-snug">
                  {/* Custom round green checkcircle matching Premium style */}
                  <div className="w-4 h-4 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-[10px] font-black leading-none">✓</span>
                  </div>
                  <span className="font-semibold text-slate-100">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Exclusive Bonuses List right above the pricing for Basic, styled exactly like Premium */}
            <div className="mb-4 pt-3 border-t border-white/[0.08] space-y-1.5">
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5 mb-1">
                <Gift className="w-3.5 h-3.5" />
                Bônus Exclusivos Inclusos:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-left">
                  <Gift className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 text-xs font-semibold">Inglês com Música</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-left">
                  <Gift className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span className="text-slate-200 text-xs font-semibold">Certificado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-auto pt-3.5 border-t border-white/[0.08]">
            {/* Primary CTA Button for High Conversion */}
            <motion.a
              href="https://ggcheckout.app/checkout/v5/CW6ddAPZ8KteeXBEcgtt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                try {
                  const isIframe = window.self !== window.top;
                  const isSandbox = window.location.hostname.includes('aistudio') || window.location.hostname.includes('localhost') || window.location.hostname.includes('0.0.0.0');
                  if (!isIframe && !isSandbox) {
                    (window as any).pixelId = "6a3c2ccd2835ec134e52ecaa";
                    const a = document.createElement("script");
                    a.setAttribute("async", "");
                    a.setAttribute("defer", "");
                    a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
                    document.head.appendChild(a);
                  }
                } catch (e) {
                  console.error(e);
                }
              }}
              className="w-full py-4 px-6 rounded-full bg-blue-600 hover:bg-blue-500 hover:bg-opacity-95 text-white font-black text-xs sm:text-sm tracking-widest uppercase shadow-[0_4px_24px_rgba(37,99,235,0.4)] cursor-pointer flex items-center justify-center gap-2 transition-all border border-blue-400/20 text-center select-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <span>QUERO O GUIA COMPLETO</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
