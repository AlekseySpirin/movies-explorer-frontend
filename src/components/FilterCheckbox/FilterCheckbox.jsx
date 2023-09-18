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
  isShortSavedMovies,
  setIsShortSavedMovies,
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
    if (location.pathname === '/movies') {
      setIsShortMovies(isShortMovies);
    }
  }, [isShortMovies]);

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setIsShortSavedMovies(isShortSavedMovies);
    }
  }, [isShortSavedMovies]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      const storedIsShortMovies = localStorage.getItem('isShortMovies');
      if (storedIsShortMovies) {
        setIsShortMovies(JSON.parse(storedIsShortMovies));
      }
    }
  }, []);

  return (
    <div className={'filter-checkbox'}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={'slider'}>
        {location.pathname === '/saved-movies' ? (
          <input
            type={'checkbox'}
            checked={isShortSavedMovies}
            onChange={handleChangeSavedMovies}
          />
        ) : (
          <input
            type={'checkbox'}
            checked={isShortMovies}
            onChange={handleChange}
          />
        )}
        <span className={'slider-btn'} />
      </label>
      <span className={'slider__name'}>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
