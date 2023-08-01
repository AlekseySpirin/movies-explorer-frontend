import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <div className={'promo'}>
      <h1 className={'title'}>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab className={'NavTab'} />
    </div>
  );
}

export default Promo;
