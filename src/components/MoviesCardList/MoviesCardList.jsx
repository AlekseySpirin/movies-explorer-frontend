import React from 'react';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import image from '../../images/33_word.jpg';
import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
    <section className='films'>
      <ul className={'card-list'}>{children}</ul>
    </section>
  );
}

export default MoviesCardList;
