import React from 'react';

// Uma das coisas mais legais de React e o fato de poder se usar JavaScript dentro de elementos HTML, sendo póssivel executar funçoes, fazer calculos tudo que quiser, apenas abrindo as {}.

export const ExpressoesString = () => {
  // Neste caso estamos definindo uma variavel com uma string e chamando ela dentro do elemento HTML div.
  const nome = 'Miguel';
  return (
    <p>
      Primeiro nome: <span>{nome}</span>
    </p>
  );
};

// Podemos retornar funçoes dentro dos elementos HTML, abrindo novamente {} e executando a funcao mesmo se ela tiver ou não parametros.
export const ExpressoesFuncoes = () => {
  const nomeCompleto = (nome, sobrenome) => {
    return nome + ' ' + sobrenome;
  };

  return (
    <p>
      Nome completo: <span>{nomeCompleto('Miguel', 'Andrade')}</span>
    </p>
  );
};

//Podemos usar objetos também dentro das {} aqui usei a desestruturação para poder acessar os valores porém poderia ser usado da forma tradicional usando meuCarro.marca que iria funcionar da mesma forma
export const ExpressoesObjetos = () => {
  //Objeto meu carro
  const meuCarro = {
    marca: 'Honda',
    modelo: 'Civic',
    motor: 'Vtec',
    cor: 'Preto',
  };

  //Desestruturando meuCarro para acessar os valores
  const { marca, modelo, motor, cor } = meuCarro;

  //Retornando os valores de meuCarro dentro dos elementos HTML
  return (
    <>
      <h1>Se eu tivesse um carro seria um:</h1>
      <p>Marca: {marca}</p>
      <p>Modelo: {modelo}</p>
      <p>Motor: {motor}</p>
      <p>Cor: {cor}</p>
    </>
  );
};

//Podemos fazer condicionais dentro dos elementos também neste caso se o aluno tiver uma nota abaixo de 6 o Else retornar a String 'Que pena você reprovou'.
export const PassouAno = () => {
  const nota = 5;

  return <p>{nota >= 6 ? 'Parabéns você passou' : 'Que pena você reprovou'}</p>;
};

//Podemos estilizar nossos elementos também, para isso precisamos criar um objeto.

export const StyleInline = () => {
  //Via objeto externo
  const estiloH1 = {
    color: 'blue',
    fontSize: '25px',
    fontFamily: 'Poppins',
  };

  return (
    <>
      {/* Chamando o objeto externo com os estilos.*/}
      <h1 style={estiloH1}>Esse é um titulo com Style inline via objeto</h1>
      {/* Definindo os estilo dentro do proprio elemento já.*/}
      <p style={{ color: 'red' }}>
        Esse já é um paragrafo sendo estilizado via objeto no proprio elemento
      </p>
    </>
  );
};

export const ExpressoesVariaveis = [
  ExpressoesString,
  ExpressoesFuncoes,
  ExpressoesObjetos,
  PassouAno,
  StyleInline,
];
