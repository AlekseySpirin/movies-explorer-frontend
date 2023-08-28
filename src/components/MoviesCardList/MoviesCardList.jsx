import React, { useState } from 'react';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import image from '../../images/33_word.jpg';
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

  // eslint-disable-next-line no-nested-ternary
  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  // eslint-disable-next-line no-nested-ternary
  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

  // useEffect(() => {
  //   if (location.pathname === '/movies') {
  //     setMovies(movies);
  //     fetch('https://api.nomoreparties.co/beatfilm-movies')
  //       .then((response) => response.json())
  //       .then((card) => setMovies(card));
  //   } else if (location.pathname === '/saved-movies') {
  //     setMovies(savedMovies);
  //   }
  // }, [location.pathname, setMovies, savedMovies]);

  const handleClick = () => {
    // eslint-disable-next-line no-use-before-define
    calculateCardCount();
  };

  // eslint-disable-next-line consistent-return
  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };
  console.log(savedMovies);
  const isShowMoreButtonVisible =
    location.pathname === '/movies' &&
    roundedVisibleCardCount < sortedMovies.length;
  // eslint-disable-next-line no-shadow
  const getSavedMovie = (savedMovies, card) =>
    savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  console.log(Array.isArray(sortedMovies));
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
              (sortedSavedMovies.length === 0
                ? savedMovies
                : sortedSavedMovies
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
