/**
 * <src/main.jsx>
 * Entry point of the React app, rendering App.jsx inside <div id="root"></div>.
 * - Imports global styles (index.css).
 * - Uses React 18's `createRoot()` for optimized rendering.
 * - Wraps App in `StrictMode` for development checks.
 * Modify only for global providers (e.g., Redux) or custom rendering.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
