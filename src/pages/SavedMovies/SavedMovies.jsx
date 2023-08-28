import React from 'react';
import Footer from '../../components/Footer/Footer';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Navigation from '../../components/Navigation/Navigation';

function SavedMovies({
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
  handleSearchSavedMovies,
  sortedSavedMovies,
  handleCheckboxSavedMovies,
}) {
  return (
    <div className={'saved-movies'}>
      <Navigation />
      <SearchForm handleSearchSavedMovies={handleSearchSavedMovies} />
      <FilterCheckbox handleCheckbox={handleCheckboxSavedMovies} />
      <hr className={'saved-movies__hr'} />
      <MoviesCardList
        sortedSavedMovies={sortedSavedMovies}
        isSavedMovies
        handleDeleteMovie={handleDeleteMovie}
        savedMovies={savedMovies}
        handleSaveMovie={handleSaveMovie}
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
