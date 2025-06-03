import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const generateLandingPageMessage = () => {
  return encodeURIComponent('Olá! Gostaria de iniciar um projeto de desenvolvimento digital. Tenho interesse específico em discutir detalhes, prazos e valores para começar o quanto antes.');
};

const CTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Transforme sua <span className="text-[#00FF88]">Presença Digital</span> Hoje
          </h2>
          <p className="text-base md:text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Escolha o caminho ideal para impulsionar seu negócio e conquistar mais clientes online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-black/30 backdrop-blur-sm border-gray-700/50 hover:border-[#00FF88]/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white mb-2">Desenvolvimento Direto</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Deseja um site ou landing page profissional? Entre em contato agora e comece seu projeto em até 24h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-semibold text-lg py-6"
                onClick={() => window.open(`https://wa.me/5516999891209?text=${generateLandingPageMessage()}`, '_blank')}
              >
                Iniciar Projeto Agora
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur-sm border-gray-700/50 hover:border-[#00FF88]/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-white mb-2">Análise Especializada</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Receba um diagnóstico completo do seu negócio digital e descubra oportunidades de crescimento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-[#00FF88] hover:bg-[#00FF88]/90 text-black font-semibold text-lg py-6"
                onClick={() => window.location.href = '/analise'}
              >
                Solicitar Análise Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA; 