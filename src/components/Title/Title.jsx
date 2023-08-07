import React from 'react';
import './Title.css';

function Title({ text }) {
  return (
    <>
      <h2 className={'title'}>{text}</h2>
      <hr className={'hr__title'} />
    </>
  );
}

export default Title;
