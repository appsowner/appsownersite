"use client";

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Eye } from 'lucide-react';

interface CookieBannerProps {
    onAccept: () => void;
    onReject: () => void;
}

export default function CookieBanner({ onAccept, onReject }: CookieBannerProps) {
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
            <div className="w-full max-w-md bg-background border border-border rounded-lg shadow-2xl pointer-events-auto animate-in slide-in-from-bottom-5 duration-300">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Cookie className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold text-lg">Uso de Cookies</h3>
                        </div>
                        <button
                            onClick={handleClose}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
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
                                <div className="bg-muted/30 rounded-lg p-4 space-y-3 text-sm">
                                    <div>
                                        <h4 className="font-medium flex items-center gap-2 mb-2">
                                            <Shield className="w-4 h-4 text-green-600" />
                                            Cookies de Análisis (Umami)
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Recopilamos datos anónimos sobre el uso del sitio para mejorar nuestros servicios. Esto incluye páginas visitadas, tiempo de permanencia y acciones realizadas.
                                        </p>
                                    </div>

                                    <div className="border-t pt-3">
                                        <h4 className="font-medium mb-2">Datos que recopilamos:</h4>
                                        <ul className="text-muted-foreground space-y-1">
                                            <li>• Páginas visitadas y tiempo de permanencia</li>
                                            <li>• Interacciones con elementos del sitio</li>
                                            <li>• Información del dispositivo y navegador</li>
                                            <li>• Ubicación geográfica aproximada</li>
                                        </ul>
                                    </div>

                                    <div className="border-t pt-3">
                                        <p className="text-muted-foreground">
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
                                className="flex-1 px-4 py-2 text-sm border border-border rounded-lg hover:bg-muted/50 transition-colors"
                            >
                                Rechazar
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Aceptar
                            </button>
                        </div>

                        {/* Legal note */}
                        <p className="text-xs text-muted-foreground">
                            Al continuar navegando sin cambiar la configuración, aceptas el uso de cookies de acuerdo con nuestra política de privacidad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}