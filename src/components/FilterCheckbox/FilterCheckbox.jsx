import React, { useEffect } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ handleCheckbox, isShortMovies, setIsShortMovies }) {
  const handleChange = (e) => {
    const { checked } = e.target;
    handleCheckbox(checked);
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
        <input
          type={'checkbox'}
          checked={isShortMovies}
          onChange={handleChange}
        />
        <span className={'slider-btn'} />
      </label>
      <span className={'slider__name'}>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
