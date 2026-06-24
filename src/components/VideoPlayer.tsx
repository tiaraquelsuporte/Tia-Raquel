import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Play, ShieldCheck, Heart } from 'lucide-react';

export default function VideoPlayer() {
  // YouTube video embed URL for Shorts
  const videoId = "-cE0NUw_WeQ";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&playsinline=1&modestbranding=1&controls=1`;

  return (
    <div className="relative w-full max-w-sm mx-auto py-6 px-4 flex flex-col items-center">
      {/* Smartphone Premium Bezel Container */}
      <motion.div 
        className="relative w-full max-w-[310px] sm:max-w-[330px] aspect-[9/16] bg-slate-950 rounded-[40px] p-3 border border-slate-200 overflow-hidden transform-gpu"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Phone Glass Glossy Reflection Reflection Overlay */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />



        {/* Screen Area */}
        <div className="relative w-full h-full bg-[#090d16] rounded-[32px] overflow-hidden">
          <iframe
            src={embedUrl}
            title="Demonstração do Método das Atividades"
            className="w-full h-full border-0 rounded-[30px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </motion.div>


    </div>
  );
}
