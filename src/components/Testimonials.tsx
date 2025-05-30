import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "CEO, TechStart",
      text: "A LinCode superou todas as nossas expectativas com sua incrível landing page! Os resultados têm sido extraordinários.",
      avatar: "CS"
    },
    {
      id: 2,
      name: "Ana Ferreira",
      role: "Marketing Director, Impulso Digital",
      text: "Desde que implementamos o site desenvolvido pela LinCode, nossas taxas de conversão aumentaram em mais de 150%. Incrível trabalho!",
      avatar: "AF"
    },
    {
      id: 3,
      name: "Marcos Oliveira",
      role: "Founder, EduTech Brasil",
      text: "A equipe da LinCode foi extremamente profissional e atenciosa em todas as etapas do projeto. O resultado final superou todas as expectativas.",
      avatar: "MO"
    },
    {
      id: 4,
      name: "Juliana Mendes",
      role: "CMO, Growth Solutions",
      text: "A facilidade de uso e o design moderno do nosso novo site têm recebido inúmeros elogios dos nossos clientes. A LinCode realmente entende o que funciona!",
      avatar: "JM"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, testimonials.length]);

  return (
    <section className="py-20 relative" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-[#00FF88]">Clientes</span> dizem
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Depoimentos de quem já transformou sua presença digital conosco
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7F00FF]/10 to-[#00FF88]/10 blur-xl rounded-3xl"></div>
          
          <div className="carousel relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 h-full">
            <div 
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 h-full p-8">
                  <Card className="bg-[#1C1C1E] border-[1px] border-white/10 shadow-xl h-full">
                    <CardContent className="p-8 md:p-12 h-full flex flex-col justify-between">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="mb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F00FF] opacity-70">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                          </svg>
                        </div>
                        <blockquote className="text-xl md:text-2xl text-white mb-8 flex-grow">{testimonial.text}</blockquote>
                        <div className="flex flex-col items-center mt-auto">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7F00FF] to-[#00FF88] blur-sm"></div>
                            <Avatar className="w-16 h-16 border-2 border-[#1C1C1E]">
                              <AvatarImage src={testimonial.avatar.length > 2 ? testimonial.avatar : ''} />
                              <AvatarFallback className="bg-gradient-to-br from-[#7F00FF] to-[#00FF88] text-white text-lg">
                                {testimonial.avatar}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <h3 className="text-lg font-semibold text-white mt-4">{testimonial.name}</h3>
                          <p className="text-[#A0A0A0]">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Manual Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-[#7F00FF] to-[#00FF88] w-8' 
                    : 'bg-white/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#7F00FF]/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-[#00FF88]/5 blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
