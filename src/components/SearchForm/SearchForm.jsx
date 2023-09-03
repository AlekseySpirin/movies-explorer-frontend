import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cl from './SearchForm.module.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleSearch,
  setIsFormSubmitted,
  handleCheckbox,
  handleSearchSavedMovies,
  isShortMovies,
  handleCheckboxSavedMovies,
  setIsShortMovies,
  setIsShortSavedMovies,
  isShortSavedMovies,
  moviesSearchQuery,
  savedMoviesSearchQuery,
}) {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const [savedMoviesSearchValue, setSavedMoviesSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    handleSearch(searchValue);
  };
  const handleSubmitSavedMovies = (e) => {
    e.preventDefault();
    handleSearchSavedMovies(savedMoviesSearchValue);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  console.log(moviesSearchQuery);
  const handleChangeSavedMovies = (e) => {
    const { value } = e.target;
    setSavedMoviesSearchValue(value);
  };

  useEffect(() => {
    if (moviesSearchQuery) {
      setSearchValue(moviesSearchQuery);
    }
  }, [moviesSearchQuery]);

  useEffect(() => {
    if (savedMoviesSearchQuery) {
      setSearchValue(savedMoviesSearchQuery);
    }
  }, [savedMoviesSearchQuery]);
  return (
    <>
      {location.pathname === '/saved-movies' ? (
        <form onSubmit={handleSubmitSavedMovies} className={cl.searchForm}>
          <input
            className={cl.searchInput}
            required
            id='saved-movies-input'
            name='saved-movies-input'
            minLength='2'
            maxLength='30'
            type='text'
            placeholder={'Сохраненные фильмы'}
            onChange={handleChangeSavedMovies}
          />
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type */}
          <button className={cl.searchFormBtn} />
        </form>
      ) : (
        <form onSubmit={handleSubmit} className={cl.searchForm}>
          <input
            className={cl.searchInput}
            required
            id='search-input'
            name='search-input'
            minLength='2'
            maxLength='30'
            type='text'
            placeholder={'Фильм'}
            onChange={handleChange}
            value={searchValue}
          />
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type */}
          <button className={cl.searchFormBtn} />
        </form>
      )}
      <FilterCheckbox
        handleSearch={handleSearch}
        isShortMovies={isShortMovies}
        handleCheckbox={handleCheckbox}
        setIsShortMovies={setIsShortMovies}
        setIsShortSavedMovies={setIsShortSavedMovies}
        handleSubmit={handleSubmit}
        handleCheckboxSavedMovies={handleCheckboxSavedMovies}
        handleSubmitSavedMovies={handleSubmitSavedMovies}
        isShortSavedMovies={isShortSavedMovies}
      />
    </>
  );
}

export default SearchForm;
