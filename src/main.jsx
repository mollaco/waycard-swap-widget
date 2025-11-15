import React from 'react';
import ReactDOM from 'react-dom/client';
import { LiFiWidget } from '@lifi/widget';

const widgetConfig = {
  variant: 'wide',
  appearance: 'system',
  theme: {
    colorSchemes: {
      light: {
        palette: {
          primary: { main: '#5C67FF' },
          secondary: { main: '#F7C2FF' },
        },
      },
      dark: {
        palette: {
          primary: { main: '#5C67FF' },
          secondary: { main: '#F7C2FF' },
        },
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
    },
    container: {
      boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
      borderRadius: '16px',
    },
  },
};

const App = () => (
  <div style={{ padding: '16px' }}>
    <LiFiWidget integrator="waycard" config={widgetConfig} />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
