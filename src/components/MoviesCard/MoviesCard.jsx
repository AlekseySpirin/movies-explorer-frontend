// import React, { useEffect, useState } from 'react';
import './MoviesCard.css';

function MoviesCard({
  card,
  handleSaveMovie,
  isSavedMovies,
  savedMovies,
  movieSaved,
  handleDeleteMovie,
}) {
  const { nameRU, trailerLink, duration } = card;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const durationText = hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  // const [isMovieSaved, setIsMovieSaved] = useState(false);
  // console.log(savedMovies);
  // useEffect(() => {
  //   setIsMovieSaved(
  //     savedMovies.some((movie) => movie.movieId === card.movieId),
  //   );
  // }, [savedMovies, card.movieId]);
  const saveMovieClick = () => {
    handleSaveMovie(card);
    // setIsMovieSaved(true);
  };

  const deleteMovieClick = () => {
    if (movieSaved) {
      handleDeleteMovie(
        savedMovies.filter((i) => i.movieId === card.id)[0]._id,
      );
    } else {
      handleDeleteMovie(card._id);
    }
  };

  return (
    <li className={'card'}>
      {!isSavedMovies ? (
        <button
          type={'button'}
          onClick={movieSaved ? deleteMovieClick : saveMovieClick}
          className={` card__btn-save ${
            movieSaved ? 'card__btn-save_active' : ''
          }`}
        >
          {!movieSaved ? 'Сохранить' : ''}
        </button>
      ) : (
        // <div className={'card__saved'} />
        // eslint-disable-next-line
        // jsx-a11y/control-has-associated-label,react/button-has-type
        // eslint-disable-next-line
        // jsx-a11y/control-has-associated-label,react/button-has-type
        // eslint-disable-next-line
        // jsx-a11y/control-has-associated-label,react/button-has-type
        // eslint-disable-next-line
        // jsx-a11y/control-has-associated-label,react/button-has-type
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
