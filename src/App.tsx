// src/App.tsx
import React, { useMemo } from 'react';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import '@lifi/widget/styles.css'; // MUY IMPORTANTE

const App: React.FC = () => {
  // Configuración del widget
  const widgetConfig: WidgetConfig = useMemo(
    () => ({
      // ===== Apariencia y layout =====
      variant: 'compact',          // diseño compacto (perfecto para el modal/iframe)
      subvariant: 'split',         // pestañas internas
      subvariantOptions: {
        split: 'swap',             // solo "Swap", sin pestaña "Bridge"
      },
      appearance: 'light',         // siempre claro (puedes poner 'auto' si quieres)
      hiddenUI: [
        'language',                // ocultar selector de idioma
        'appearance',              // ocultar selector light/dark
        'poweredBy',               // OCULTA "Powered by LI.FI"
        'history',                 // si no quieres mostrar historial
      ],

      // ===== Tema (colores y bordes) para parecerse a tu diseño =====
      theme: {
        container: {
          borderRadius: 24,
          boxShadow: '0px 32px 80px rgba(15, 23, 42, 0.25)',
          maxHeight: 686,
        },
        palette: {
          primary: { main: '#1A56DB' },   // azul Waycard
          secondary: { main: '#0EA5E9' },
          background: {
            default: '#0B1120',
            paper: '#0F172A',
          },
          text: {
            primary: '#0F172A',
            secondary: '#64748B',
          },
        },
        shape: {
          borderRadius: 16,
          borderRadiusSecondary: 16,
        },
        typography: {
          fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        },
      },

      // ===== Destino obligado: Polygon =====
      toChain: 137, // Polygon Mainnet

      // Tokens permitidos en destino: USDT, USDC y POL/MATIC en Polygon
      tokens: {
        allow: [
          {
            // USDT en Polygon
            chainId: 137,
            address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          },
          {
            // USDC en Polygon
            chainId: 137,
            address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          },
          {
            // POL/MATIC nativo (address cero)
            chainId: 137,
            address: '0x0000000000000000000000000000000000000000',
          },
        ],
      },

      // Preseleccionar destino por defecto a USDT en Polygon
      toToken: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',

      // ===== Fee / monetización =====
      // Opción simple (0.8%) – lo ve el usuario como fee de Waycard
      feeConfig: {
        name: 'Waycard fee',
        logoURI: 'https://waycard.club/images/blanco.png', // pon aquí tu logo
        fee: 0.008,                     // 0.8 %
        showFeePercentage: true,        // mostrar el porcentaje en la UI
        showFeeTooltip: true,           // mostrar tooltip con detalles
      },

      // ===== Config de idioma =====
      languages: {
        default: 'en',    // interfaz del widget en inglés
        allow: ['en', 'es'],
      },

      // ===== Wallet management =====
      walletConfig: {
        // El widget gestiona internamente todas las wallets (EVM, Solana, etc.)
        forceInternalWalletManagement: true,
      },

      // ===== SDK avanzado opcional =====
      sdkConfig: {
        executionOptions: {
          // Por si algún smart account da problemas con firmas:
          // disableMessageSigning: true,
        },
      },
    }),
    [],
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <LiFiWidget
        integrator="waycard"                         // nombre de tu integración
        apiKey={import.meta.env.VITE_LIFI_API_KEY}   // API Key de Li.FI (.env)
        config={widgetConfig}
      />
    </div>
  );
};

export default App;
