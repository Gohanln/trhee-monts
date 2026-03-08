import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

console.log('Starting app -- mounting React root')

const rootEl = document.getElementById('root')
function showErrorInDOM(err){
  if(!rootEl) return
  const text = String(err && (err.stack || err.message || err))
  rootEl.innerHTML = `<div style="padding:24px;color:#fff;background:#b91c1c;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Segoe UI Mono', monospace"><h2 style="margin:0 0 8px">Error al renderizar la app</h2><pre style="white-space:pre-wrap">${text.replace(/</g,'&lt;')}</pre></div>`
}

if (!rootEl) {
  console.error('No #root element found')
} else {
  try {
    createRoot(rootEl).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } catch (err) {
    console.error('Render error', err)
    showErrorInDOM(err)
  }

  window.addEventListener('error', (e) => {
    console.error('Unhandled error', e.error || e.message, e)
    showErrorInDOM(e.error || e.message)
  })
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection', e.reason)
    showErrorInDOM(e.reason || 'Unhandled rejection')
  })
}
