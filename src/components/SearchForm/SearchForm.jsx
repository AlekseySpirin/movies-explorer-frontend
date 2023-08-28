import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import cl from './SearchForm.module.css';

function SearchForm({
  handleSearch,
  setIsFormSubmitted,
  handleSearchSavedMovies,
}) {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const [savedMoviesSearchValue, setSavedMoviesSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    handleSearch(searchValue, savedMoviesSearchValue);
  };
  const handleSubmitSavedMovies = (e) => {
    e.preventDefault();
    handleSearchSavedMovies(savedMoviesSearchValue);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleChangeSavedMovies = (e) => {
    const { value } = e.target;
    setSavedMoviesSearchValue(value);
  };
  return (
    <>
      {location.pathname === '/movies' && (
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
          />
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type */}
          <button className={cl.searchFormBtn} />
        </form>
      )}
      {location.pathname === '/saved-movies' && (
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
      )}
    </>
  );
}

export default SearchForm;
