import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className={'footer'}>
      <p className={'footer__title'}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <nav className={'footer-nav'}>
        <p className={'copyright'}>&copy; 2023 </p>
        <ul className={'footer-list'}>
          <li className={'footer-list__item'}>
            <a
              className={'footer__link'}
              target='_blank'
              href='https://practicum.yandex.ru/'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className={'footer-list__item'}>
            <a
              target='_blank'
              rel='noreferrer'
              className={'footer__link'}
              href='https://github.com/AlekseySpirin'
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
