import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'; // if using Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper

import '@fortawesome/fontawesome-free/css/all.min.css'; // ✅ Font Awesome
import './index.css'

createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>

)
