import React from 'react'
import ReactDOM from 'react-dom/client'
import { LiFiWidget } from '@lifi/widget'
import '@lifi/widget/styles.css'

const themeConfig = {
  variant: 'wide',
  appearance: 'system',
  theme: {
    colorSchemes: {
      light: {
        palette: {
          primary: { main: '#5C67FF' },
          secondary: { main: '#F7C2FF' }
        }
      },
      dark: {
        palette: {
          primary: { main: '#5C67FF' },
          secondary: { main: '#F7C2FF' }
        }
      }
    },
    typography: {
      fontFamily: 'Inter, sans-serif'
    },
    container: {
      boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
      borderRadius: '16px'
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{
      width: '420px',
      maxWidth: '100%',
      margin: '40px auto'
    }}>
      <LiFiWidget
        /** 🔐 TU CONFIG DE COMISIÓN */
        apiKey={import.meta.env.VITE_LIFI_API_KEY}
        integrator="waycard"
        fee={0.008}

        /** 🔧 CONFIG VISUAL */
        variant="wide"
        appearance="system"
        theme={themeConfig.theme}
      />
    </div>
  </React.StrictMode>,
)
