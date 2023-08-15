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
              target='_blank'
              rel='noreferrer'
              className={'portfolio__link'}
              href='https://alekseyspirin.github.io/how-to-learn/'
            >
              <span>Статичный сайт</span>
              <span className={'portfolio__link-arrow'}> ↗ </span>
            </a>
          </li>
          <li className={'portfolio-list__item'}>
            <a
              target='_blank'
              rel='noreferrer'
              className={'portfolio__link'}
              href='https://alekseyspirin.github.io/russian-travel/'
            >
              <span>Адаптивный сайт</span>
              <span className={'portfolio__link-arrow'}> ↗ </span>
            </a>
          </li>
          <li className={'portfolio-list__item'}>
            <a
              target='_blank'
              rel='noreferrer'
              className={'portfolio__link'}
              href='https://mesto-spirin.nomoredomains.work'
            >
              <span>Одностраничное приложение</span>
              <span className={'portfolio__link-arrow'}> ↗ </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Portfolio;
