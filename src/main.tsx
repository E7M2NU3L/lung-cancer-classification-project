import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ViteQueryContextProvider from './providers/vite-react-query.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViteQueryContextProvider>
      <main className='overflow-x-hidden'>
        <App />
      </main>
    </ViteQueryContextProvider>
  </StrictMode>,
)
