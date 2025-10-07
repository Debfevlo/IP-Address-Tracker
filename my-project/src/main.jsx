import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IPProvider } from './context/IpContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IPProvider>
           <App />
    </IPProvider>
     
  </StrictMode>,
)
