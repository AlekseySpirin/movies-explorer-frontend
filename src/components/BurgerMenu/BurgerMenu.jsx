import React from 'react';
import './BurgerMenu.css';

function BurgerMenu() {
  function toggleMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuButton = document.querySelector('.burger-menu__button');
    burgerMenu.classList.toggle('burger-menu_open');
    burgerMenuButton.classList.toggle('burger-menu__button_active');
  }

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type={'button'}
        className={'burger-menu__button'}
        onClick={toggleMenu}
      />
      <nav className={'burger-menu'}>
        <div className={'burger-menu__content'}>
          <ul className={'burger-menu__list'}>
            <li className={`burger-menu__link`}>Главная</li>
            <li className={`burger-menu__link`}>Фильмы</li>
            <li className={`burger-menu__link`}>Сохранённые фильмы</li>
          </ul>
          <a href={'/profile'} className={`burger-menu__profile`}>
            Аккаунт
          </a>
        </div>
      </nav>
    </div>
  );
}

export default BurgerMenu;
