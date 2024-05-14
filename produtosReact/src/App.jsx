import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Minha Aplicação de Produtos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/form-produtos">Formulário de Produtos</Link>
          </li>
          <li>
            <Link to="/tabela-produtos">Tabela de Produtos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;