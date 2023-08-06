import React from 'react';
import cl from './MoviesHeader.module.css';

function MoviesHeader() {
  return (
    <div className={cl.header}>
      <div className={cl.logo} />
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
