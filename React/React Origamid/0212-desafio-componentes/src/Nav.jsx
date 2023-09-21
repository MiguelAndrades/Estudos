import React from 'react';

const menu = ['home', 'produtos'];

const Nav = ({ link }) => {
  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item}>
            <a href={item} style={{ textTransform: 'capitalize' }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
