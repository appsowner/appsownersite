"use client";

import { useState } from 'react';
import { ArrowRight, Brain, Cpu, Bot, Workflow, Mail, Sparkles, Book } from "lucide-react";

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const whatsappNumber = "+56920927406"; // Reemplaza con tu número real
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios de IA y Academia.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: 'Automatizacion con IA y flujos de trabajo', 
      desc: 'Soluciones personalizadas de IA para automatizar los procesos con flujos de trabajo de tu negocio con automatización inteligente' 
    },
    { 
      icon: <Bot className="w-8 h-8" />, 
      title: 'Chatbots y Asistentes Virtuales', 
      desc: 'Interfaces conversacionales impulsadas por IA.' 
    },
    { 
      icon: <Cpu className="w-8 h-8" />, 
      title: 'Predicciones y Análisis con Modelos de Lenguaje Grande (LLM).', 
      desc: 'Aprovecha el poder de los modelos de lenguaje grande para obtener información avanzada y predicciones' 
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Academy IA',
      desc: 'Aprende a construir e integrar automatizaciones para negocios con soluciones inteligentes y optimizadas para mejorar la eficiencia y productividad de tu empresa.'
    }

  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
               <div className="text-center">
                 <p className="text-center text-sm sm:text-base font-medium mb-6 -mt-1">
                  <span className="text-primary">Innovación</span> del <span className="text-secondary">futuro</span> presente hoy
                </p>
                <img 
                  src="/logo_t.png" 
                  alt="AppsOwner Logo" 
                  className="mx-auto w-48 h-auto mb-0" 
                />
                {/* Slogan added here, smaller and right below the logo */}
             
              </div>
              
          <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto text-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 break-words">
    Automatización <span className="text-primary">Inteligente</span> para tu <span className="text-secondary">Negocio.</span>
  </h1>
  <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto">
    Transforma tu negocio con soluciones de automatización de IA de vanguardia que impulsan la eficiencia y la innovación.
  </p>
</div>

            <div className="flex gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-all"
              >
               Comencemos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
             
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-gradient-to-l from-secondary/20 to-transparent rounded-l-full blur-3xl" />
      </section>

      {/* Services Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">Nuestros servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aprovecha el poder de la IA para transformar las operaciones de tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl bg-background shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
                <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300 rounded-b-xl
                  ${hoveredService === index ? 'w-full' : 'w-0'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">Porque elegir AppsOwner</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones de automatización inteligente que generan un valor real para el negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-muted/30">
              <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
              <p className="text-muted-foreground">
                Nuestro equipo de especialistas en IA aporta años de experiencia en el desarrollo de soluciones de automatización personalizadas.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/30">
              <h3 className="text-xl font-semibold mb-4">Innovación</h3>
              <p className="text-muted-foreground">
                Nos mantenemos a la vanguardia de la tecnología de IA para ofrecer soluciones innovadoras y de última generación.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/30">
              <h3 className="text-xl font-semibold mb-4">Resultados</h3>
              <p className="text-muted-foreground">
                Nuestras soluciones ofrecen mejoras medibles en eficiencia y productividad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">¿Listo para automatizar?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Hablemos sobre cómo podemos transformar tu negocio con automatización inteligente.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>© 2022 AO AppsOwner Spa. All rights reserved.</p>
            <a href="mailto:contacto@appsowner.com" className="text-primary hover:underline mt-2 inline-block">
              contacto@appsowner.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
