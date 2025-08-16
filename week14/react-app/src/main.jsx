import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Counter2 from './Counter2.jsx'
import List from './List.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <List/>
  </StrictMode>
)
