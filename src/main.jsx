import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * ESTE É O MOTOR DO SITE (main.jsx)
 * 1. Ele importa o motor do React.
 * 2. Ele importa o componente principal do site (App.jsx).
 * 3. Ele importa os estilos (index.css).
 * 4. Ele coloca todo o site dentro da 'div root' do index.html.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)