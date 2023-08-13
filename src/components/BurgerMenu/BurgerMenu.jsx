import React from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';

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
            <li className={`burger-menu__item`}>
              <NavLink
                className={'burger-menu__link'}
                to='/'
                activeClassName='active'
              >
                Главная
              </NavLink>
            </li>
            <li className={`burger-menu__item`}>
              <NavLink
                className={'burger-menu__link'}
                to='/movies'
                activeClassName='active'
              >
                Фильмы
              </NavLink>
            </li>
            <li className={`burger-menu__item`}>
              <NavLink
                className={'burger-menu__link'}
                to='/saved-movies'
                activeClassName='active'
              >
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink
            to={'/profile'}
            className={`burger-menu__profile`}
            activeClassName='active'
          >
            Аккаунт
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default BurgerMenu;
