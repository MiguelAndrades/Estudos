import React from 'react';

// Aqui usamos a propriedade children que retorna o que tiver dentro da abertura e fechamento da tag como se fosse um texto normal em Html que colocamos em uma tag.

const Descricao = ({ children }) => {
  return <p>{children}</p>;
};

export default Descricao;
