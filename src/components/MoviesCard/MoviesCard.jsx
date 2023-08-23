import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, shouldShowSaveButton }) {
  const { nameRU, trailerLink, duration } = movie;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  const durationText = `${hours}ч ${minutes}м`;
  return (
    <li className={'card'}>
      {shouldShowSaveButton ? (
        <button type={'button'} className='card__btn-save'>
          Сохранить
        </button>
      ) : (
        <div className={'card__saved'} />
      )}
      <a
        className={'card__link'}
        href={trailerLink}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={nameRU}
          className='card__img'
        />
      </a>
      <div className='card__description'>
        <h2 className={'card__title'}>{nameRU}</h2>
        <div className='duration'>
          <p className={'duration__text'}>{durationText}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
