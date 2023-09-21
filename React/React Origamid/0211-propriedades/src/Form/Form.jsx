import React from 'react';
import Input from './Input';
import Button from './Button';
import Descricao from './Descricao';
import Titulo from './Titulo';

//Aqui importamos todos os componentes funcionais para montar o formulario, passando seus parametros dentro dos atributos das tags dos componentes funcionais.

const Form = () => {
  return (
    <div>
      <Titulo>Esse é o titulo do formulario usando o Children</Titulo>
      <Descricao>
        Essa é uma breve descriçao do formulario usando o Children
      </Descricao>
      <Input id="Nome" type="text" texto="Seu nome" />
      <Input id="E-mail" type="text" texto="Seu E-mail" />
      <Input id="Senha" type="password" texto="Sua senha" required />
      <Button />
    </div>
  );
};

export default Form;
