import React from 'react';
import './MainHeader.css';
import Logo from '../Logo/Logo';

function MainHeader() {
  return (
    <div className={'header'}>
      <Logo />
      <div>
        <button className={'header__btn header__btn_bg_none'} type={'button'}>
          Регистрация
        </button>
        <button className={'header__btn '} type={'button'}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
