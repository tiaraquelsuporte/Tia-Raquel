import React from 'react';
import { motion } from 'motion/react';
import { Star, Clock, BookOpen, Rocket, Target, Printer } from 'lucide-react';
import { benefits } from '../data';

const getIcon = (name: string, isPrimary: boolean) => {
  const sizeClass = isPrimary ? "w-9 h-9" : "w-7 h-7";
  switch (name) {
    case 'Star':
      return <Star className={`${sizeClass} text-amber-500 fill-amber-400`} />;
    case 'Clock':
      return <Clock className={`${sizeClass} text-blue-600`} />;
    case 'BookOpen':
      return <BookOpen className={`${sizeClass} text-emerald-500`} />;
    case 'Rocket':
      return <Rocket className={`${sizeClass} text-rose-500`} />;
    case 'Target':
      return <Target className={`${sizeClass} text-purple-600`} />;
    case 'Printer':
      return <Printer className={`${sizeClass} text-teal-600`} />;
    default:
      return <Star className={`${sizeClass} text-blue-600`} />;
  }
};

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Subtle label */}
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3.5 py-1.5 rounded-full inline-block mb-4">
          Por que funciona?
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
          Os Pilares Para o Desenvolvimento do Seu Filho
        </h2>
        
        <p className="text-slate-500 text-sm max-w-lg mx-auto mb-12 leading-relaxed">
          O material foi planejado estrategicamente para garantir praticidade aos pais e desenvolvimento motor, social e cognitivo às crianças.
        </p>

        {/* Primary Highlight Benefits (First Two) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {benefits.slice(0, 2).map((benefit, i) => (
            <motion.div
              id={`primary-benefit-card-${i}`}
              key={benefit.title}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg transition-all border-2 border-amber-100/70 flex flex-col items-center text-center justify-center relative group overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Subtle top color edge */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

              {/* Badge */}
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-[10px] font-black text-amber-700 border border-amber-100 uppercase tracking-widest">
                ⭐ Destaque
              </span>

              {/* Icon Container */}
              <div className="w-18 h-18 rounded-2xl bg-amber-50/50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform border border-amber-100/50">
                {getIcon(benefit.iconName, true)}
              </div>

              {/* Text */}
              <h3 className="font-black text-slate-900 text-lg sm:text-xl font-display tracking-tight mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Benefits (Remaining Four) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.slice(2).map((benefit, i) => (
            <motion.div
              id={`secondary-benefit-card-${i}`}
              key={benefit.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center text-center justify-start relative group overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 2) * 0.1, duration: 0.5 }}
            >
              {/* Subtle top hover line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-yellow-300 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 shadow-inner group-hover:scale-105 transition-transform border border-slate-100">
                {getIcon(benefit.iconName, false)}
              </div>

              {/* Text */}
              <h3 className="font-bold text-slate-800 text-sm sm:text-base font-display tracking-tight mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-[220px]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
