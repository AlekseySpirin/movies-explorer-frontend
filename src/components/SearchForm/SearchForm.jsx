import React from 'react';
import cl from './SearchForm.module.css';

function SearchForm() {
  return (
    <form className={cl.searchForm}>
      <input className={cl.searchInput} type='text' placeholder={'Фильм'} />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type */}
      <button className={cl.searchFormBtn} />
    </form>
  );
}

export default SearchForm;
