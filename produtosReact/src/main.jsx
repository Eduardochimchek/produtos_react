// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import FormProdutosRoute from './routes/FormProdutos';
import TabelaProdutosRoute from './routes/TabelaProdutos';
import ErrorPage from './routes/ErrorPage'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form-produtos/:id" element={<FormProdutosRoute />} />
        <Route path="/tabela-produtos" element={<TabelaProdutosRoute />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
