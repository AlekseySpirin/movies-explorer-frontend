import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
// import MoviesCard from '../../components/MoviesCard/MoviesCard';
import Navigation from '../../components/Navigation/Navigation';

function Movies({ movies, setMovies }) {
  return (
    <>
      <Navigation />
      <main className={'movies'}>
        <SearchForm />
        <FilterCheckbox />
        <hr className={'movies__hr'} />
        <MoviesCardList movies={movies} setMovies={setMovies}>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {/* {movies.map((movie) => ( */}
          {/*   <MoviesCard */}
          {/*     key={movie.id} */}
          {/*     // onCardLike={onCardLike} */}
          {/*     movie={movie} */}
          {/*     // onCardClick={onCardClick} */}
          {/*     // onCardDelete={onCardDelete} */}
          {/*     // onConfirm={onConfirm} */}
          {/*   /> */}
          {/* ))} */}
        </MoviesCardList>
        {/* <button type={'button'} className='movies__btn-more'> */}
        {/*   Ещё */}
        {/* </button> */}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
