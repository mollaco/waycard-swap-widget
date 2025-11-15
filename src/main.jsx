import React from 'react';
import ReactDOM from 'react-dom/client';
import { LiFiWidget } from '@lifi/widget';

// ⚠️ IMPORTANTE: NO importar '@lifi/widget/styles.css' porque en Vercel da error.
// El widget ya viene con estilos integrados suficientes.

const widgetConfig = {
  // Tu identificador de integrador en Li.Fi
  integrator: 'waycard',

  // Apariencia / diseño básico
  variant: 'wide',
  appearance: 'light', // o "dark" o "auto"

  // Configuración del SDK de Li.Fi
  sdkConfig: {
    // Tu API key de Li.Fi, viene desde Vercel: VITE_LIFI_API_KEY
    apiKey: import.meta.env.VITE_LIFI_API_KEY,

    // Opciones por defecto para todas las rutas de swap
    defaultRouteOptions: {
      // De nuevo, tu integrador (para atribución de volumen)
      integrator: 'waycard',

      // Fee del 0.8% (0.008 = 0.8%)
      fee: 0.008,
    },
  },
};

function App() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f3f4f6',
      }}
    >
      <div
        style={{
          width: '420px',
          maxWidth: '100%',
        }}
      >
        <LiFiWidget config={widgetConfig} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
