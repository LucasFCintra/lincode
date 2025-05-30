import React from 'react';
import { Command, Paintbrush, Zap, Code, Users, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Paintbrush className="w-10 h-10 text-[#00FF88]" />,
      title: "Design Moderno",
      description: "Layouts contemporâneos e responsivos que destacam o seu negócio com estilo e funcionalidade."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#7F00FF]" />,
      title: "Alta Performance",
      description: "Sites otimizados para carregar rapidamente e oferecer a melhor experiência aos usuários."
    },
    {
      icon: <Code className="w-10 h-10 text-[#00FF88]" />,
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas de programação para garantir qualidade e manutenibilidade."
    },
    {
      icon: <Command className="w-10 h-10 text-[#7F00FF]" />,
      title: "Soluções Personalizadas",
      description: "Desenvolvemos projetos sob medida para atender às necessidades específicas do seu negócio."
    },
    {
      icon: <Users className="w-10 h-10 text-[#00FF88]" />,
      title: "Suporte Especializado",
      description: "Equipe dedicada para garantir que seu site permaneça atualizado e funcionando perfeitamente."
    },
    {
      icon: <LineChart className="w-10 h-10 text-[#7F00FF]" />,
      title: "Análise de Métricas",
      description: "Acompanhamento detalhado dos resultados para otimizar a conversão e o retorno do investimento."
    }
  ];

  return (
    <section className="py-20 relative" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-[#00FF88]">Benefícios</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Por que escolher a LinCode para desenvolver sua presença digital?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#1C1C1E] rounded-xl p-6 backdrop-blur-sm group hover:shadow-lg hover:shadow-[#7F00FF]/20 transition-all duration-300 animate-fade-in border border-white/5"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-[#0D0D0D] p-4 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/5 w-16 h-16 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-[#00FF88] transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-[#A0A0A0]">{benefit.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#7F00FF] to-[#00FF88] w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 -left-24 w-48 h-48 rounded-full bg-[#7F00FF]/10 blur-3xl"></div>
      <div className="absolute bottom-24 right-0 w-64 h-64 rounded-full bg-[#00FF88]/10 blur-3xl"></div>
      
      {/* CTA Button */}
      <div className="container mx-auto px-4 md:px-6 mt-16 text-center">
        <Button className="bg-[#00FF88] text-black hover:bg-[#00FF88]/90 text-xl px-10 py-7 rounded-xl shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40 transition-all duration-300">
          Solicitar orçamento
        </Button>
      </div>
    </section>
  );
};

export default Benefits;
