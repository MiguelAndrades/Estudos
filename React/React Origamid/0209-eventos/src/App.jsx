import React from 'react';

//Função que pega o texto do elemento e mostra ele em um Alert
function comprar(event) {
  alert(event.target.innerText);
}

//Função que pega o event e retorna ele no console
function handleScroll(event) {
  console.log(event);
}

//Selecionamos o window e atribuimos a ele a função de adicionar um Evento nele, ele recebe dois parametros o primeiro o Evento e o segundo a função que irá executar
window.addEventListener('scroll', handleScroll);

function App() {
  return (
    <main>
      <h1>Eventos</h1>

      <section>
        <h2>Eventos do Próprio React</h2>
        <p>
          Dentro de React temos podemos atribuir Eventos como o onClick onde
          podemos passar uma função para executar dentro dele quando o botão for
          clicado, este é um evento próprio do React.Js{' '}
          <a href="https://reactjs.org/docs/events.html" target="_blank">
            Aqui tem todos os eventos do React.Js
          </a>
        </p>
        <button onClick={comprar}>Comprar</button>
      </section>

      <section>
        <h2>Eventos do JS</h2>
        <p>
          Porém exitem alguns eventos que não podemos executar como o
          window/body para isso precisamos fazer com JS puro, o problema que ele
          pode se comportar de maneira diferente com Browsers diferentes, já o
          do React.Js é sintático e funcionará da mesma maneira para cada
          Browser que suporta o React.Js
        </p>
        <p>
          Por exemplo aqui precisamos fazer um evento que quando escrolamos o
          window ele me mostre algo, neste caso iremos ter que usar JS puro para
          poder pegar o window
        </p>
        <div style={{ height: '100vw', background: 'red' }}>Scroll Aqui</div>;
      </section>
    </main>
  );
}

export default App;
