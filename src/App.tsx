import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/MainSections';
import { Method } from './components/sections/MainSections';
import { Testimonials, About } from './components/sections/MoreSections';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { SITE_CONFIG } from './constants';

export default function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-primary selection:text-white bg-white">
      <Header />
      
      <main>
        <Hero />
        <PainPoints />
        <Method />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
      </main>

      <Footer />

      {/* WhatsApp Flutuante Profissional */}
      <a 
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl">
          Falar com o Alê
        </span>
      </a>

      {/* 10. SEO Optimization Tags (Simulated in Component for simple React Landing) */}
      <title>Alê Lopes | Personal Trainer Online - Método SlimFit28</title>
      <meta name="description" content="Transforme seu corpo com o Método SlimFit28. Consultoria online focada no emagrecimento feminino consciente e aceleração metabólica." />
    </div>
  );
}
