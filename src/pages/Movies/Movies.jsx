import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
// import image from '../../images/33_word.jpg';
import Navigation from '../../components/Navigation/Navigation';

function Movies(movies) {
  return (
    <>
      <Navigation />
      <main className={'movies'}>
        <SearchForm />
        <FilterCheckbox />
        <hr className={'movies__hr'} />
        <MoviesCardList>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              // onCardLike={onCardLike}
              movie={movie}
              // onCardClick={onCardClick}
              // onCardDelete={onCardDelete}
              // onConfirm={onConfirm}
            />
          ))}
          {/* <MoviesCard */}
          {/*   title={'33 слова о дизайне'} */}
          {/*   alt={'33 слова о дизайне'} */}
          {/*   src={image} */}
          {/*   duration={'1ч 17м'} */}
          {/* /> */}
        </MoviesCardList>
        <button type={'button'} className='movies__btn-more'>
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
