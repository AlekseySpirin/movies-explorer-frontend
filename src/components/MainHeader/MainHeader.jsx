import React from 'react';
import './MainHeader.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function MainHeader() {
  return (
    <header className={'header'}>
      <Logo />
      <div className={'header__container'}>
        <NavLink className={'header__btn header__btn_bg_none'} to='/signup'>
          Регистрация
        </NavLink>
        <NavLink className={'header__btn '} to='/signin'>
          Войти
        </NavLink>
      </div>
    </header>
  );
}

export default MainHeader;
