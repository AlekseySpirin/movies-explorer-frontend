import React from 'react';
import cl from './MoviesHeader.module.css';
import Logo from '../Logo/Logo';

function MoviesHeader() {
  return (
    <div className={cl.header}>
      <Logo />
      <div>
        <button
          className={`${cl.headerBtn} ${cl.headerBtnBgNone}`}
          type={'button'}
        >
          Фильмы
        </button>
        <button
          className={`${cl.headerBtn} ${cl.headerBtnBgNone}`}
          type={'button'}
        >
          Сохранённые фильмы
        </button>
      </div>
      <button className={cl.headerBtn} type={'button'}>
        Аккаунт
      </button>
    </div>
  );
}

export default MoviesHeader;
