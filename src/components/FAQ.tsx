import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-12">
          Respostas Rápidas Para as Suas Dúvidas
        </h2>

        {/* Accordion Questions container */}
        <div className="space-y-4 max-w-xl mx-auto text-left">
          {faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <div
                id={`faq-item-${item.id}`}
                key={item.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-sm transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 font-bold text-left text-xs sm:text-sm text-slate-800 hover:text-blue-600 transition-colors focus:outline-hidden cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 pr-4">
                    <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {item.question}
                  </span>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-500 text-xs leading-relaxed border-t border-slate-50">
                        {item.answer}
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
