import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className={'header'}>
      <div className={'logo'} />
      <div>
        <button type={'button'}>Регистрация</button>
        <button type={'button'}>Войти</button>
      </div>
    </div>
  );
}

export default Header;
