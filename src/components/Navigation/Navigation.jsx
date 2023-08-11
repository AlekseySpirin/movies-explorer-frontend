import React from 'react';
import Logo from '../Logo/Logo';
import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
  return (
    <div className={'navigation'}>
      <nav className={'nav'}>
        <Logo />
        <ul className={'nav-list'}>
          <li className={`nav-list__item nav-list__item_bg_none`}>Фильмы</li>
          <li className={`nav-list__item nav-list__item_bg_none`}>
            Сохранённые фильмы
          </li>
        </ul>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href={'#'} className={'nav-list__profile'}>
          Аккаунт
        </a>
      </nav>
      <BurgerMenu />
    </div>
  );
}

export default Navigation;
