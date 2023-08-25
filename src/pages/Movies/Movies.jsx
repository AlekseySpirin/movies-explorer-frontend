import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
// import MoviesCard from '../../components/MoviesCard/MoviesCard';
import Navigation from '../../components/Navigation/Navigation';

function Movies({ movies, setMovies, handleSaveMovie }) {
  return (
    <>
      <Navigation />
      <main className={'movies'}>
        <SearchForm />
        <FilterCheckbox />
        <hr className={'movies__hr'} />
        <MoviesCardList
          movies={movies}
          setMovies={setMovies}
          handleSaveMovie={handleSaveMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
