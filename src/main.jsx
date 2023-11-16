import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { MoviesApp } from './MoviesApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoviesApp />
  </React.StrictMode>,
)
