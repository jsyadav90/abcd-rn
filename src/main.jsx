// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </StrictMode>,
// )


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import axios from "axios"

import "./index.css";
import App from "./App.jsx";

// ✅ IMPORTANT: allow cookies in requests
// axios.defaults.withCredentials = true;

// (optional but recommended)
// axios.defaults.baseURL = "http://localhost:5000";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
