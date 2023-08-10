import React from 'react';
import './BurgerMenu.css';

function BurgerMenu() {
  function toggleMenu() {
    const menu = document.querySelector('.burger-menu');
    menu.classList.toggle('burger-menu_open');
  }

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type={'button'}
        className='burger-menu__button'
        onClick={toggleMenu}
      />
      <nav className='burger-menu'>
        <ul className='burger-menu__content'>
          <li className={`burger-menu__link`}>Главная</li>
          <li className={`burger-menu__link`}>Фильмы</li>
          <li className={`burger-menu__link`}>Сохранённые фильмы</li>
          <li className={`burger-menu__profile`}>Аккаунт</li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;
