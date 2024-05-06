import React, { useState, useEffect } from 'react';
import TabelaProdutos from './components/TabelaProdutos/TabelaProdutos';
import FormProdutos from './components/FormProdutos/FormProdutos';

function App() {
    const [produtos, setProdutos] = useState([]);
    const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/produtos').then(
            response => response.json()
        ).then(
            data => setProdutos(data)
        ).catch(
            error => console.error('Erro ao buscar produtos:', error)
        );
    }, []);

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
            data => setProdutos([...produtos, data])
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
            const produtosAtualizados = produtos.map((prod) =>
                prod.id === produtoAtualizado.id ? produtoAtualizado : prod
            );
            setProdutos(produtosAtualizados);
            setProdutoEmEdicao(null);
        }).catch(
            error => console.error('Erro ao editar produto:', error)
        );
    };

    const excluirProduto = (id) => {
        fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'DELETE',
        }).then(() => {
            const produtosFiltrados = produtos.filter((prod) => prod.id !== id);
            setProdutos(produtosFiltrados);
        }).catch(
            error => console.error('Erro ao excluir produto:', error)
        );
    };

    return (
        <>
            <h2>Tabela de Produtos</h2>
            {produtos.length > 0 ? (
                <TabelaProdutos
                    produtos={produtos}
                    editarProduto={setProdutoEmEdicao}
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