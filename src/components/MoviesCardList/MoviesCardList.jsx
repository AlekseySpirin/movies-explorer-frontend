import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const LG_ROW_CARD_COUNT = 3;
const MD_ROW_CARD_COUNT = 2;
const SM_ROW_CARD_COUNT = 1;

const LG_INITIAL_CARD_COUNT = 12;
const MD_INITIAL_CARD_COUNT = 8;
const SM_INITIAL_CARD_COUNT = 5;

function MoviesCardList({
  movies,
  savedMovies,
  handleSaveMovie,
  isSavedMovies,
  handleDeleteMovie,
  isLoading,
  isReqErr,
  isNotFount,
  sortedMovies,
  isFormSubmitted,
  sortedSavedMovies,
}) {
  const location = useLocation();
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  function getCardColumnCount() {
    // eslint-disable-next-line no-nested-ternary
    return isDesktop
      ? LG_ROW_CARD_COUNT
      : isTablet
      ? MD_ROW_CARD_COUNT
      : SM_ROW_CARD_COUNT;
  }

  function getInitialCardCount() {
    // eslint-disable-next-line no-nested-ternary
    return isDesktop
      ? LG_INITIAL_CARD_COUNT
      : isTablet
      ? MD_INITIAL_CARD_COUNT
      : SM_INITIAL_CARD_COUNT;
  }

  const [visibleCardCount, setVisibleCardCount] = useState(
    getInitialCardCount(),
  );

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / getCardColumnCount()) * getCardColumnCount();

  useEffect(() => {
    function handleResize() {
      setVisibleCardCount(getInitialCardCount());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   setVisibleCardCount(getInitialCardCount());
  // }, [sortedMovies]);

  function handleClick() {
    setVisibleCardCount(visibleCardCount + getCardColumnCount());
  }

  const isShowMoreButtonVisible =
    location.pathname === '/movies' &&
    roundedVisibleCardCount < sortedMovies.length;

  // eslint-disable-next-line no-shadow
  const getSavedMovie = (savedMovies, card) =>
    savedMovies.find((savedMovie) => savedMovie.movieId === card.id);

  return (
    <section className='films'>
      {isLoading && <Preloader />}
      {!isFormSubmitted && location.pathname === '/movies' && (
        <span className='card__list_not-found'>Что будем смотреть ? ^_^</span>
      )}
      {isNotFount && !isLoading && (
        <span className='card__list_not-found'>Ничего не найдено</span>
      )}
      {isReqErr && !isLoading && (
        <span className='card__list_req-error'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </span>
      )}
      {!isLoading && !isReqErr && !isNotFount && (
        <>
          <ul className={'card-list'}>
            {isFormSubmitted &&
              location.pathname === '/movies' &&
              sortedMovies
                ?.slice(0, roundedVisibleCardCount)
                .map((card) => (
                  <MoviesCard
                    movieSaved={getSavedMovie(savedMovies, card)}
                    savedMovies={savedMovies}
                    movies={movies}
                    isSavedMovies={isSavedMovies}
                    key={card._id || card.id}
                    card={card}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    sortedMovies={sortedMovies}
                  />
                ))}
            {location.pathname === '/saved-movies' &&
              (
                (sortedSavedMovies.length === 0 &&
                  !isFormSubmitted &&
                  savedMovies) ||
                sortedSavedMovies
              ).map((card) => (
                <MoviesCard
                  movieSaved={getSavedMovie(savedMovies, card)}
                  savedMovies={savedMovies}
                  isSavedMovies={isSavedMovies}
                  key={card._id || card.id}
                  card={card}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              ))}
          </ul>
          {isFormSubmitted &&
            isShowMoreButtonVisible &&
            sortedMovies.length > 0 && (
              <button
                type={'button'}
                onClick={handleClick}
                className='card-list__btn-more'
              >
                Ещё
              </button>
            )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
