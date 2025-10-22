import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FinanceApp from "./FinanceApp";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // ✅ import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap your app */}
      <FinanceApp />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
