import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Produtos from './Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const { pathname } = window.location;

if (pathname === '/home') {
  window.location.pathname = '/';
}

const App = () => {
  return (
    <div>
      <Nav />
      {pathname === '/' ? <Home /> : null}
      {pathname === '/produtos' ? <Produtos /> : null}
    </div>
  );
};

export default App;
