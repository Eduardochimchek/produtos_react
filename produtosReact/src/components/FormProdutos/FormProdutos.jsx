import React, { useState, useEffect } from "react";
import './FormProdutos.css'

function FormProdutos(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    // Estado local para o produto em edição
    const [editingProduct, setEditingProduct] = useState(null);

    const handleNameChange = (e) => setName(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleStockChange = (e) => setStock(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProduct) {
            // Se houver um produto em edição, chame a função de editar
            props.editarProduto(editingProduct.id, { name, price, stock });
        } else {
            // Senão, chame a função de cadastrar
            props.cadastrarProduto({ name, price, stock });
        }
        // Limpar os campos após o envio do formulário
        setName("");
        setPrice("");
        setStock("");
        setEditingProduct(null); // Limpar o produto em edição
    };

    return (
        <div className="container">
            <h2>{props.editingProduct ? "Editar Produto" : "Cadastro de Produtos"}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" required value={props.editingProduct ? props.editingProduct.name : name} onChange={handleNameChange} />
    
                <label htmlFor="preco">Preço</label>
                <input type="number" name="preco" required value={props.editingProduct ? props.editingProduct.price : price} onChange={handlePriceChange} />
                
                <label htmlFor="estoque">Estoque</label>
                <input type="number" name="estoque" required value={props.editingProduct ? props.editingProduct.stock : stock} onChange={handleStockChange} />
    
                <input type="submit" value={props.editingProduct ? "Salvar" : "Cadastrar"} />
            </form>
        </div>
    );
    
}

export default FormProdutos;