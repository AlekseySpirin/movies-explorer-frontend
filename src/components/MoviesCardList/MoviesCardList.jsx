import React from 'react';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import image from '../../images/33_word.jpg';
import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
    <div className='card-list__wrapper'>
      <ul className={'card-list'}>{children}</ul>
    </div>
  );
}

export default MoviesCardList;
