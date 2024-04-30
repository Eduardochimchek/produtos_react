import React, { useState, useEffect } from "react";
import "./FormProdutos.css";

function FormProdutos({ cadastrarProduto, editarProduto, editingProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setStock(editingProduct.stock);
    }
  }, [editingProduct]);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleStockChange = (e) => setStock(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      editarProduto({ ...editingProduct, name, price, stock });
    } else {
      cadastrarProduto({ name, price, stock });
    }
    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <div className="container">
      <h2>{editingProduct ? "Editar Produto" : "Cadastro de Produtos"}</h2>
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
          value={editingProduct ? "Salvar" : "Cadastrar"}
        />
      </form>
    </div>
  );
}

export default FormProdutos;