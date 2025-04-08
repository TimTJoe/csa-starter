import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "beercss";
import './assets/css/main.css'
import App from './App.jsx'
// import scan from "react-scan"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
