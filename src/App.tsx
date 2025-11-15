// src/App.tsx
import React, { useMemo } from 'react';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import '@lifi/widget/style.css'; // OJO: style.css (sin "s")

const App: React.FC = () => {
  const apiKey = import.meta.env.VITE_LIFI_API_KEY as string | undefined;

  // Configuración del widget
  const widgetConfig = useMemo(
    (): Partial<WidgetConfig> => ({
      // --- Autenticación / fees ---
      apiKey,                 // Tu API key de LI.FI (desde Vercel)
      fee: 0.008,             // 0.8% de comisión para ti (ligado a tu API key)

      // --- Flujo por defecto: de cualquier red hacia Polygon ---
      // El usuario puede cambiarlo si quiere, pero aquí le ayudas
      toChain: 137,           // Polygon
      // USDT en Polygon como token destino por defecto
      toToken: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',

      // --- Apariencia / UI ---
      variant: 'wide',        // Como en tu captura del playground
      subvariant: 'default',  // Flujo normal "Exchange"
      appearance: 'light',    // O 'auto' si quieres que siga el sistema

      // Puedes ocultar elementos de UI
      hiddenUI: [
        'language',     // ocultar selector de idioma
        'appearance',   // ocultar switch light/dark
        'poweredBy',    // oculta "Powered by LI.FI"
      ],

      // Idiomas permitidos (aunque no se vea el selector)
      languages: {
        default: 'es',
        allow: ['es', 'en'],
      },

      // Tema: bordes redondeados, sombra y responsivo
      theme: {
        container: {
          borderRadius: 24,
          boxShadow: '0px 18px 40px rgba(15, 23, 42, 0.20)',
          maxWidth: 420,
          width: '100%',
        },
      },

      // Opcionalmente puedes forzar solo swap (no bridge)
      // subvariant: 'split',
      // subvariantOptions: { split: 'swap' },

      // Más adelante podemos afinar routes, chains, tokens, etc.
    }),
    [apiKey]
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background:
          'linear-gradient(135deg, #f5f7ff 0%, #f9fafb 30%, #eef2ff 100%)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 420 }}>
        <LiFiWidget integrator="waycard.club" config={widgetConfig} />
      </div>
    </div>
  );
};

export default App;
