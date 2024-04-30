import React from 'react';
import './TabelaProdutos.css';

function TabelaProdutos({ produtos, editarProduto, excluirProduto }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
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
                                <button onClick={() => editarProduto(prod)}>Editar</button>
                                <button onClick={() => excluirProduto(prod.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaProdutos;