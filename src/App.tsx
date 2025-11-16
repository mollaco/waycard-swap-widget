import React, { useEffect } from 'react';
import {
  LiFiWidget,
  type WidgetConfig,
  HiddenUI,
} from '@lifi/widget';

// La API key viene de Vite (Vercel ya la tiene como VITE_LIFI_API_KEY)
const apiKey = import.meta.env.VITE_LIFI_API_KEY as string;

const widgetConfig: Partial<WidgetConfig> = {
  variant: 'compact',
  subvariant: 'default',
  appearance: 'light',

  // Siempre destino Polygon
  toChain: 137,

  languages: {
    default: 'es',
    allow: ['es', 'en'],
  },

  // Fees (0.8%) y dirección donde se envían
  fee: 0.008,
  feeRecipient: '0x190985CfcAa72062781a0558C1DD0Ad7c1fB3986',

  hiddenUI: [HiddenUI.PoweredBy, HiddenUI.Language],

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
        fontFamily:
          '"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
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
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'linear-gradient(135deg, #1a56db, #9333ea)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://waycard.club/images/blanco.png"
            alt="Waycard Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
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

      {/* Contenedor del widget */}
      <div
        style={{
          width: '100%',
          maxWidth: 620,
          borderRadius: 32,
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
        }}
      >
        <LiFiWidget apiKey={apiKey} integrator="Waycard Swap" config={widgetConfig} />
      </div>

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
