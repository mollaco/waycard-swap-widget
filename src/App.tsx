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

  // Estilo contenedor principal del widget
  theme: {
    container: {
      borderRadius: 24,
      boxShadow: 'none',        // sin sombra gris
      background: '#ffffff',
    },
  },
};

const App: React.FC = () => {
  // Evitar scroll en el documento dentro del iframe
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
        background: '#ffffff',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Waycard */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: '#ffffff',
          padding: '10px 18px',
          borderRadius: 999,
          boxShadow: '0 6px 20px rgba(15, 23, 42, 0.15)',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 12,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Usa el logo blanco con fondo azul (cópialo en /public) */}
          <img
            src="/waycard-logo.png"
            alt="Waycard"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <span
          style={{
            fontWeight: 700,
            fontSize: '1rem',
            color: '#0f172a',
          }}
        >
          Waycard
        </span>
      </div>

      {/* Widget LI.FI */}
      <div
        style={{
          width: '100%',
          maxWidth: 520,
          maxHeight: '80vh',
          overflow: 'hidden',
          borderRadius: 24,
          boxShadow: '0 24px 64px rgba(15, 23, 42, 0.18)',
          background: '#ffffff',
        }}
      >
        <LiFiWidget
          apiKey={apiKey}
          integrator="Waycard Swap"
          config={widgetConfig}
        />
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
