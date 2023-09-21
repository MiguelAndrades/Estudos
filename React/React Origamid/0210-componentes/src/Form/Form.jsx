import React from 'react';
import Input from './input';
import Button from './button';

const Form = () => {
  return (
    <React.Fragment>
      {/*Um componente só pode retornar um único elemento, para retornar mais de um elemento ou elvovemos em uma Div que não é o ídeal é usar o React.Fragment já que assim não sujamos nosso DOM*/}
      <label>Nome</label>
      <Input />
      <label>Email</label>
      <Input />
      <Button />
    </React.Fragment>
  );
};

export default Form;
