import React, { useEffect, useState } from 'react';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import image from '../../images/33_word.jpg';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MoviesCard from '../MoviesCard/MoviesCard';

const LG_ROW_CARD_COUNT = 3;
const MD_ROW_CARD_COUNT = 2;
const SM_ROW_CARD_COUNT = 1;

const LG_INITIAL_CARD_COUNT = 12;
const MD_INITIAL_CARD_COUNT = 8;
const SM_INITIAL_CARD_COUNT = 5;

function MoviesCardList({ movies, setMovies, savedMovies, handleSaveMovie }) {
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

  useEffect(() => {
    if (location.pathname === '/movies') {
      setMovies(movies);
      fetch('https://api.nomoreparties.co/beatfilm-movies')
        .then((response) => response.json())
        .then((card) => setMovies(card));
    } else if (location.pathname === '/saved-movies') {
      setMovies(savedMovies);
    }
  }, [location.pathname, setMovies, savedMovies]);

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

  const isShowMoreButtonVisible =
    location.pathname === '/movies' && roundedVisibleCardCount < movies.length;

  return (
    <section className='films'>
      <ul className={'card-list'}>
        {location.pathname === '/movies' &&
          movies
            ?.slice(0, roundedVisibleCardCount)
            .map((card) => (
              <MoviesCard
                key={card.id}
                card={card}
                handleSaveMovie={handleSaveMovie}
              />
            ))}
        {location.pathname === '/saved-movies' &&
          savedMovies
            ?.slice(0, roundedVisibleCardCount)
            .map((card) => (
              <MoviesCard
                key={card.id}
                card={card}
                handleSaveMovie={handleSaveMovie}
              />
            ))}
      </ul>
      {isShowMoreButtonVisible && (
        <button
          type={'button'}
          onClick={handleClick}
          className='card-list__btn-more'
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
