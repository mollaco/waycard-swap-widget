// src/App.tsx
import React from 'react';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
// OJO: nombre correcto del CSS
import '@lifi/widget/styles.css';

const widgetConfig: Partial<WidgetConfig> = {
  // Tu API key de LI.FI (ya la has puesto en Vercel como VITE_LIFI_API_KEY)
  apiKey: import.meta.env.VITE_LIFI_API_KEY,

  // Apariencia general del widget
  variant: 'wide',        // como en el Playground
  subvariant: 'split',    // pestañas Swap / Bridge
  appearance: 'light',    // o 'dark' si quieres oscuro

  // Forzamos que el destino sea siempre Polygon
  toChain: 137,           // Polygon

  // Slippage por defecto (0,5%)
  slippage: 0.005,

  // Tu comisión: 0,8%  (0.008 = 0.8%)
  fee: 0.008,

  // Ocultamos branding, idioma y selector de tema
  hiddenUI: ['poweredBy', 'language', 'appearance'],

  // Tema del contenedor para que se parezca a tu mockup
  theme: {
    container: {
      boxShadow: '0px 18px 60px rgba(15, 23, 42, 0.20)',
      borderRadius: 24,
      border: '1px solid rgba(148, 163, 184, 0.25)',
      background: '#ffffff',
      maxWidth: 420,
    },
  },
};

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15) 0, transparent 55%),' +
          'radial-gradient(circle at 100% 100%, rgba(56,189,248,0.12) 0, transparent 55%),' +
          'linear-gradient(180deg,#0f172a,#020617)',
        padding: '24px',
      }}
    >
      <LiFiWidget integrator="waycard-swap-widget" config={widgetConfig} />
    </div>
  );
};

export default App;
