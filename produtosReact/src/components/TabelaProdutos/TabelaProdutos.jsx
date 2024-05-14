import React, { useState, useEffect } from 'react';
import './TabelaProdutos.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TabelaProdutos() {
  const [produtos, setProdutos] = useState([]);

  const navigate = useNavigate();

  const handleEditarProduto = (id) => {
    navigate(`/form-produtos/${id}`);
  };

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const excluirProduto = (id) => {
    fetch(`http://localhost:3000/produtos/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      const produtosFiltrados = produtos.filter((prod) => prod.id !== id);
      setProdutos(produtosFiltrados);
    })
    .catch(error => console.error('Erro ao excluir produto:', error));
  };

  return (
    <div>
      {produtos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Código do Produto</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque (kg)</th>
              <th style={{textAlign: "center"}}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>R$ {prod.price}</td>
                <td>{prod.stock}</td>
                <td className="actions">
                  <button onClick={() => handleEditarProduto(prod.id)}>Editar</button>
                  <button onClick={() => excluirProduto(prod.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum produto cadastrado...</p>
      )}
    </div>
  );
}

export default TabelaProdutos;
