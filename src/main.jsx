import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App.jsx'
import Info from './components/Info.jsx'
import "./styles/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
