import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// @ts-ignore
import imgMarcel1 from '../assets/images/testemunho_marcel_1_1782267469755.jpg';
// @ts-ignore
import imgRafael from '../assets/images/testemunho_rafael_1782267480040.jpg';
// @ts-ignore
import imgMarcel2 from '../assets/images/testemunho_marcel_2_1782267491959.jpg';

const TESTIMONIAL_IMAGES = [
  {
    id: 1,
    src: imgMarcel1,
    alt: "Feedback WhatsApp - Marcel (Parte 1)"
  },
  {
    id: 2,
    src: imgRafael,
    alt: "Feedback WhatsApp - Rafael Mendes"
  },
  {
    id: 3,
    src: imgMarcel2,
    alt: "Feedback WhatsApp - Marcel (Parte 2)"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds auto-play

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIAL_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIAL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Modern spring variants for seamless sliding transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section id="depoimentos" className="py-20 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-100 select-none">
      <div className="max-w-6xl mx-auto px-6 relative flex flex-col items-center">
        {/* Background ambient radial lights for elegance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
  
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100/60 text-emerald-800 text-[11px] font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-emerald-600 stroke-none" /> PROVA SOCIAL REAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] tracking-tight leading-tight font-display mb-3">
            Quem Já Usa, Aprova e Recomenda
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Veja as conversas reais com professores e pais que transformaram suas aulas com nossas dinâmicas interativas.
          </p>
        </div>
  
        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-[450px] mt-4 mb-2 z-10 px-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slide Container - Styled ONLY externally */}
          <div className="relative w-full rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden bg-white">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-white"
              >
                <img
                  src={TESTIMONIAL_IMAGES[currentIndex].src}
                  alt={TESTIMONIAL_IMAGES[currentIndex].alt}
                  className="w-full h-auto select-none pointer-events-none bg-white block"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls (Dots & Navigation below the image) - SAFELY OUTSIDE THE IMAGE */}
        <div className="flex justify-center items-center gap-6 mt-6 z-10 relative">
          <button
            onClick={handlePrev}
            className="w-11 h-11 flex items-center justify-center bg-white hover:bg-emerald-50 text-[#0B1E3F] hover:text-emerald-700 rounded-full shadow-md border border-slate-200/60 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel Indicators (Dots) */}
          <div className="flex justify-center items-center gap-2.5">
            {TESTIMONIAL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex 
                    ? 'w-7 h-2.5 bg-[#0B1E3F]' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 flex items-center justify-center bg-white hover:bg-emerald-50 text-[#0B1E3F] hover:text-emerald-700 rounded-full shadow-md border border-slate-200/60 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}


