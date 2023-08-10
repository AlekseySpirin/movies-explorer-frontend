import React from 'react';
import Logo from '../Logo/Logo';
import './Navigation.css';

function Navigation() {
  return (
    <nav className={'nav'}>
      <Logo />
      <ul className={'nav-list'}>
        <li className={`nav-list__item`}>Фильмы</li>
        <li className={`nav-list__item`}>Сохранённые фильмы</li>
      </ul>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href={'#'} className={'nav-list__profile'}>
        Аккаунт
      </a>
    </nav>
  );
}

export default Navigation;
