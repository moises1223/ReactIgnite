import { StrictMode } from 'react' //core do react
import { createRoot } from 'react-dom/client'//integração do core react com DOM para web 
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
