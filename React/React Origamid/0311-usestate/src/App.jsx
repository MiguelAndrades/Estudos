import React from 'react';

const produto = {
  nome: 'Galaxy',
  marca: 'Samsung',
  valor: 3500,
};

const App = () => {
  const [valor, setValor] = React.useState(produto.valor);
  const [quantidade, setQuantidade] = React.useState(1);
  const atualizaCarrinho = () => {
    setQuantidade(quantidade + 1);
    setValor(valor + produto.valor);
  };
  return (
    <div>
      <p>{produto.nome}</p>
      <p>{produto.marca}</p>
      <p>R$ {produto.valor}</p>
      <p>R$ {valor}</p>
      <p>{quantidade}</p>
      <button onClick={atualizaCarrinho}>Comprar</button>
    </div>
  );
};

export default App;
