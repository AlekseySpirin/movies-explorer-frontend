import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className={'header'}>
      <div className={'logo'} />
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

export default Header;
