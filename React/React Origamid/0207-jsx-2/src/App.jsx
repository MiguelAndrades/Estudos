import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const { cliente, idade, compras, ativa } = luana;

  const total = compras
    .map(({ preco }) => Number(preco.replace('R$', '')))
    .reduce((acc, value) => acc + value);

  return (
    <div>
      <p>Nome: {cliente}</p>
      <p>Idade: {idade}</p>
      <p>
        Situação:{' '}
        <span style={ativa ? { color: 'green' } : { color: 'red' }}>
          {ativa ? 'Ativa' : 'Negativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito.</p>}
    </div>
  );
};

export default App;
