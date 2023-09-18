import React from 'react';
import './SpanError.css';

function SpanError({ error }) {
  return error ? <span className='form__item-error'>{error}</span> : null;
}

export default SpanError;
