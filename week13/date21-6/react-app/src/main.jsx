import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Color from './Color.jsx'
import Counter from './Counter.jsx'
import Toggle from './Toggle.jsx'
import Like from './Like.jsx'
import BackColor from './BackColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Color /> */}
    {/* <App/> */}
    {/* <Counter/> */}
    {/* <Toggle/> */}
    <BackColor/>
  </StrictMode>,
)
