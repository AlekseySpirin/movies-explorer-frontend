import React from 'react';
import Footer from '../../components/Footer/Footer';
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
  isFormSubmitted,
  setIsFormSubmitted,
  isShortSavedMovies,
  setIsShortSavedMovies,
  isShortMovies,
  moviesSearchQuery,
  savedMoviesSearchQuery,
}) {
  return (
    <>
      <Navigation />
      <main className={'saved-movies'}>
        <SearchForm
          moviesSearchQuery={moviesSearchQuery}
          savedMoviesSearchQuery={savedMoviesSearchQuery}
          setIsFormSubmitted={setIsFormSubmitted}
          handleSearchSavedMovies={handleSearchSavedMovies}
          handleCheckboxSavedMovies={handleCheckboxSavedMovies}
          setIsShortSavedMovies={setIsShortSavedMovies}
          isShortSavedMovies={isShortSavedMovies}
          isShortMovies={isShortMovies}
        />
        {/* <FilterCheckbox */}
        {/*   setIsShortMovies={setIsShortMovies} */}
        {/*   isShortMovies={isShortMovies} */}
        {/*   handleCheckboxSavedMovies={handleCheckboxSavedMovies} */}
        {/* /> */}
        <hr className={'saved-movies__hr'} />
        <MoviesCardList
          sortedSavedMovies={sortedSavedMovies}
          isSavedMovies
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
          handleSaveMovie={handleSaveMovie}
          isFormSubmitted={isFormSubmitted}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
