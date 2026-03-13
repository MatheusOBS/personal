import React from 'react';
import { Instagram, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION } from '../../constants';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-black mb-8 tracking-tighter">
                ALÊ<span className="text-primary italic">LOPES</span>
            </h3>
            <p className="text-zinc-400 mb-10 leading-relaxed font-light">
              Transformando vidas através do movimento consciente e do emagrecimento sem sofrimento para mulheres.
            </p>
            <div className="flex gap-4">
              <SocialLink href={SITE_CONFIG.instagram} icon={<Instagram className="w-6 h-6" />} />
              <SocialLink href={SITE_CONFIG.youtube} icon={<Youtube className="w-6 h-6" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-10">Explorar</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-10">Contato</h4>
            <ul className="space-y-6">
              <ContactItem icon={<MapPin className="w-5 h-5 text-primary" />} text={SITE_CONFIG.address} />
              <ContactItem icon={<Phone className="w-5 h-5 text-primary" />} text={SITE_CONFIG.phone} />
              <ContactItem icon={<Mail className="w-5 h-5 text-primary" />} text={SITE_CONFIG.email} />
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-10">Novidades</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Receba dicas de treino e nutrição diretamente no seu e-mail.
            </p>
            <form className="relative">
                <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-primary px-4 rounded-xl hover:bg-orange-600 transition-colors">
                    <ArrowUp className="w-4 h-4" />
                </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Alê Lopes Personal Trainer. Todos os direitos reservados.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
  >
    <span className="group-hover:scale-110 group-hover:text-white transition-transform text-zinc-400">
        {icon}
    </span>
  </a>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-start gap-4 text-zinc-400 group cursor-default">
    <div className="mt-1 transition-transform group-hover:scale-110">{icon}</div>
    <span className="text-sm leading-relaxed">{text}</span>
  </li>
);
