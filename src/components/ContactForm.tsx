import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, User, Send, Phone, Zap } from "lucide-react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o formulário
    // Por exemplo, enviar para uma API, integrar com email marketing, etc.
    alert("Obrigado pelo seu contato! Em breve nossa equipe entrará em contato.");
  };

  return (
    <section className="py-16 relative" id="contato">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Transforme seu negócio com <span className="text-[#00FF88]">soluções digitais</span>
          </h2>
          <p className="text-base md:text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Receba uma análise gratuita e personalizada para o seu projeto
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#1C1C1E] backdrop-blur-sm border-white/10 shadow-lg overflow-hidden">
            <CardHeader className="relative z-10 border-b border-white/10 pb-4">
              <CardTitle className="text-xl md:text-2xl text-white">
                Fale com nossos especialistas
              </CardTitle>
              <CardDescription className="text-[#A0A0A0] text-sm md:text-base mt-1">
                Preencha o formulário e receba nossa análise personalizada
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 pt-5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm">
                      Nome completo
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0A0]">
                        <User className="h-4 w-4" />
                      </div>
                      <Input 
                        id="name" 
                        placeholder="Seu nome" 
                        className="bg-[#0D0D0D] border-white/10 pl-9 h-11 text-white placeholder:text-[#A0A0A0]/70"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm">
                      E-mail
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0A0]">
                        <Mail className="h-4 w-4" />
                      </div>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu.email@exemplo.com" 
                        className="bg-[#0D0D0D] border-white/10 pl-9 h-11 text-white placeholder:text-[#A0A0A0]/70"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white text-sm">
                      Telefone / WhatsApp
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0A0]">
                        <Phone className="h-4 w-4" />
                      </div>
                      <Input 
                        id="phone" 
                        placeholder="(00) 00000-0000" 
                        className="bg-[#0D0D0D] border-white/10 pl-9 h-11 text-white placeholder:text-[#A0A0A0]/70"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-white text-sm">
                      Interesse
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0A0]">
                        <Zap className="h-4 w-4" />
                      </div>
                      <select 
                        id="interest" 
                        className="w-full bg-[#0D0D0D] border border-white/10 rounded-md h-11 pl-9 pr-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#00FF88]/50 focus:border-[#00FF88]/50"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled className="text-[#A0A0A0]/70">Selecione uma opção</option>
                        <option value="sistema">Sistema Web</option>
                        <option value="site">Site Institucional</option>
                        <option value="landing">Landing Page</option>
                        <option value="app">Aplicativo Mobile</option>
                        <option value="outro">Outro</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#A0A0A0]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white text-sm">
                    Mensagem
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-[#A0A0A0]">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <Textarea 
                      id="message" 
                      placeholder="Descreva brevemente seu projeto ou necessidade" 
                      className="bg-[#0D0D0D] border-white/10 min-h-[100px] pl-9 py-2 text-white placeholder:text-[#A0A0A0]/70 resize-none text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#7F00FF] to-[#00FF88] hover:opacity-90 text-black font-medium h-12 rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Send className="h-4 w-4" />
                    Solicitar análise gratuita
                  </Button>

                  <div className="flex items-center justify-center mt-4 gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00FF88]"></div>
                    <p className="text-[#A0A0A0] text-center text-xs">
                      Seus dados estão protegidos. Não compartilhamos suas informações.
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-[#A0A0A0]">
              Mais de <span className="text-white font-medium">120 projetos</span> desenvolvidos com sucesso
            </p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00FF88" xmlns="http://www.w3.org/2000/svg" className="mx-0.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 -right-24 w-48 h-48 rounded-full bg-[#7F00FF]/10 blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-[#00FF88]/10 blur-3xl opacity-50"></div>
    </section>
  );
};

export default ContactForm; 