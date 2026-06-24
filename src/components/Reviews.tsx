import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarColor: string;
  likes: number;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    author: "Mariana Souza",
    role: "Professora de Educação Infantil",
    rating: 5,
    date: "Hoje",
    comment: "Estou simplesmente encantada com o material! As dinâmicas são fáceis de aplicar e os meus alunos de 4 e 5 anos ficam extremamente engajados. Salvou o planejamento das minhas aulas de inglês.",
    verified: true,
    avatarColor: "bg-emerald-100 text-emerald-700",
    likes: 14
  },
  {
    id: 2,
    author: "Ana Beatriz Ramos",
    role: "Mãe e Educadora",
    rating: 5,
    date: "Ontem",
    comment: "Excelente investimento. O material é muito didático, as ilustrações são lindas e as atividades lúdicas realmente ensinam brincando. Minha filha de 6 anos adora as brincadeiras cantadas.",
    verified: true,
    avatarColor: "bg-blue-100 text-blue-700",
    likes: 9
  },
  {
    id: 3,
    author: "Priscila Mendes",
    role: "Coordenadora Pedagógica",
    rating: 5,
    date: "Há 3 dias",
    comment: "O guia é extremamente completo e segue uma linha pedagógica fantástica. Facilitou muito a vida das nossas professoras de inglês infantil. Parabéns pelo capricho e organização do PDF.",
    verified: true,
    avatarColor: "bg-amber-100 text-amber-700",
    likes: 11
  },
  {
    id: 4,
    author: "Carlos Eduardo F.",
    role: "Professor de Inglês Particular",
    rating: 5,
    date: "Há 5 dias",
    comment: "Melhor material que já comprei para essa faixa etária. As dinâmicas de movimentação e jogos de flashcard funcionam super bem. Prático, direto ao ponto e muito rico em ideias.",
    verified: true,
    avatarColor: "bg-purple-100 text-purple-700",
    likes: 6
  },
  {
    id: 5,
    author: "Camila Guimarães",
    role: "Professora Bilíngue",
    rating: 5,
    date: "Há 1 semana",
    comment: "Estava sem ideias para prender a atenção das crianças mais agitadas, e as brincadeiras físicas desse guia funcionaram perfeitamente! Elas aprendem o vocabulário sem nem perceber que estão estudando.",
    verified: true,
    avatarColor: "bg-rose-100 text-rose-700",
    likes: 18
  },
  {
    id: 6,
    author: "Gabriela Vasconcelos",
    role: "Mãe do Theo (5 anos)",
    rating: 5,
    date: "Há 1 semana",
    comment: "Comprei para aplicar em casa com meu filho durante o fim de semana. É incrível como o vocabulário dele expandiu em poucos dias de forma super divertida e natural.",
    verified: true,
    avatarColor: "bg-teal-100 text-teal-700",
    likes: 5
  }
];

export default function Reviews() {
  const [likedReviews, setLikedReviews] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay Effect
  useEffect(() => {
    if (isHovered || REVIEWS_DATA.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS_DATA.length);
    }, 5000); // 5 seconds autoplay

    return () => clearInterval(interval);
  }, [isHovered, REVIEWS_DATA.length]);

  const toggleLike = (id: number) => {
    if (likedReviews.includes(id)) {
      setLikedReviews(likedReviews.filter(item => item !== id));
    } else {
      setLikedReviews([...likedReviews, id]);
    }
  };

  const handleNext = () => {
    if (REVIEWS_DATA.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    if (REVIEWS_DATA.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section id="avaliacoes" className="py-20 bg-slate-50 border-t border-b border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E3F] font-display tracking-tight mb-4">
            Quem já comprou, recomenda!
          </h2>
        </div>

        {/* Carrossel de Comentários */}
        <div 
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Container Principal do Carrossel com transições suaves */}
          <div className="relative min-h-[250px] bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-10 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {currentReview && (
                <motion.div
                  key={currentReview.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex flex-col sm:flex-row gap-5 items-start"
                >
                  {/* Avatar circular discreto */}
                  <div className={`w-12 h-12 rounded-full ${currentReview.avatarColor} flex items-center justify-center shrink-0 text-base font-bold select-none shadow-xs`}>
                    {currentReview.author.charAt(0)}
                  </div>

                  {/* Conteúdo do Comentário */}
                  <div className="flex-1 space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                      <div>
                        <h3 className="text-base font-bold text-[#0B1E3F] flex items-center gap-1.5">
                          {currentReview.author}
                          {currentReview.verified && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-100">
                              <CheckCircle className="w-2.5 h-2.5 fill-emerald-500 text-white" />
                              Compra Verificada
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">{currentReview.role}</p>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{currentReview.date}</span>
                    </div>

                    {/* Estrelas */}
                    <div className="flex gap-0.5">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Texto do Comentário */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal min-h-[80px]">
                      "{currentReview.comment}"
                    </p>

                    {/* Curtida do Comentário */}
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => toggleLike(currentReview.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-lg border transition-all ${
                          likedReviews.includes(currentReview.id)
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-white hover:bg-slate-50 text-slate-500 border-slate-200'
                        }`}
                      >
                        <ThumbsUp className={`w-3 h-3 ${likedReviews.includes(currentReview.id) ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                        <span>Útil ({currentReview.likes + (likedReviews.includes(currentReview.id) ? 1 : 0)})</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Botões de Navegação nas Laterais */}
          {REVIEWS_DATA.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-[-20px] sm:left-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-slate-500 hover:text-[#0B1E3F] hover:bg-slate-50 transition-all cursor-pointer z-20 focus:outline-hidden"
                aria-label="Avaliação anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-[-20px] sm:right-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-slate-500 hover:text-[#0B1E3F] hover:bg-slate-50 transition-all cursor-pointer z-20 focus:outline-hidden"
                aria-label="Próxima avaliação"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Indicadores de bolinha no fundo */}
          {REVIEWS_DATA.length > 1 && (
            <div className="flex justify-center gap-1.5 mt-5">
              {REVIEWS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? 'w-6 bg-[#0B1E3F]'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para avaliação ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Selo de Garantia / Confiança Adicional */}
        <div className="mt-12 text-center">
        </div>

      </div>
    </section>
  );
}

