import React from 'react';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';

function Movies() {
  return (
    <div className={'movies'}>
      <MoviesHeader />
      <SearchForm />
      <FilterCheckbox />
      <hr className={'movies__hr'} />
      <MoviesCardList />
      <button type={'button'} className='movies__btn-more'>
        Ещё
      </button>
      <Footer />
    </div>
  );
}

export default Movies;
