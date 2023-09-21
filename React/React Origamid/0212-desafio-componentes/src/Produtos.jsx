import React from 'react';
import Titulo from './Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <div className="produtos">
      <Titulo>Produtos</Titulo>
      {produtos.map(({ nome, propriedades }) => (
        <div
          key={nome}
          style={{ border: '2px solid', padding: '16px', margin: '16px 0px' }}
        >
          {nome}
          <ul>
            {propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
