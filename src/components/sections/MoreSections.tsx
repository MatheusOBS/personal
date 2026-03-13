import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Instagram, Users, ShieldCheck, Rainbow } from 'lucide-react';
import { Section } from '../ui/base';
import { TESTIMONIALS, SITE_CONFIG, IMAGES } from '../../constants';

export const Testimonials = () => {
  return (
    <Section id="depoimentos" className="bg-zinc-950 text-white">
      <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Resultados de <br />
            <span className="text-primary italic">quem já chegou lá.</span>
          </h2>
          <p className="text-zinc-400 max-w-md">
            Veja como o nosso acompanhamento mudou a rotina e a saúde de nossos alunos.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl">
            <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-black text-xl">5.0</span>
            <span className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Avaliação dos Alunos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5 relative group h-full flex flex-col"
          >
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8" />
            
            <div className="flex text-yellow-500 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            
            <p className="text-zinc-300 italic mb-10 leading-relaxed text-lg flex-grow">
              "{item.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20">
                {item.author.charAt(0)}
              </div>
              <div>
                <span className="block font-black text-xl tracking-tight">{item.author}</span>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Aluno(a) Ativo(a)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export const About = () => {
    return (
      <Section id="sobre" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl skew-x-1">
                <img 
                    src={IMAGES.about} 
                    alt={SITE_CONFIG.trainerName} 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-[2rem] text-white shadow-xl z-20 hidden md:block">
                <span className="block text-4xl font-black">+250</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Vidas Impactadas</span>
            </div>
          </motion.div>
          
          <div>
            <span className="text-primary font-black tracking-widest uppercase text-sm block mb-4">Sobre o Treinador</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                {SITE_CONFIG.trainerName.split(' ')[0]} <span className="text-zinc-300">{SITE_CONFIG.trainerName.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed font-light">
                "Conte aqui a sua história e a sua missão. Explique por que você decidiu ajudar pessoas através do fitness e qual é a sua filosofia de treino."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col gap-2 p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
                <Users className="text-primary w-8 h-8 mb-2" />
                <span className="font-black text-xl tracking-tight">Personal Especialista</span>
                <span className="text-sm text-zinc-500">Focado em resultados reais e duradouros.</span>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
                <ShieldCheck className="text-primary w-8 h-8 mb-2" />
                <span className="font-black text-xl tracking-tight">Certificado</span>
                <span className="text-sm text-zinc-500">Profissional com experiência comprovada.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <a 
                    href={SITE_CONFIG.instagram} 
                    target="_blank" 
                    className="flex items-center gap-3 bg-zinc-950 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all active:scale-95"
                >
                    <Instagram className="w-5 h-5 text-primary" />
                    ME SIGA NO INSTAGRAM
                </a>
            </div>
          </div>
        </div>
      </Section>
    );
};
