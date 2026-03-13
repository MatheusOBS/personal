import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/base';
import { SITE_CONFIG, IMAGES } from '../../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 text-white pt-20 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src={IMAGES.heroBg} 
          alt="Treino focado" 
          className="w-full h-full object-cover opacity-30 object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs font-black uppercase tracking-widest">Inscrições Abertas - Vagas Limitadas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter uppercase">
            DESCRIÇÃO DO SEU <br />
            <span className="text-primary italic">OBJETIVO PRINCIPAL.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-xl leading-relaxed">
            Explique como o seu método <span className="text-white font-bold">{SITE_CONFIG.methodName}</span> ajuda pessoas reais a alcançarem resultados de forma sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button primary pulse className="w-full sm:w-auto px-10">
              COMEÇAR TRANSFORMAÇÃO
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-tighter">
                +250 Alunos Satisfeitos
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl skew-y-2">
            <img 
              src={IMAGES.cta} 
              alt="Treino eficiente" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] -z-1" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-500/20 blur-[80px] -z-1" />
        </motion.div>
      </div>
    </section>
  );
};
