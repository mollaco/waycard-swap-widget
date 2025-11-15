// src/App.tsx
import React from 'react';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
// IMPORT CORRECTO DEL CSS (arregla el error de build)
import '@lifi/widget/styles.css';

const widgetConfig: Partial<WidgetConfig> = {
  // Usa la API key que ya has puesto en Vercel (variable de entorno)
  apiKey: import.meta.env.VITE_LIFI_API_KEY,

  // Layout del widget como en el playground
  variant: 'wide',
  subvariant: 'split',        // pestañas Swap / Bridge
  appearance: 'light',        // o 'dark' si quieres

  // Destino fijo: Polygon
  toChain: 137,               // chainId de Polygon

  // Slippage por defecto
  slippage: 0.005,

  // Tu comisión: 0.8%  (0.008)
  fee: 0.008,

  // Ocultamos cosas que no quieres
  hiddenUI: ['poweredBy', 'language', 'appearance'],

  // Estética del recuadro
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
