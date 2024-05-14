import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./FormProdutos.css";

function FormProdutos({ cadastrarProduto, editarProduto }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const { id } = useParams();

  console.log("ID:", id);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/produtos/${id}`)
        .then(response => response.json())
        .then(data => {
          setName(data.name);
          setPrice(data.price);
          setStock(data.stock);
        })
        .catch(error => console.error('Erro ao buscar produto:', error));
    }
  }, [id]);

  console.log("FormProdutos renderizado");


  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleStockChange = (e) => setStock(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const produto = { name, price, stock };

    if (id) {
      editarProduto(id, produto); // Chama a função de editar produto passando o id e os dados atualizados
    } else {
      cadastrarProduto(produto); // Chama a função de cadastrar produto passando os dados do produto
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          required
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="preco">Preço</label>
        <input
          type="number"
          name="preco"
          required
          value={price}
          onChange={handlePriceChange}
        />

        <label htmlFor="estoque">Estoque</label>
        <input
          type="number"
          name="estoque"
          required
          value={stock}
          onChange={handleStockChange}
        />

        <input
          type="submit"
          value={id ? "Salvar" : "Cadastrar"}
        />
      </form>
    </div>
  );
}

export default FormProdutos;
