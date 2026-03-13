import React from 'react';
import { motion } from 'motion/react';
import { Clock, UtensilsCrossed, Heart, Moon, Zap, Target, Sparkles, Flame } from 'lucide-react';
import { Section, Badge } from '../ui/base';
import { SITE_CONFIG, IMAGES } from '../../constants';

export const PainPoints = () => {
  return (
    <Section id="dores" className="bg-white">
      <div className="flex flex-col items-center text-center mb-20">
        <Badge className="bg-primary text-white mb-6">Eu sei como é...</Badge>
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter max-w-4xl">
            Cansada de tentar de tudo e <span className="text-primary italic">nada funcionar?</span>
        </h2>
        <p className="text-zinc-600 max-w-2xl text-lg md:text-xl font-light">
            Se você se sente estagnada e sem disposição, saiba que o problema não é você, mas o método que te venderam até agora.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Clock, title: "Falta de Tempo", desc: "A rotina corrida consome suas metas diárias." },
          { icon: UtensilsCrossed, title: "Fome Constante", desc: "Dietas restritivas que só aumentam sua ansiedade." },
          { icon: Heart, title: "Autoestima", desc: "Aquele sentimento de não se sentir bem com nenhuma roupa." },
          { icon: Moon, title: "Cansaço", desc: "Acordar moída e terminar o dia sem energia para nada." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
              <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
            <p className="text-zinc-500 leading-relaxed font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export const Method = () => {
    return (
        <Section id="metodo" className="bg-zinc-950 text-white overflow-hidden relative">
            {/* Decoração de fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div className="order-2 lg:order-1 relative">
                    <img 
                      src={IMAGES.method} 
                      alt="Treino eficiente" 
                      className="rounded-[3rem] shadow-2xl skew-y-1 grayscale contrast-125"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -inset-4 border-2 border-primary/20 rounded-[3.5rem] -z-1 translate-x-4 -translate-y-4" />
                </div>

                <div className="order-1 lg:order-2">
                    <Badge className="bg-primary/20 text-primary mb-6">O Caminho das Pedras</Badge>
                    <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                        NOME DO <br />
                        <span className="text-primary italic">{SITE_CONFIG.methodName}.</span>
                    </h2>
                    
                    <div className="space-y-10">
                        <MethodStep 
                            icon={<Zap className="w-6 h-6" />}
                            title="Pilar do Método 1"
                            text="Explique aqui o primeiro grande diferencial do seu treinamento."
                        />
                        <MethodStep 
                            icon={<Flame className="w-6 h-6" />}
                            title="Pilar do Método 2"
                            text="Explique aqui o segundo grande diferencial do seu treinamento."
                        />
                        <MethodStep 
                            icon={<Sparkles className="w-6 h-6" />}
                            title="Pilar do Método 3"
                            text="Explique aqui o terceiro grande diferencial do seu treinamento."
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

const MethodStep = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div className="flex gap-6 group">
        <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <div>
            <h4 className="text-xl font-bold mb-2 tracking-tight">{title}</h4>
            <p className="text-zinc-500 leading-relaxed font-light">{text}</p>
        </div>
    </div>
);
