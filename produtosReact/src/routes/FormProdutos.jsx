// FormProdutosRoute.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import FormProdutos from '../components/FormProdutos/FormProdutos';

function FormProdutosRoute() {
  const { id } = useParams();

  const cadastrarProduto = (produto) => {
    fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    }).then(
      response => response.json()
    ).then(
      data => console.log('Produto cadastrado:', data)
    ).catch(
      error => console.error('Erro ao cadastrar produto:', error)
    );
  };

  const editarProduto = (produtoAtualizado) => {
    fetch(`http://localhost:3000/produtos/${produtoAtualizado.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produtoAtualizado),
    }).then(
      response => response.json()
    ).then(() => {
      console.log('Produto editado com sucesso');
    }).catch(
      error => console.error('Erro ao editar produto:', error)
    );
  };

  return (
    <div>
      <h2>{id ? 'Editar Produto' : 'Cadastro de Produtos'}</h2>
      <FormProdutos
        id={id}
        cadastrarProduto={cadastrarProduto}
        editarProduto={editarProduto}
      />
    </div>
  );
}

export default FormProdutosRoute;
