import React from 'react';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';

function Movies() {
  return (
    <div className={'movies'}>
      <MoviesHeader />
      <SearchForm />
      <FilterCheckbox />
      <hr className={'hr__movies'} />
    </div>
  );
}

export default Movies;
