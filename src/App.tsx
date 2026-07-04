import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Copy, 
  Check, 
  User, 
  Mail, 
  Phone, 
  CreditCard, 
  QrCode, 
  CheckCircle,
  Star
} from 'lucide-react';

import { headlines, subheadlines, ctas } from './data';
import VideoPlayer from './components/VideoPlayer';
import WhatYouReceive from './components/WhatYouReceive';
import Offer from './components/Offer';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';

export default function App() {
  // Global copywriting State
  const [currentHeadlineId, setHeadlineId] = useState<number>(1);
  const [currentSubheadlineId, setSubheadlineId] = useState<number>(1);
  const [currentCtaId, setCtaId] = useState<number>(1);

  // Countdown timer: 8 minutes
  const [timeLeft, setTimeLeft] = useState(8 * 60);
  
  // Checkout modal Simulation
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3>(1);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('premium');
  
  // Form details
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [promoCode, setPromoCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Get current active copy texts
  const activeHeadline = headlines.find((h) => h.id === currentHeadlineId) || headlines[0];
  const activeSubheadline = subheadlines.find((s) => s.id === currentSubheadlineId) || subheadlines[0];
  const activeCta = ctas.find((c) => c.id === currentCtaId) || ctas[0];

  // Countdown clock tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 8 * 60)); // Loop back if expired for endless mock testing
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Safe Pix Code Copy simulation
  const handleCopyPix = () => {
    const pixCode = "00020126420014BR.GOV.BCB.PIX011445189204000183520400005303986540647.005802BR5917ExploracaoIngles6009SAO_PAULO62070503***6304CA72";
    navigator.clipboard.writeText(pixCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) return;
    
    // Simple email validation regex to look senior and high value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Insira um e-mail válido para receber o material.');
      return;
    }
    setEmailError('');
    setCheckoutStep(2);
  };

  const handleCompleteOrder = () => {
    setCheckoutStep(3);
  };

  return (
    <div id="landing-page-root" className="min-h-screen bg-white text-slate-800 font-sans tracking-tight antialiased selection:bg-yellow-200">
      
      {/* DYNAMIC TOP COUNTDOWN BAR (Vibrant blue background matching the main headline with hot glowing fire accents) */}
      <div className="bg-gradient-to-r from-[#0B1E3F] via-[#1a365d] to-[#0B1E3F] text-white py-3 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-md relative z-50 border-b border-blue-900/40 select-none">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
        </span>
        <span className="flex items-center gap-1 flex-wrap justify-center">
          🔥 <span className="text-amber-300 font-extrabold tracking-wider text-[11px] sm:text-xs bg-amber-400/10 px-2 py-0.5 rounded-sm uppercase">Oferta por Tempo Limitado:</span> A oferta terminará em <span className="font-mono bg-white/10 text-amber-300 px-2.5 py-0.5 rounded-md font-black mx-1 tracking-wider text-sm">{formatTime(timeLeft)}</span> minutos! Garanta seu desconto agora.
        </span>
      </div>

      {/* 3. Hero Section (All items Centered with spacious visual pacing for high CRO) */}
      <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center text-center justify-center bg-white select-all">
        
        {/* Subtle high-end background graphic to lift brand perception */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full flex justify-center pointer-events-none select-none opacity-40">
          <div className="w-[800px] h-[800px] rounded-full border border-slate-100 absolute -top-[400px]" />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10 w-full pt-4">

          {/* DYNAMIC HEADLINE (CRO optimized alignment and coloring) */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentHeadlineId}
              className="text-3xl sm:text-4xl md:text-5.5xl font-black tracking-tight leading-[1.12] text-[#0B1E3F] font-display max-w-2xl text-center px-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {activeHeadline.highlightedParts.map((part, index) => {
                if (part.color === 'amarelo') {
                  return (
                    <span key={index} className="text-[#2563EB] px-0.5 inline font-black">
                      {part.text}
                    </span>
                  );
                } else if (part.color === 'verde') {
                  return (
                    <span key={index} className="text-[#16A34A] px-0.5 inline font-black">
                      {part.text}
                    </span>
                  );
                }
                return <span key={part.text + index} className="inline">{part.text}</span>;
              })}
            </motion.h1>
          </AnimatePresence>

          {/* DYNAMIC SUBHEADLINE (Perfect line heights and focus values) */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubheadlineId}
              className="mt-4 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl font-sans font-medium text-center px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {activeSubheadline.text}
            </motion.p>
          </AnimatePresence>

          {/* PREMIUM INTERACTIVE VIDEO PLAYER */}
          <div className="w-full mt-4 sm:mt-6 select-none overflow-visible">
            <VideoPlayer />
          </div>

          {/* ACCELERATED CONVERSION CTA MODULE (Green button in all caps, spacious shadow) */}
          <div className="mt-4 w-full max-w-sm flex flex-col items-center px-4">
            <AnimatePresence mode="wait">
              <motion.button
                id="cta-hero-primary"
                key={currentCtaId}
                onClick={() => {
                  const element = document.getElementById('oferta');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-5 px-6 rounded-2xl bg-[#22C55E] hover:bg-[#1db354] text-white font-extrabold text-[15px] sm:text-base tracking-wider shadow-[0_12px_32px_rgba(34,197,94,0.35)] hover:scale-[1.025] active:scale-[0.98] cursor-pointer transition-all border border-emerald-400/20 flex items-center justify-center gap-2 uppercase select-none font-sans"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span>{activeCta.text}</span>
                <ChevronRight className="w-5 h-5 text-yellow-300 animate-pulse" />
              </motion.button>
            </AnimatePresence>

            {/* Social proof message below the CTA button */}
            <div className="mt-4 flex flex-row items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-bold select-none flex-wrap">
              <div className="flex -space-x-1.5 shrink-0">
                <img 
                  className="w-5.5 h-5.5 rounded-full border border-white object-cover shadow-sm" 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120" 
                  alt="Professora" 
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
                <img 
                  className="w-5.5 h-5.5 rounded-full border border-white object-cover shadow-sm" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120" 
                  alt="Mãe" 
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
                <img 
                  className="w-5.5 h-5.5 rounded-full border border-white object-cover shadow-sm" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120" 
                  alt="Educador" 
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </div>
              <span className="shrink-0">Mais de 2.000 pessoas aprovaram</span>
              <div className="flex gap-0.5 shrink-0 text-amber-400">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* 2. O que você recebe */}
      <WhatYouReceive onCtaClick={() => {
        setSelectedPlan('premium');
        setCheckoutStep(1);
        setIsCheckoutOpen(true);
      }} />

      {/* 4. Oferta (Promocional R$ 10,00) */}
      <Offer onCtaClick={(plan) => {
        setSelectedPlan(plan);
        setCheckoutStep(1);
        setIsCheckoutOpen(true);
      }} />

      {/* 5. Avaliações Clean & Realistas */}
      <Reviews />

      {/* 7. FAQ Section */}
      <FAQ />

      {/* --- SIMULATED CHECKOUT MODAL (For realistic customer testing in Sandbox!) --- */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCheckoutOpen(false)}
            />

            {/* Modal Body */}
            <motion.div
              id="checkout-modal-container"
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10"
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              
              {/* Modal header */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-5 text-center relative select-none">
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="absolute right-4 top-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-xs font-black cursor-pointer"
                >
                  ✕
                </button>
                <span className="text-[9px] uppercase tracking-widest bg-yellow-400 text-slate-950 font-bold px-2 py-0.5 rounded-full inline-block mb-1 animate-pulse">
                  🌟 {selectedPlan === 'premium' ? 'Plano Premium' : 'Plano Básico'} Ativo
                </span>
                <h3 className="font-extrabold text-sm tracking-tight font-display text-white">
                  Concluir Inscrição - Exploração Inglês
                </h3>
                <p className="text-[10px] text-blue-100 opacity-90 mt-0.5">
                  Preço Promocional Único: <span className="line-through">{selectedPlan === 'premium' ? 'R$ 67,90' : 'R$ 37,90'}</span> por <strong className="text-yellow-300 text-xs">{selectedPlan === 'premium' ? 'R$ 10,00' : 'R$ 10,00'}</strong>
                </p>
              </div>

              {/* Progress Bar steps inside checkout */}
              <div className="flex bg-slate-100 border-b border-slate-100 text-[10px] font-bold text-center">
                <div className={`flex-1 py-2 ${checkoutStep === 1 ? 'bg-blue-50 text-blue-600' : 'text-slate-400'}`}>
                  1. Seus Dados
                </div>
                <div className={`flex-1 py-2 ${checkoutStep === 2 ? 'bg-blue-50 text-blue-600' : 'text-slate-400'}`}>
                  2. Pagamento
                </div>
                <div className={`flex-1 py-2 ${checkoutStep === 3 ? 'bg-emerald-50 text-emerald-600' : 'text-slate-400'}`}>
                  3. Confirmado!
                </div>
              </div>

              {/* Step content */}
              <div className="p-6">
                
                {/* STEP 1: Basic CRM Fields */}
                {checkoutStep === 1 && (
                  <form onSubmit={handleNextStep} className="space-y-4">
                    <div className="text-center mb-2">
                      <p className="text-xs text-slate-500">
                        Insira os seus dados de entrega para garantir que o download seja enviado corretamente.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500 block">
                        Seu Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: Ana Maria Silva"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-hidden bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500 block">
                        E-mail de Recebimento *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            setEmailError('');
                          }}
                          placeholder="Ex: ana@mail.com"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-hidden bg-slate-50/50"
                        />
                      </div>
                      {emailError && (
                        <span className="text-[9px] font-semibold text-rose-500 block mt-0.5">
                          {emailError}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500 block">
                        WhatsApp para Alertas *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ex: (11) 98765-4321"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-hidden bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg transition-colors cursor-pointer block text-center"
                    >
                      Ir Para o Pagamento
                    </button>
                  </form>
                )}

                {/* STEP 2: Realistic Simulator Payments */}
                {checkoutStep === 2 && (
                  <div className="space-y-4">
                    
                    {/* Method Choice Buttons */}
                    <div className="flex gap-2.5">
                      <button
                        onClick={() => setPaymentMethod('pix')}
                        className={`flex-1 py-3 px-4 rounded-xl border-2 flex items-center justify-center gap-1.5 cursor-pointer font-bold text-xs transition-all ${
                          paymentMethod === 'pix'
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-slate-100 hover:border-slate-200 text-slate-500'
                        }`}
                      >
                        <QrCode className="w-4 h-4" /> Pix Copia & Cola
                      </button>
                      <button
                        onClick={() => setPaymentMethod('cartao')}
                        className={`flex-1 py-3 px-4 rounded-xl border-2 flex items-center justify-center gap-1.5 cursor-pointer font-bold text-xs transition-all ${
                          paymentMethod === 'cartao'
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-slate-100 hover:border-slate-200 text-slate-500'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" /> Cartão de Crédito
                      </button>
                    </div>

                    {paymentMethod === 'pix' ? (
                      <div className="space-y-3.5 text-center pt-2">
                        <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center">
                          {/* Mock Visual QR Code */}
                          <div className="w-32 h-32 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm flex items-center justify-center select-none">
                            <div className="grid grid-cols-4 gap-1 w-full h-full opacity-80 filter blur-[0.3px] relative">
                              {[...Array(16)].map((_, index) => (
                                <div key={index} className={`rounded-xs ${index % 3 === 0 || index % 5 === 2 ? 'bg-slate-950' : 'bg-transparent'}`} />
                              ))}
                              <div className="absolute inset-0 flex items-center justify-center text-[10px] bg-white/95 px-1 font-extrabold uppercase tracking-widest text-slate-900 border border-slate-100 rounded">
                                Pix Gerado
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-[10px] text-slate-500 mt-3 max-w-[200px] leading-relaxed">
                            Pague no aplicativo do seu banco usando a opção "Pagar com PIX / Copia e Cola".
                          </p>
                        </div>

                        {/* Copy Code Button */}
                        <div className="flex gap-2">
                          <button
                            onClick={handleCopyPix}
                            className="flex-1 py-3 px-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-4 h-4 text-green-400" /> Copiado!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" /> Copiar Código Pix
                              </>
                            )}
                          </button>
                          
                          <button
                            onClick={handleCompleteOrder}
                            className="py-3 px-4 bg-[#22C55E] hover:bg-green-600 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                          >
                            Já Paguei (Confirmar)
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {/* Simulation alert details */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-500 leading-relaxed">
                          Para simular em ambiente sandbox, preencha dados fictícios de cartão de crédito e clique em Confirmar Inscrição.
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] font-extrabold uppercase tracking-wide text-slate-500 block">Número do Cartão *</label>
                          <input
                            type="text"
                            maxLength={19}
                            placeholder="4444 •••• •••• 4444"
                            className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-hidden bg-slate-50/50"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[9px] font-extrabold uppercase tracking-wide text-slate-500 block">Vencimento *</label>
                            <input
                              type="text"
                              maxLength={5}
                              placeholder="MM/AA"
                              className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-hidden bg-slate-50/50"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[9px] font-extrabold uppercase tracking-wide text-slate-500 block">CVC *</label>
                            <input
                              type="text"
                              maxLength={3}
                              placeholder="123"
                              className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:outline-hidden bg-slate-50/50"
                            />
                          </div>
                        </div>

                        <button
                          onClick={handleCompleteOrder}
                          className="w-full py-3.5 mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg transition-colors cursor-pointer block text-center"
                        >
                          Confirmar Inscrição Totalmente Segura
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 3: Order fully completed simulation! */}
                {checkoutStep === 3 && (
                  <div className="text-center py-4 space-y-4">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center border border-green-200 mx-auto animate-bounce">
                      <CheckCircle className="w-10 h-10 text-[#22C55E]" />
                    </div>
                    
                    <div>
                      <h4 className="font-extrabold text-slate-900 font-display">
                        {selectedPlan === 'premium' ? 'Acesso Premium Confirmado!' : 'Acesso Básico Confirmado!'}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Olá <strong>{formData.name || 'Família'}</strong>, o material PDF completo já foi despachado para o seu e-mail:
                      </p>
                      <span className="inline-block mt-1 font-mono text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {formData.email || 'seu-email@receber.com.br'}
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 text-[10px] text-slate-500 text-left space-y-2 max-w-sm mx-auto">
                      <p className="font-bold text-slate-700">🎁 Verifique também sua caixa de Spam:</p>
                      <p className="leading-relaxed">
                        Enviamos um SMS e mensagem de WhatsApp para o número <strong className="text-slate-800">{formData.phone || '(11) 99999-9999'}</strong> com a senha mestra de abertura do material. Divertam-se muito brincando em inglês!
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setIsCheckoutOpen(false);
                        setCheckoutStep(1);
                      }}
                      className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer block text-center transition-colors"
                    >
                      Voltar Para a Landing Page
                    </button>
                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
