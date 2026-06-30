import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "-cE0NUw_WeQ";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1&controls=1`;

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
        {/* Phone Glass Glossy Reflection Overlay */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />

        {/* Screen Area */}
        <div className="relative w-full h-full bg-[#090d16] rounded-[32px] overflow-hidden">
          {isPlaying ? (
            <iframe
              src={embedUrl}
              title="Demonstração do Método das Atividades"
              className="w-full h-full border-0 rounded-[30px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div 
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer group flex flex-col items-center justify-center bg-[#0d1527]"
            >
              {/* YouTube Video Thumbnail Background */}
              <img 
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Miniatura do Vídeo de Demonstração"
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
              />
              
              {/* Premium dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/30" />

              {/* Pulsing Play Button */}
              <div className="relative z-20 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <span className="text-white text-xs font-bold tracking-wider bg-slate-900/80 px-4 py-2 rounded-full border border-white/10 uppercase select-none">
                  Assistir Demonstração
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
