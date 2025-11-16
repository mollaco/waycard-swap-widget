import React from 'react';
import {
  LiFiWidget,
  type WidgetConfig,
  HiddenUI,
} from '@lifi/widget';

// La API key viene de Vite (Vercel ya la tiene como VITE_LIFI_API_KEY)
const apiKey = import.meta.env.VITE_LIFI_API_KEY as string;

const widgetConfig: Partial<WidgetConfig> = {
  // Layout del widget
  variant: 'compact',
  subvariant: 'default',
  appearance: 'light',

  // Siempre destino Polygon
  toChain: 137, // Polygon mainnet

  // Idiomas
  languages: {
    default: 'es',
    allow: ['es', 'en'],
  },

  // Fees (0.8%) y dirección donde se envían
  fee: 0.008, // 0.8%
  feeRecipient: '0x190985CfcAa72062781a0558C1DD0Ad7c1fB3986',

  // Ocultar branding interno de LiFi
  hiddenUI: [HiddenUI.PoweredBy, HiddenUI.Language],

  // Estilo del contenedor del widget
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
        background: '#ffffff', // el fondo blanco que tienes ahora
      }}
    >
      <LiFiWidget
        apiKey={apiKey}
        integrator="waycard-web"
        config={widgetConfig}
      />
    </div>
  );
};

export default App;
