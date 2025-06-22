"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Cpu, Bot, Workflow, Mail, Sparkles, Book, X, Cookie, Shield, Eye } from "lucide-react";

// Declare umami globally
declare global {
  interface Window {
    umami?: {
      track: (event: string, properties?: Record<string, any>) => void;
      identify: (id: string) => void;
    };
  }
}

// Cookie Banner Component
function CookieBanner({ onAccept, onReject }: { onAccept: () => void; onReject: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    onReject();
  };

  const handleClose = () => {
    // If user closes without choosing, we'll ask again next session
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="w-full max-w-md bg-background border border-gray-200 rounded-lg shadow-2xl pointer-events-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Uso de Cookies</h3>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Utilizamos cookies y herramientas de análisis como Umami para mejorar tu experiencia en nuestro sitio web y entender cómo interactúas con nuestro contenido.
            </p>

            {/* Details section */}
            <div className="space-y-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
              </button>

              {showDetails && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      Cookies de Análisis (Umami)
                    </h4>
                    <p className="text-gray-600">
                      Recopilamos datos anónimos sobre el uso del sitio para mejorar nuestros servicios. Esto incluye páginas visitadas, tiempo de permanencia y acciones realizadas.
                    </p>
                  </div>

                  <div className="border-t pt-3">
                    <h4 className="font-medium mb-2">Datos que recopilamos:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Páginas visitadas y tiempo de permanencia</li>
                      <li>• Interacciones con elementos del sitio</li>
                      <li>• Información del dispositivo y navegador</li>
                      <li>• Ubicación geográfica aproximada</li>
                    </ul>
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-gray-600">
                      <strong>Nota:</strong> Umami es una herramienta de análisis que respeta la privacidad y no utiliza cookies tradicionales de tracking.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Aceptar
              </button>
            </div>

            {/* Legal note */}
            <p className="text-xs text-gray-500">
              Al continuar navegando sin cambiar la configuración, aceptas el uso de cookies de acuerdo con nuestra política de privacidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  const whatsappNumber = "+56920927406";
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios de IA y Academia.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Automatizacion con IA y flujos de trabajo',
      desc: 'Soluciones personalizadas de IA para automatizar los procesos con flujos de trabajo de tu negocio con automatización inteligente',
      slug: 'automatizacion-ia'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Chatbots y Asistentes Virtuales',
      desc: 'Interfaces conversacionales impulsadas por IA.',
      slug: 'chatbots'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Predicciones y Análisis con Modelos de Lenguaje Grande (LLM).',
      desc: 'Aprovecha el poder de los modelos de lenguaje grande para obtener información avanzada y predicciones',
      slug: 'predicciones-llm'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Academy IA',
      desc: 'Aprende a construir e integrar automatizaciones para negocios con soluciones inteligentes y optimizadas para mejorar la eficiencia y productividad de tu empresa.',
      slug: 'academy-ia'
    }
  ];

  // Check cookie consent on load
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (cookieConsent === 'accepted') {
      setCookiesAccepted(true);
    } else if (cookieConsent === 'rejected') {
      setCookiesAccepted(false);
    }
  }, []);

  // Analytics functions - only track if cookies are accepted
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (cookiesAccepted && typeof window !== 'undefined' && window.umami) {
      window.umami.track(event, properties);
    }
  };

  // Handle cookie acceptance
  const handleCookieAccept = () => {
    setCookiesAccepted(true);
    // Track the acceptance event
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('cookie-consent-accepted', {
        timestamp: new Date().toISOString(),
        page: 'homepage'
      });
    }
  };

  // Handle cookie rejection
  const handleCookieReject = () => {
    setCookiesAccepted(false);
    // Optionally track rejection (without personal data)
    console.log('Cookies rechazadas por el usuario');
  };

  // Track page view and session start - only if cookies accepted
  useEffect(() => {
    if (cookiesAccepted) {
      trackEvent('homepage-loaded', {
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );

        if (scrollPercent > maxScrollDepth && scrollPercent % 25 === 0) {
          maxScrollDepth = scrollPercent;
          trackEvent('scroll-depth', {
            depth: `${scrollPercent}%`,
            page: 'homepage'
          });
        }
      };

      window.addEventListener('scroll', trackScrollDepth);
      return () => window.removeEventListener('scroll', trackScrollDepth);
    }
  }, [cookiesAccepted]);

  // Track service card interactions
  const handleServiceHover = (service: typeof services[0], index: number) => {
    setHoveredService(index);
    trackEvent('service-card-hover', {
      service_name: service.title,
      service_slug: service.slug,
      card_position: index + 1
    });
  };

  // Track WhatsApp CTA clicks
  const handleWhatsAppClick = (location: string) => {
    trackEvent('whatsapp-cta-clicked', {
      cta_location: location,
      cta_text: location === 'hero' ? 'Comencemos' : 'Contactar',
      intent: 'lead-generation'
    });
  };

  // Track email clicks
  const handleEmailClick = () => {
    trackEvent('email-clicked', {
      email: 'contacto@appsowner.com',
      location: 'footer'
    });
  };

  // Track value proposition views
  const handleValuePropView = (prop: string) => {
    trackEvent('value-prop-viewed', {
      proposition: prop,
      section: 'why-choose-us'
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Cookie Banner */}
      <CookieBanner onAccept={handleCookieAccept} onReject={handleCookieReject} />

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
                onLoad={() => trackEvent('logo-loaded', { location: 'hero' })}
              />
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
                onClick={() => handleWhatsAppClick('hero')}
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
                className="relative p-8 rounded-xl bg-background shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => handleServiceHover(service, index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => trackEvent('service-card-clicked', {
                  service_name: service.title,
                  service_slug: service.slug,
                  card_position: index + 1,
                  interaction_type: 'click'
                })}
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
            <div
              className="p-6 rounded-xl bg-muted/30 hover:bg-muted/40 transition-colors cursor-pointer"
              onClick={() => handleValuePropView('experiencia')}
            >
              <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
              <p className="text-muted-foreground">
                Nuestro equipo de especialistas en IA aporta años de experiencia en el desarrollo de soluciones de automatización personalizadas.
              </p>
            </div>
            <div
              className="p-6 rounded-xl bg-muted/30 hover:bg-muted/40 transition-colors cursor-pointer"
              onClick={() => handleValuePropView('innovacion')}
            >
              <h3 className="text-xl font-semibold mb-4">Innovación</h3>
              <p className="text-muted-foreground">
                Nos mantenemos a la vanguardia de la tecnología de IA para ofrecer soluciones innovadoras y de última generación.
              </p>
            </div>
            <div
              className="p-6 rounded-xl bg-muted/30 hover:bg-muted/40 transition-colors cursor-pointer"
              onClick={() => handleValuePropView('resultados')}
            >
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
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick('contact-section')}
            className="group bg-primary text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-all"
          >
            Comenzar conversación
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>© 2022 AO AppsOwner Spa. All rights reserved.</p>
            <a
              href="mailto:contacto@appsowner.com"
              className="text-primary hover:underline mt-2 inline-block"
              onClick={handleEmailClick}
            >
              contacto@appsowner.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}