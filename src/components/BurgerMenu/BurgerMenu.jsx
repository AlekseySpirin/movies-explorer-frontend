import React from 'react';
import './BurgerMenu.css';

function BurgerMenu() {
  return (
    <div className='burger-menu'>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className='burger-menu__button' onClick='toggleMenu()' />
      <nav>
        <ul className='burger-menu__content'>
          <li className={`burger-menu__link`}>Фильмы</li>
          <li className={`burger-menu__link`}>Сохранённые фильмы</li>
          <li className={`burger-menu__link`}>Аккаунт</li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;
