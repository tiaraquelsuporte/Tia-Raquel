import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqItems } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* Decorative ambient blobs for premium depth */}
      <div className="absolute top-1/3 left-1/10 w-72 h-72 bg-[#0B1E3F]/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#0B1E3F]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Premium elegant badge */}
        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#0B1E3F] bg-[#0B1E3F]/5 px-4 py-2 rounded-full inline-block mb-5 select-none shadow-xs">
          Perguntas Frequentes
        </span>

        {/* Elegant Prominent Title with institutional blue and subtle bottom space */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black text-[#0B1E3F] tracking-tight font-display mb-16 max-w-2xl mx-auto leading-tight">
          Respostas Rápidas Para as Suas Dúvidas
        </h2>

        {/* Accordion Questions container - beautifully sized and spaced */}
        <div className="space-y-4.5 max-w-2xl sm:max-w-3xl mx-auto text-left">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                id={`faq-item-${item.id}`}
                key={item.id}
                className={`group bg-white rounded-2xl border transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'border-[#0B1E3F] bg-[#0B1E3F]/[0.015] shadow-[0_12px_28px_-8px_rgba(11,30,63,0.12)]'
                    : 'border-slate-100 shadow-[0_4px_16px_rgba(11,30,63,0.015)] hover:border-[#0B1E3F]/20 hover:shadow-[0_10px_30px_-4px_rgba(11,30,63,0.06)]'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-hidden cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3.5 pr-4">
                    {/* Modern icon container with premium status shift */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-[#0B1E3F] text-white shadow-sm'
                        : 'bg-[#0B1E3F]/5 text-[#0B1E3F] group-hover:bg-[#0B1E3F] group-hover:text-white'
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    
                    {/* Questions are bold / semibold, and change to institutional blue */}
                    <span className={`font-bold text-xs sm:text-[15px] tracking-tight leading-snug transition-colors duration-300 ${
                      isOpen ? 'text-[#0B1E3F]' : 'text-slate-800 group-hover:text-[#0B1E3F]'
                    }`}>
                      {item.question}
                    </span>
                  </span>

                  {/* Seta / Accordion Chevron - rotating smoothly and getting highlighted */}
                  <div className="shrink-0">
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
                      isOpen 
                        ? 'text-[#0B1E3F] rotate-180 scale-110' 
                        : 'group-hover:text-[#0B1E3F] group-hover:scale-110'
                    }`} />
                  </div>
                </button>

                {/* Smooth altura + fade entrance animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-6 pt-1 sm:px-[30px] sm:pb-7 text-slate-600 text-xs sm:text-[14.5px] leading-relaxed font-normal">
                        <div className="pt-4 border-t border-[#0B1E3F]/10">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

