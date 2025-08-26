import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Iphone } from './screens/Iphone/Iphone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen w-full flex justify-center items-start bg-neutral-100">
      <div style={{ width: 'min(390px, 100vw)' }}>
        <Iphone />
      </div>
    </div>
  </StrictMode>,
)
