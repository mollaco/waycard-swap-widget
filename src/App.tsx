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

  // Comisión (0.8%)
  fee: 0.008,

  // Ocultar marca LI.FI y selector de idioma dentro del widget
  hiddenUI: [HiddenUI.PoweredBy, HiddenUI.Language],

  // Quitamos sombra y bordes internos del contenedor de LI.FI
  theme: {
    container: {
      borderRadius: 0,
      boxShadow: 'none',
      background: '#ffffff',
      padding: 0,
    },
  },
};

const App: React.FC = () => {
  // Evitar scroll del documento dentro del iframe
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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* CARD principal sin sombra gris */}
      <div
        style={{
          width: '100%',
          maxWidth: 560,
          borderRadius: 28,
          background: '#ffffff',
          boxShadow: 'none', // sin halo gris
          border: '1px solid rgba(226, 232, 240, 0.9)', // marco muy suave
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header igual que en la web */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
            background: '#ffffff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 12,
                background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 22px rgba(79, 70, 229, 0.45)',
              }}
            >
              {/* blanco.png o waycard-logo.png en /public */}
              <img
                src="/waycard-logo.png"
                alt="Waycard"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: '1.05rem',
                letterSpacing: '-0.03em',
                color: '#0f172a',
              }}
            >
              Waycard
            </span>
          </div>
        </div>

        {/* Widget LI.FI dentro del card */}
        <div style={{ padding: 20 }}>
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
          color: '#9ca3af',
          textAlign: 'center',
        }}
      >
        By <span style={{ fontWeight: 600 }}>Powered Waynance</span>
      </div>
    </div>
  );
};

export default App;
