"use client";

import { useState } from 'react';
import { Star } from "lucide-react";

interface ToolsSectionProps {
    trackEvent?: (event: string, properties?: Record<string, any>) => void;
}

export default function ToolsSection({ trackEvent }: ToolsSectionProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleContaboClick = () => {
        // Track the affiliate click
        if (trackEvent) {
            trackEvent('contabo-affiliate-clicked', {
                affiliate_service: 'contabo',
                cta_location: 'tools-section',
                intent: 'hosting-affiliate'
            });
        }
    };

    return (
        <section className="py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold mb-4">Herramientas Recomendadas</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Las mejores herramientas y servicios que utilizamos y recomendamos para desarrollar soluciones de automatización robustas y escalables.
                    </p>
                </div>

                {/* Featured Tool - Contabo */}
                <div className="max-w-4xl mx-auto">
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Affiliate Badge */}
                        <div className="absolute -top-3 -right-3 z-10">
                            <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                <Star className="w-3 h-3" />
                                Recomendado
                            </div>
                        </div>

                        {/* Main Card */}
                        <div className="relative p-12 rounded-2xl bg-gradient-to-br from-background to-muted/50 shadow-xl hover:shadow-2xl transition-all duration-500 border border-muted group-hover:border-primary/30">
                            {/* Background Gradient Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    {/* Icon and Title */}
                                    <div className="flex-shrink-0 text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="https://contabo.com/favicon.ico"
                                                alt="Contabo Logo"
                                                className="w-10 h-10"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold">Contabo</h3>
                                            <p className="text-sm text-primary font-medium">Hosting Premium</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow text-center">
                                        <h4 className="text-xl font-semibold mb-3">
                                            Servidores VPS de Alto Rendimiento
                                        </h4>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            La infraestructura que confiamos para hospedar nuestras automatizaciones de IA y aplicaciones críticas.
                                            Servidores potentes, confiables y con excelente relación calidad-precio para proyectos de cualquier escala.
                                        </p>

                                        {/* Custom HTML Link */}
                                        <div className="flex justify-center">
                                            <a
                                                href="https://www.kqzyfj.com/ld104p-85-7NPOPRVTXVXNPTOQQRVO?sid=cmp_siteweb"
                                                target="_blank"
                                                onClick={handleContaboClick}
                                            >
                                                <img src="https://www.awltovhc.com/lp75snrflj46568CAECE46A5778C5" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-xl font-semibold mb-4">¿Por qué recomendamos Contabo?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 rounded-xl bg-background/50">
                                <h4 className="font-medium mb-2">Rendimiento Comprobado</h4>
                                <p className="text-sm text-muted-foreground">
                                    Hemos desplegado múltiples automatizaciones de IA con excelentes resultados de rendimiento.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-background/50">
                                <h4 className="font-medium mb-2">Precio Competitivo</h4>
                                <p className="text-sm text-muted-foreground">
                                    Excelente relación calidad-precio para proyectos de automatización empresarial.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-background/50">
                                <h4 className="font-medium mb-2">Soporte Técnico</h4>
                                <p className="text-sm text-muted-foreground">
                                    Soporte especializado que entiende las necesidades de aplicaciones de IA.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}