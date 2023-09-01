import React, { useEffect } from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

function FilterCheckbox({
  handleCheckbox,
  isShortMovies,
  setIsShortMovies,
  handleSubmit,
  handleCheckboxSavedMovies,
  handleSubmitSavedMovies,
}) {
  const location = useLocation();
  const handleChange = (e) => {
    const { checked } = e.target;
    handleCheckbox(checked);
    handleSubmit(e);
  };

  const handleChangeSavedMovies = (e) => {
    const { checked } = e.target;
    handleCheckboxSavedMovies(checked);
    handleSubmitSavedMovies(e);
  };

  useEffect(() => {
    setIsShortMovies(isShortMovies);
  }, [isShortMovies]);

  useEffect(() => {
    const storedIsShortMovies = localStorage.getItem('isShortMovies');
    if (storedIsShortMovies) {
      setIsShortMovies(JSON.parse(storedIsShortMovies));
    }
  }, []);

  return (
    <div className={'filter-checkbox'}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={'slider'}>
        {location.pathname === '/movies' && (
          <input
            type={'checkbox'}
            checked={isShortMovies}
            onChange={handleChange}
          />
        )}
        {location.pathname === '/saved-movies' && (
          <input
            type={'checkbox'}
            checked={isShortMovies}
            onChange={handleChangeSavedMovies}
          />
        )}
        <span className={'slider-btn'} />
      </label>
      <span className={'slider__name'}>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
