import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Landing Page e-Commerce",
      category: "E-commerce",
      gradient: "from-[#7F00FF]/20 to-[#00FF88]/20"
    },
    {
      id: 2,
      title: "Site Institucional",
      category: "Corporate",
      gradient: "from-[#00FF88]/20 to-[#7F00FF]/20"
    },
    {
      id: 3,
      title: "Landing de Conversão",
      category: "Marketing",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      id: 4,
      title: "Plataforma SaaS",
      category: "Technology",
      gradient: "from-blue-500/20 to-green-500/20"
    },
    {
      id: 5,
      title: "Website de Serviços",
      category: "Services",
      gradient: "from-[#7F00FF]/20 to-pink-500/20"
    },
    {
      id: 6,
      title: "Blog Profissional",
      category: "Content",
      gradient: "from-green-500/20 to-[#7F00FF]/20"
    }
  ];

  // Duplicate projects multiple times for continuous scrolling
  const allProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <section className="py-16 relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Conheça nosso <span className="text-[#00FF88]">Trabalho</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            Projetos que transformaram a presença digital de nossos clientes
          </p>
        </div>
      </div>

      {/* Full-width infinite carousel */}
      <div className="w-full overflow-hidden py-8">
        <div className="flex flex-nowrap animate-[carousel_40s_linear_infinite]">
          {allProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-[300px] h-[380px] mx-4 rounded-xl overflow-hidden relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:opacity-70 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 border border-white/10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#00FF88] text-sm font-medium mb-2 inline-block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-sm text-white hover:text-[#00FF88] transition cursor-pointer">
                        Ver projeto
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project preview elements */}
              <div className="absolute top-6 left-6 right-6 bottom-1/2 bg-[#1C1C1E]/80 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="w-full h-full p-4 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#00FF88]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#7F00FF]"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-3 w-3/4 bg-white/20 rounded-full"></div>
                    <div className="h-8 w-full bg-[#7F00FF]/30 rounded-md"></div>
                    <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
