import React, { useEffect } from 'react';
import {
  LiFiWidget,
  type WidgetConfig,
  HiddenUI,
} from '@lifi/widget';

const apiKey = import.meta.env.VITE_LIFI_API_KEY;

// Configuración del widget
const widgetConfig: Partial<WidgetConfig> = {
  variant: 'compact',
  subvariant: 'default',
  appearance: 'light',

  // Siempre hacia Polygon
  toChain: 137,

  // Idiomas
  languages: {
    default: 'es',
    allow: ['es', 'en'],
  },

  // Comisión (0.8 %)
  fee: 0.008,

  // Ocultar marca LI.FI y selector de idioma
  hiddenUI: [HiddenUI.PoweredBy, HiddenUI.Language],

  // Contenedor interno del widget
  theme: {
    container: {
      borderRadius: 0,       // dejamos el marco al wrapper externo
      boxShadow: 'none',     // sin sombras internas
      background: '#ffffff',
    },
  },
};

const App: React.FC = () => {
  // Evitar scroll de la página dentro del iframe
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalMargin = document.body.style.margin;

    document.body.style.overflow = 'hidden';
    document.body.style.margin = '0';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.margin = originalMargin;
    };
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        boxSizing: 'border-box',
        background: 'transparent', // que se vea tu overlay con blur
      }}
    >
      {/* Card completa sin sombras grises */}
      <div
        style={{
          width: '100%',
          maxWidth: 520,
          borderRadius: 28,
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          boxShadow: 'none', 
        }}
      >
        {/* Barra de marca arriba, sin círculo ni pastilla flotante */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 20px',
            borderBottom: '1px solid #e5e7eb',
            background: '#f9fafb',
          }}
        >
          <img
            src="/waycard-logo.png" // el PNG que has subido a /public
            alt="Waycard"
            style={{
              width: 32,
              height: 32,
              objectFit: 'contain',  // respeta tu icono tal cual
            }}
          />
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.05rem',
              color: '#0f172a',
              letterSpacing: '-0.02em',
            }}
          >
            Waycard
          </span>
        </div>

        {/* Widget Li.Fi dentro de la tarjeta */}
        <div
          style={{
            padding: 0, // que el widget se pegue al borde
          }}
        >
          <LiFiWidget
            apiKey={apiKey}
            integrator="Waycard Swap"
            config={widgetConfig}
          />
        </div>
      </div>

      {/* Footer Powered Waynance */}
      <div
        style={{
          marginTop: 10,
          fontSize: 12,
          color: '#6b7280',
          textAlign: 'center',
        }}
      >
        By <strong>Powered Waynance</strong>
      </div>
    </div>
  );
};

export default App;
