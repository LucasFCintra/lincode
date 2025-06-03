import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  const generateDevelopmentMessage = () => {
    const message = 'Olá! Gostaria de receber um orçamento para o desenvolvimento de uma solução digital para meu negócio. Preciso de ajuda para entender as melhores opções.';
    return encodeURIComponent(message);
  };

  const generateExpertMessage = () => {
    const message = 'Olá! Gostaria de agendar uma consultoria com um especialista para discutir as necessidades tecnológicas do meu negócio e possíveis soluções.';
    return encodeURIComponent(message);
  };

  return (
    <section className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-start pt-10 md:pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 relative z-10">
        <div className="flex flex-col w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white">
            Desenvolvemos <span className="text-[#00FF88]">soluções digitais</span> personalizadas
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-[#A0A0A0] max-w-xl mx-auto lg:mx-0">
            Softwares, sites, aplicativos e sistemas que impulsionam o crescimento do seu negócio
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                <Avatar className="border-2 border-[#1C1C1E] w-5 h-5 md:w-6 md:h-6">
                  <AvatarImage src="https://i.pravatar.cc/100?img=1" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-[#1C1C1E] w-5 h-5 md:w-6 md:h-6">
                  <AvatarImage src="https://i.pravatar.cc/100?img=2" />
                  <AvatarFallback>AF</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-[#1C1C1E] w-5 h-5 md:w-6 md:h-6">
                  <AvatarImage src="https://i.pravatar.cc/100?img=3" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white font-semibold text-sm md:text-base">+120</span>
                <span className="text-[#A0A0A0] text-xs md:text-sm">clientes</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-[#00FF88] fill-[#00FF88]" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm md:text-base">5.0</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 md:mt-4 justify-center lg:justify-start">
            <Button 
              className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40 transition-all duration-300"
              onClick={() => window.open(`https://wa.me/5516999891209?text=${generateDevelopmentMessage()}`, '_blank')}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#00FF88]/10 hover:shadow-[#00FF88]/20 transition-all duration-300"
              onClick={() => window.open(`https://wa.me/5516999891209?text=${generateExpertMessage()}`, '_blank')}
            >
              Falar com especialista
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square hidden md:block">
            {/* Componente Principal - Dashboard de Desenvolvimento */}
            <div className="absolute inset-0 animate-float-main">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F00FF]/20 to-[#00FF88]/20 rounded-xl blur-xl"></div>
              
              <div className="relative bg-[#1C1C1E] rounded-xl border border-white/10 p-4 h-full shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#7F00FF]/20 to-[#00FF88]/20 opacity-50"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[#1C1C1E]">
                    <div className="absolute inset-0 flex items-start justify-center">
                      <div className="w-full h-full flex flex-col">
                        <div className="h-12 border-b border-white/10 px-4 flex items-center justify-between">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#7F00FF]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#00FF88]"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                          </div>
                          <div className="px-4 py-1 rounded-full bg-white/10 text-xs text-white/70">
                            Dashboard
                          </div>
                        </div>
                        
                        <div className="flex-1 p-4 grid grid-cols-2 gap-3 auto-rows-min">
                          <div className="bg-[#7F00FF]/20 p-3 rounded-lg border border-[#7F00FF]/30">
                            <div className="text-xs text-white/60 mb-1">Projetos</div>
                            <div className="text-xl text-white font-bold">+ 24</div>
                            <div className="h-2 w-full bg-white/10 rounded-full mt-2">
                              <div className="h-full w-[89%] bg-[#7F00FF] rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="bg-[#00FF88]/20 p-3 rounded-lg border border-[#00FF88]/30">
                            <div className="text-xs text-white/60 mb-1">Sistemas</div>
                            <div className="text-xl text-white font-bold">15</div>
                            <div className="h-2 w-full bg-white/10 rounded-full mt-2">
                              <div className="h-full w-[75%] bg-[#00FF88] rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="col-span-2 bg-white/5 p-3 rounded-lg border border-white/10">
                            <div className="text-xs text-white/60 mb-3">Desenvolvimento Semanal</div>
                            <div className="flex items-end justify-between h-16">
                              {[40, 60, 45, 75, 65, 90, 70].map((h, i) => (
                                <div key={i} className="w-[8%] h-full flex items-end">
                                  <div 
                                    className="w-full bg-gradient-to-t from-[#7F00FF] to-[#00FF88]" 
                                    style={{ height: `${h}%` }}
                                  ></div>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between text-[10px] text-white/40 mt-2">
                              <span>Seg</span>
                              <span>Ter</span>
                              <span>Qua</span>
                              <span>Qui</span>
                              <span>Sex</span>
                              <span>Sab</span>
                              <span>Dom</span>
                            </div>
                          </div>

                          <div className="col-span-2 bg-white/5 p-3 rounded-lg border border-white/10">
                            <div className="text-xs text-white/60 mb-2">Tipos de Projetos</div>
                            <div className="space-y-2">
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-white/80">Sistemas Web</span>
                                  <span className="text-[#00FF88]">45%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full">
                                  <div className="h-full w-[45%] bg-[#00FF88] rounded-full"></div>
                                </div>
                              </div>
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-white/80">Apps Mobile</span>
                                  <span className="text-[#7F00FF]">35%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full">
                                  <div className="h-full w-[35%] bg-[#7F00FF] rounded-full"></div>
                                </div>
                              </div>
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-white/80">Sites</span>
                                  <span className="text-white">20%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full">
                                  <div className="h-full w-[20%] bg-white/40 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Componente Flutuante - Código */}
            <div className="absolute -right-8 -top-8 w-64 bg-[#1C1C1E] rounded-xl p-4 border border-white/10 animate-float-leads">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7F00FF]/10 to-[#00FF88]/10 rounded-xl"></div>
              <div className="relative">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-xs text-white/60">Código</div>
                  <div className="text-xs text-[#00FF88]">Desenvolvimento</div>
                </div>
                <div className="bg-black/50 p-2 rounded-md text-[10px] font-mono text-white/80">
                  <div className="text-[#7F00FF]">function</div> 
                  <div><span className="text-[#00FF88]">criarSistema</span>() {'{'}</div>
                  <div className="pl-3 text-white/60">return new Aplicacao({'{'}</div>
                  <div className="pl-6">tipo: <span className="text-[#00FF88]">'personalizado'</span>,</div>
                  <div className="pl-6">cliente: <span className="text-[#00FF88]">'seu_negocio'</span></div>
                  <div className="pl-3">{'}'});</div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>

            {/* Componente Flutuante - Tecnologias */}
            <div className="absolute -left-12 -bottom-6 w-64 bg-[#1C1C1E] rounded-xl p-4 border border-white/10 animate-float-engagement">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/10 to-[#7F00FF]/10 rounded-xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-white/60">Tecnologias</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></div>
                    <span className="text-[10px] text-white/60">Atualizadas</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7F00FF] to-[#00FF88] flex items-center justify-center text-white text-xs font-bold">
                        R
                      </div>
                      <div>
                        <div className="text-xs text-white font-bold">React.js</div>
                        <div className="text-[10px] text-white/60">Front-end</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7F00FF] to-[#00FF88] flex items-center justify-center text-white text-xs font-bold">
                        N
                      </div>
                      <div>
                        <div className="text-xs text-white font-bold">Node.js</div>
                        <div className="text-[10px] text-white/60">Back-end</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7F00FF] to-[#00FF88] flex items-center justify-center text-white text-xs font-bold">
                        M
                      </div>
                      <div>
                        <div className="text-xs text-white font-bold">Mobile</div>
                        <div className="text-[10px] text-white/60">Flutter/Native</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Componente Flutuante - Performance */}
            <div className="absolute -right-16 bottom-12 w-72 bg-[#1C1C1E] rounded-xl p-4 border border-white/10 animate-float-performance">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7F00FF]/10 to-[#00FF88]/10 rounded-xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-white/60">Soluções</div>
                  <div className="px-2 py-1 rounded-full bg-[#00FF88]/20 text-[10px] text-[#00FF88]">
                    Premium
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[10px] text-white/80">Sistemas Web</div>
                      <div className="text-[10px] text-[#00FF88]">Completos</div>
                    </div>
                    <div className="flex gap-1">
                      {[98, 95, 97, 94, 99, 96, 98].map((score, i) => (
                        <div key={i} className="flex-1 h-8 bg-white/5 rounded relative overflow-hidden">
                          <div 
                            className="absolute bottom-0 w-full bg-gradient-to-t from-[#00FF88] to-[#7F00FF]"
                            style={{ height: `${score}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[8px] text-white/40 mt-1">
                      <span>CRM</span>
                      <span>ERP</span>
                      <span>API</span>
                      <span>E-COM</span>
                      <span>DASH</span>
                      <span>APPS</span>
                      <span>AI</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[10px] text-white/60 mb-1">Web</div>
                      <div className="text-sm text-white font-bold">98%</div>
                      <div className="h-1 w-full bg-white/10 rounded-full mt-1">
                        <div className="h-full w-[98%] bg-[#00FF88] rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[10px] text-white/60 mb-1">Mobile</div>
                      <div className="text-sm text-white font-bold">95%</div>
                      <div className="h-1 w-full bg-white/10 rounded-full mt-1">
                        <div className="h-full w-[95%] bg-[#7F00FF] rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[10px] text-white/60 mb-1">Desktop</div>
                      <div className="text-sm text-white font-bold">100%</div>
                      <div className="h-1 w-full bg-white/10 rounded-full mt-1">
                        <div className="h-full w-full bg-gradient-to-r from-[#7F00FF] to-[#00FF88] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Botão Conheça Mais */}
      <div className="absolute md:bottom-8 bottom-24 left-0 right-0 flex justify-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#A0A0A0] hover:text-white flex flex-col items-center gap-2 animate-[float_3s_ease-in-out_infinite] bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Conheça mais
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
