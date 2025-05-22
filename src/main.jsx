// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './context/Usercontext.jsx'
import { Provider } from 'react-redux'
// import Store from './redux/Store.js'
import Store from './redux/Store.js'


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <Usercontext>
    <App />
  </Usercontext>
  </Provider>
)
