import React from 'react';
import Exercicio from './Exercicio';

const App = () => {
  const empresas = ['Google', 'Microsoft', 'Twitter', 'Oracle'];
  const livros = [
    { nome: 'O poder da ação', lançamento: 2004 },
    { nome: 'Como fazer amigos', lançamento: 2002 },
    { nome: 'Como influenciar pessoas', lançamento: 2000 },
    { nome: 'Autorresponsabilidade', lançamento: 1933 },
  ];

  return (
    <>
      <h1>JSX Arrays 1</h1>

      <p>
        Quando tentantamos acessar um Array em React apenas passando ele dentro
        das chaves é assim que ele irá aparecer:
      </p>
      <p>{empresas}</p>
      <div>
        <h2>Arrays com .map</h2>
        <p>
          Quando queremos fazer que cada um apareça de maneira correta
          precisamos atribuir um Key em cada elemento, para isso faremos um map
          para percorrer toda a Array e devolvela com sua Key única dentro de
          uma Tag li
        </p>
        <ul>
          {empresas.map((empresas) => (
            <li key={empresas}>{empresas}</li>
          ))}
        </ul>

        <p>
          Assim para cada empresa o map atribui o nome da respectiva e a sua key
          com o nome
        </p>
      </div>
      <div>
        <h2>Arrays .filter.map</h2>
        <p>
          Digamos que eu queira filtrar um Array de livros lançados apartir do
          ano 2000 e mostrar-los em uma tag li
        </p>
        <ul>
          {livros
            .filter(({ lançamento }) => lançamento >= 2000)
            .map(({ nome, lançamento }) => (
              <li key={nome}>
                {nome} <span>{lançamento}</span>
              </li>
            ))}
        </ul>
        <p>
          Aqui filtramos os livros primeiro que se for igual ou maior que o ano
          2000 ele rertona true, retornando uma nova Array com os elementos que
          retornaram true ai pegamos e fazemos um .map para retornar o nome e a
          data de lançamento dentro de li
        </p>
      </div>
      <div>
        <h2>Exercicio</h2>
        <Exercicio />
      </div>
    </>
  );
};

export default App;
