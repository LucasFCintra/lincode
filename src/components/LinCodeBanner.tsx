import React from 'react';

const LinCodeBanner: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden h-[200px]">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Back strip */}
        <div className="absolute w-[200%] h-16 bg-[#1C1C1E] rotate-[-5deg] transform-gpu shadow-lg flex items-center">
          <div className="animate-slide-left whitespace-nowrap flex items-center gap-8">
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <span className="text-white opacity-20">SISTEMAS WEB • APLICATIVOS MOBILE • SITES INSTITUCIONAIS • LANDING PAGES • DASHBOARDS • SOFTWARE SOB MEDIDA</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Front strip */}
        <div className="absolute w-[200%] h-16 bg-[#7F00FF] rotate-[5deg] transform-gpu flex items-center">
          <div className="animate-slide-left whitespace-nowrap flex items-center gap-8">
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <span className="text-white font-semibold">DESENVOLVIMENTO DE SOLUÇÕES DIGITAIS • CONSULTORIA TECNOLÓGICA • ALTA PERFORMANCE • DESIGN RESPONSIVO</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinCodeBanner;
