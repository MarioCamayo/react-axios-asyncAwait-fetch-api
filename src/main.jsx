import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AwaitApi } from './components/AwaitApi'
import { AxiosApi } from './components/AxiosApi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AwaitApi /> */}
    <AxiosApi />
  </StrictMode>,
)
