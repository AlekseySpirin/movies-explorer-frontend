import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className={'portfolio'}>
      <h2 className={'portfolio__title'}>Портфолио</h2>
      <nav className={'portfolio-nav'}>
        <ul className={'portfolio-list'}>
          <li className={'portfolio-list__item'}>
            <a
              className={'portfolio__link'}
              href='https://alekseyspirin.github.io/russian-travel/'
            >
              Статичный сайт
            </a>
            <span className={'portfolio__link-arrow'}> ↗ </span>
          </li>
          <li className={'portfolio-list__item'}>
            <a
              className={'portfolio__link'}
              href='https://alekseyspirin.github.io/russian-travel/'
            >
              Адаптивный сайт
            </a>
            <span className={'portfolio__link-arrow'}> ↗ </span>
          </li>
          <li className={'portfolio-list__item'}>
            <a
              className={'portfolio__link'}
              href='https://mesto-spirin.nomoredomains.work'
            >
              Одностраничное приложение
            </a>
            <span className={'portfolio__link-arrow'}> ↗ </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Portfolio;
