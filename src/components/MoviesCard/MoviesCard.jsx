import React from 'react';
import './MoviesCard.css';

function MoviesCard({ title, duration, src, alt, shouldShowSaveButton }) {
  return (
    <li className={'card'}>
      {shouldShowSaveButton ? (
        <button type={'button'} className='card__btn-save'>
          Сохранить
        </button>
      ) : (
        <div className={'card__saved'} />
      )}
      <img src={src} alt={alt} className='card__img' />
      <div className='card__description'>
        <h2 className={'card__title'}>{title}</h2>
        <div className='duration'>
          <p className={'duration__text'}>{duration}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
