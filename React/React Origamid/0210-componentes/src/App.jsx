import React from 'react';
import Form from './Form/form';

const App = () => {
  return (
    <div>
      <h1>Componentes</h1>
      <p>
        Podemos quebrar nossos códigos em vários componentes menores no
        React.Js, chamamos isso de componentes funcionais.
      </p>
      <p>
        Por exemplo íremos fazer um form para usarmos em várias partes do nosso
        site.
      </p>
      <Form />
    </div>
  );
};

export default App;
