import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({
  card,
  // shouldShowSaveButton,
  handleSaveMovie,
  isSavedMovies,
  savedMovies,
}) {
  const { nameRU, trailerLink, duration } = card;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const durationText = hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  const [isMovieSaved, setIsMovieSaved] = useState(
    savedMovies?.some((movie) => movie.movieId === card.id),
  );
  const saveMovieClick = () => {
    handleSaveMovie(card);
    setIsMovieSaved(true);
  };

  const deleteMovieClick = () => {
    // Your logic to delete the movie from saved movies
    setIsMovieSaved(false);
  };

  return (
    <li className={'card'}>
      {!isSavedMovies ? (
        <button
          type={'button'}
          onClick={isMovieSaved ? deleteMovieClick : saveMovieClick}
          className={` card__btn-save ${
            isMovieSaved ? 'card__btn-save_active' : ''
          }`}
        >
          {!isMovieSaved ? 'Сохранить' : ''}
        </button>
      ) : (
        // <div className={'card__saved'} />
        // eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type
        <button onClick={deleteMovieClick} className={'card__delete'} />
      )}
      <a
        className={'card__link'}
        href={trailerLink}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={
            typeof card.image === 'string'
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
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
