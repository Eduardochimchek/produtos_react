import React, { useState } from 'react';
import TabelaProdutos from './components/TabelaProdutos/TabelaProdutos';
import FormProdutos from './components/FormProdutos/FormProdutos';

function App() {
    const [produtos, setProdutos] = useState([]);
    const [id, setId] = useState(1); 
    const [produtoEmEdicao, setProdutoEmEdicao] = useState(null); 

    const cadastrarProduto = (produto) => {
        const novoProduto = { ...produto, id: id }; 
        setId(id + 1);
        setProdutos([...produtos, novoProduto]);
    };

    const editarProduto = (id, produtoAtualizado) => {
        const produtosAtualizados = produtos.map((prod) => (prod.id === id ? produtoAtualizado : prod));
        setProdutos(produtosAtualizados);
        setProdutoEmEdicao(null); 
    };

    const excluirProduto = (id) => {
        const produtosFiltrados = produtos.filter((prod) => prod.id !== id);
        setProdutos(produtosFiltrados);
    };

    return (
        <>
            <h2>Tabela de Produtos</h2>
            {produtos.length > 0 ? (
                <TabelaProdutos
                    produtos={produtos}
                    editarProduto={(produto) => setProdutoEmEdicao(produto)} 
                    excluirProduto={excluirProduto}
                />
            ) : (
                <p>Nenhum produto cadastrado...</p>
            )}
            <FormProdutos
                cadastrarProduto={cadastrarProduto}
                editarProduto={editarProduto}
                editingProduct={produtoEmEdicao}
            />
        </>
    );
}

export default App;