import React from 'react';
// import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className={'not-found'}>
      <h1 className={'not-found__title'}>404</h1>
      <p className={'not-found__text'}>Страница не найдена</p>
      {/* <Link className={'not-found__link'} to='/'> */}
      {/*  Вернуться на главную страницу */}
      {/* </Link> */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={'not-found__link'} href='#'>
        Назад
      </a>
    </div>
  );
}

export default NotFound;
