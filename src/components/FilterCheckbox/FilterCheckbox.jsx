import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className={'filter-checkbox'}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={'slider'}>
        <input type={'checkbox'} />
        <span className={'slider-btn'} />
      </label>
      <span className={'slider__name'}>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
