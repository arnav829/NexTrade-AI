import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'boxicons/css/boxicons.min.css';
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <App />
)
   