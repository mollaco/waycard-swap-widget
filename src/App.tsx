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

  // Ocultar marca LI.FI y selector de idioma dentro del widget
  hiddenUI: [HiddenUI.PoweredBy, HiddenUI.Language],

  // Estilo contenedor principal del widget (sin sombra gorda)
  theme: {
    container: {
      borderRadius: 32,
      boxShadow: 'none',
      background: '#ffffff',
    },
  },
};

const App: React.FC = () => {
  // Evitar scroll dentro del iframe
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
        fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
     {/* Header Waycard */}
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '6px 18px',
    borderRadius: 999,
    background: '#ffffff',
    marginBottom: 14,
  }}
>
  {/* Logo tal cual el de /public/waycard-logo.png */}
  <div
    style={{
      width: 40,
      height: 40,
      borderRadius: 12,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img
      src="/waycard-logo.png"
      alt="Waycard Logo"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block',
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


      {/* Contenedor del widget – sin caja gris alrededor */}
      <div
        style={{
          width: '100%',
          maxWidth: 620,
          borderRadius: 32,
          background: '#ffffff',
          border: '1px solid #e5e7eb', // línea fina para marcar el borde, sin sombra
          overflow: 'hidden',
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
