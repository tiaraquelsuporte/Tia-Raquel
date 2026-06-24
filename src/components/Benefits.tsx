import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Smartphone, Brain, Activity, Target, HeartHandshake } from 'lucide-react';
import { benefits } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-8 h-8 text-yellow-500" />,
  SmartphoneOff: <Smartphone className="w-8 h-8 text-blue-600 opacity-60" />,
  Brain: <Brain className="w-8 h-8 text-emerald-500" />,
  Activity: <Activity className="w-8 h-8 text-rose-500" />,
  Focus: <Target className="w-8 h-8 text-purple-600" />,
  HeartHandshake: <HeartHandshake className="w-8 h-8 text-emerald-600" />,
};

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Subtle label */}
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3.5 py-1.5 rounded-full inline-block mb-4">
          Por que funciona?
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
          6 Pilares Para o Desenvolvimento do Seu Filho
        </h2>
        
        <p className="text-slate-500 text-sm max-w-lg mx-auto mb-12 leading-relaxed">
          O material foi planejado estrategicamente para acionar as principais áreas motoras, sociais e cognitivas na melhor fase de aprendizagem.
        </p>

        {/* Benefits Grid - Centralized design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              id={`benefit-card-${i}`}
              key={benefit.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center text-center justify-center relative group overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Subtle top color edge */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-yellow-300 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform">
                {iconMap[benefit.iconName] || <Sparkles className="w-8 h-8 text-blue-600" />}
              </div>

              {/* Text */}
              <h3 className="font-bold text-slate-800 text-base font-display tracking-tight mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
