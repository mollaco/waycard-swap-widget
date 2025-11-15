import React from 'react';
import {
  LiFiWidget,
  type WidgetConfig,
  HiddenUI,
} from '@lifi/widget';

const apiKey = import.meta.env.VITE_LIFI_API_KEY;

// Configuración del widget
const widgetConfig: Partial<WidgetConfig> = {
  // Layout: tipo de widget
  variant: 'compact',          // o 'wide' si lo prefieres más ancho
  subvariant: 'default',
  appearance: 'light',

  // Queremos que siempre vaya hacia Polygon
  toChain: 137,                // Polygon mainnet

  // Idioma
  languages: {
    default: 'es',
    allow: ['es', 'en'],
  },

  // Comisión para ti (0.8% = 0.008)
  fee: 0.008,

  // Ocultar marca de LI.FI y selector de idioma dentro del widget
  hiddenUI: [HiddenUI.PoweredBy, HiddenUI.Language],

  // Estilo del contenedor (tarjeta central)
  theme: {
    container: {
      borderRadius: 24,
      boxShadow: '0px 24px 64px rgba(15, 23, 42, 0.35)',
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
        background: '#020617', // fondo oscuro tipo modal en el centro
      }}
    >
      <LiFiWidget
        apiKey={apiKey}
        integrator="Waycard Swap"
        config={widgetConfig}
      />
    </div>
  );
};

export default App;
