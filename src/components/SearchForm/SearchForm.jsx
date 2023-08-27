import React, { useState } from 'react';
import cl from './SearchForm.module.css';

function SearchForm({ handleSearch, setIsFormSubmitted }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    handleSearch(searchValue);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  return (
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
  );
}

export default SearchForm;
