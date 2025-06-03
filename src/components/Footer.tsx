import React from 'react';
import { Mouse, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative pt-20 overflow-hidden">
      <div className="border-t border-white/10 w-full"></div>
      <div className="bg-[#1C1C1E]">
        <div className="container mx-auto px-4 md:px-6 pt-12 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Logo & Slogan */}
            <div className="text-left">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">LinCode</h2>
              </div>
              <p className="text-[#A0A0A0]">
                Transformando ideias em experiências digitais
              </p>
            </div>
            
            {/* Column 2: Contact */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contato.lincode@gmail.com" className="text-[#A0A0A0] hover:text-[#00FF88] transition">
                    contato.lincode@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5516999891209" className="text-[#A0A0A0] hover:text-[#00FF88] transition">
                    +55 (16) 99989-1209
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Social Media and Back to Top */}
            <div className="text-left">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.instagram.com/l.incode/" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A0] hover:text-[#00FF88] transition">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={scrollToTop} 
                  className="text-[#A0A0A0] hover:text-[#00FF88] transition flex items-center gap-1"
                  aria-label="Voltar ao topo"
                >
                  <Mouse className="h-8 w-8" />
                  <ArrowUp className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#A0A0A0] text-sm">
                © {new Date().getFullYear()} LinCode. Todos os direitos reservados.
              </p>
              <p className="text-[#A0A0A0] text-sm mt-2 md:mt-0">
                Esse site foi desenvolvido por <a href="https://www.instagram.com/l.incode/" target="_blank" rel="noopener noreferrer" className="text-[#00FF88] hover:underline">LinCode</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#7F00FF]/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
