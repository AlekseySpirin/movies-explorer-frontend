import React from 'react';
import './MainHeader.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function MainHeader() {
  return (
    <div className={'header'}>
      <Logo />
      <div className={'header__container'}>
        <NavLink
          className={'header__btn header__btn_bg_none'}
          to='/signup'
          activeClassName='active'
        >
          Регистрация
        </NavLink>
        <NavLink
          className={'header__btn '}
          to='/signin'
          activeClassName='active'
        >
          Войти
        </NavLink>
      </div>
    </div>
  );
}

export default MainHeader;
