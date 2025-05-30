import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  const faqItems = [
    {
      question: "Quanto tempo leva para desenvolver uma landing page?",
      answer: "O tempo de desenvolvimento depende da complexidade do projeto, mas geralmente entregamos landing pages em 7 a 14 dias após a aprovação do briefing e do design."
    },
    {
      question: "Quais informações são necessárias para começar um projeto?",
      answer: "Precisamos de informações sobre sua empresa, o objetivo do site, seu público-alvo, exemplos de sites que você gosta, e qualquer material de marca que você tenha (logo, cores, etc)."
    },
    {
      question: "As landing pages são otimizadas para SEO?",
      answer: "Sim, desenvolvemos todas as nossas páginas com as melhores práticas de SEO, incluindo meta-tags otimizadas, estrutura semântica, velocidade de carregamento e compatibilidade mobile."
    },
    {
      question: "É possível integrar com sistemas de pagamento ou CRM?",
      answer: "Sim, podemos integrar sua landing page com diversos sistemas, incluindo plataformas de pagamento, CRMs, ferramentas de marketing e automação."
    },
    {
      question: "Vocês oferecem hospedagem para o site?",
      answer: "Sim, oferecemos soluções de hospedagem confiáveis e seguras como parte de nossos pacotes, mas também podemos implantar em seu provedor de preferência."
    },
    {
      question: "Como funciona o processo de manutenção após a entrega?",
      answer: "Oferecemos planos de manutenção mensal que incluem atualizações, correções de bugs, backup regular e monitoramento de segurança."
    }
  ];

  const handleItemClick = (value: string) => {
    setActiveItem(activeItem === value ? null : value);
  };

  return (
    <section className="py-20 relative" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-[#00FF88]">Frequentes</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#1C1C1E] backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className={`border-b border-white/10 last:border-b-0 ${activeItem === `item-${index}` ? 'bg-gradient-to-r from-[#7F00FF]/10 to-[#00FF88]/10' : ''}`}
              >
                <AccordionTrigger 
                  onClick={() => handleItemClick(`item-${index}`)}
                  className="py-6 px-6 text-left text-lg font-medium hover:text-[#00FF88] transition-colors"
                >
                  <span className={`transition-colors duration-300 ${activeItem === `item-${index}` ? 'text-[#00FF88]' : 'text-white'}`}>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-[#A0A0A0] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="border-l-2 border-[#7F00FF] pl-4">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-[#7F00FF]/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-[#00FF88]/5 blur-3xl"></div>
    </section>
  );
};

export default FAQ;
