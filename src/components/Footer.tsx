import { Shield, AlertCircle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 text-white">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-sm">
            E
          </div>
          <span className="font-extrabold uppercase tracking-widest text-xs font-display">
            EXPLORAÇÃO INGLÊS®
          </span>
        </div>

        {/* Short Legal Note */}
        <p className="text-[10px] text-slate-500 max-w-md mx-auto leading-relaxed">
          Este site não tem afiliação direta com o Facebook Inc. ou o Google Inc. O desempenho individual com as dinâmicas pode variar de acordo com a individualidade biológica, rotina de aplicação e consistência da família. Os materiais digitais são de caráter puramente pedagógico e não substituem tratamento fonoaudiológico ou médico especializado.
        </p>

        {/* Security Seals */}
        <div className="flex items-center justify-center gap-6 pt-2 text-[10px] text-slate-400">
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Site 100% Protegido</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Acesso Digital Vitalício</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/80 pt-6 text-[10px] text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Exploração Inglês. Todos os direitos reservados. CNPJ: 45.189.204/0001-83</span>
          <span className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-rose-500 fill-current" /> para famílias extraordinárias
          </span>
        </div>

      </div>
    </footer>
  );
}
