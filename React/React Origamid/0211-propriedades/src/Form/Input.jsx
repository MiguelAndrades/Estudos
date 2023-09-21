import React from 'react';

//Aqui criamos um componente funcional de input que pode ser usado em diversos formularios durante o site onde podemos dar um ID o type do input o texto para a label e o props para adicionarmos quais propriedades quisermos dentro do input.

//Isso está sendo desestruturado dentro dos parametros da função para serem usados posteriosmente retornando um input Html com esses parametros retornados

const Input = ({ type, id, texto, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{texto}</label>
      <input type={type} id={id} {...props} />
    </>
  );
};

export default Input;
