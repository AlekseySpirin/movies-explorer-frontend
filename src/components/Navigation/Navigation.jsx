import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
  return (
    <header className={'navigation'}>
      <nav className={'nav'}>
        <Logo />
        <ul className={'nav-list'}>
          <li className={`nav-list__item nav-list__item_bg_none`}>
            <NavLink className={'nav-list__link'} to='/movies'>
              Фильмы
            </NavLink>
          </li>
          <li className={`nav-list__item nav-list__item_bg_none`}>
            <NavLink to='/saved-movies' className={'nav-list__link'}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <NavLink to='/profile' className={'nav-list__profile'}>
          Аккаунт
        </NavLink>
      </nav>
      <BurgerMenu />
    </header>
  );
}

export default Navigation;
