import React from 'react';

const Atributos = () => {
  //Em React não podemos retornar dois elementos HTML, para isso utilizamos o <React.Element> ou sua versão abreviada <> </> com isso envolvemos os elementos possibilitando o retorno de dois elementos, por que isso é importante se criarmos muitas divs irá sujar o nosso DOM, ficando dificil de trabalhar.
  return (
    <>
      {/* Em JSX podemos colocar atributos dentro dos elementos. */}
      <a href="https://www.origamid.com">Origamid</a>

      {/* Porém é preciso tomar cuidado, pois alguns atributos do HTML padrão pode interferir no JS, por isso em React alguns dos atributos são diferentes por exemplo o for dos formulario que é transformado em htmlFor com camelCase */}
      <label htmlFor="user">User</label>
      <input type="text" id="user" />
    </>
  );
};

export default Atributos;
