import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className={'footer'}>
      <h2 className={'footer__title'}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <nav className={'footer-nav'}>
        <p className={'copyright'}>&copy; 2023 </p>
        <ul className={'footer-list'}>
          <li className={'footer-list__item'}>
            <a className={'footer__link'} href='https://practicum.yandex.ru/'>
              Яндекс.Практикум
            </a>
          </li>
          <li className={'footer-list__item'}>
            <a
              className={'footer__link'}
              href='https://github.com/AlekseySpirin'
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
