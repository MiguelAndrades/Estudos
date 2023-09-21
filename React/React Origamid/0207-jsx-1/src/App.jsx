import React from 'react';
import Atributos from './Atrtibutos';
import {
  ExpressoesString,
  ExpressoesFuncoes,
  ExpressoesObjetos,
  PassouAno,
  StyleInline,
} from './ExpressoesVariaveis';

const App = () => {
  return (
    <>
      <Atributos />
      <ExpressoesString />
      <ExpressoesFuncoes />
      <ExpressoesObjetos />
      <PassouAno />
      <StyleInline />
    </>
  );
};

export default App;
