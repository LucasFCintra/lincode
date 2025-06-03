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
      question: "Quais tipos de soluções digitais vocês desenvolvem?",
      answer: "Desenvolvemos uma ampla gama de soluções digitais, incluindo sistemas web completos, aplicativos mobile (iOS e Android), sites institucionais, e-commerce, landing pages, dashboards analíticos e soluções personalizadas para necessidades específicas do seu negócio."
    },
    {
      question: "Quanto tempo leva para desenvolver um projeto digital?",
      answer: "O prazo varia conforme a complexidade e o escopo do projeto. Aplicativos simples e websites podem levar de 4 a 8 semanas, enquanto sistemas mais complexos podem exigir 3 a 6 meses. Fornecemos um cronograma detalhado durante a fase de planejamento do projeto."
    },
    {
      question: "Quais tecnologias vocês utilizam nos projetos?",
      answer: "Trabalhamos com as tecnologias mais modernas e eficientes do mercado, incluindo React, Angular e Vue para frontend; Node.js, Python e PHP para backend; React Native e Flutter para desenvolvimento mobile; e soluções em nuvem como AWS, Google Cloud e Azure para infraestrutura."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Nosso processo segue metodologias ágeis e inclui: 1) Levantamento de requisitos e planejamento; 2) Design de interface e experiência do usuário; 3) Desenvolvimento; 4) Testes e garantia de qualidade; 5) Implementação e lançamento; 6) Suporte e manutenção contínuos."
    },
    {
      question: "Vocês oferecem suporte após a conclusão do projeto?",
      answer: "Sim, oferecemos diversos planos de suporte e manutenção que incluem correções de bugs, atualizações de segurança, otimizações de desempenho, backup regular e implementação de novas funcionalidades conforme necessário."
    },
    {
      question: "É possível integrar meu sistema com outras plataformas?",
      answer: "Absolutamente. Desenvolvemos soluções que se integram perfeitamente com sistemas existentes, incluindo CRMs, ERPs, plataformas de e-commerce, gateways de pagamento, ferramentas de marketing e APIs de terceiros para ampliar a funcionalidade do seu sistema."
    },
    {
      question: "Como garantem a segurança dos sistemas desenvolvidos?",
      answer: "Implementamos as melhores práticas de segurança, incluindo criptografia de dados, autenticação segura, proteção contra vulnerabilidades comuns (como injeção SQL e XSS), testes de penetração e conformidade com regulamentações como LGPD e GDPR."
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
            Tire suas dúvidas sobre nosso processo de desenvolvimento e soluções digitais
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-xl">
          <Accordion type="single" collapsible className="w-full relative z-10">
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
                  <div className="border-l-2 border-[#00FF88] pl-4">
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
