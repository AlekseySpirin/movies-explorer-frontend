import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className={'filterCheckbox'}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className='slider'>
        <input type='checkbox' />
        <span className='slider-btn' />
      </label>
    </div>
  );
}

export default FilterCheckbox;
