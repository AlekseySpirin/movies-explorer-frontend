import React from 'react';
import './InfoTooltip.css';
import successImg from '../../images/svg/Success.svg';
import failImg from '../../images/svg/Fail.svg';
import Popup from '../Popup/Popup';

function InfoTooltip({ name, isOpen, isSucces, onClose }) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <div className={'result'}>
        <img
          className={'result__img'}
          src={isSucces ? successImg : failImg}
          alt={isSucces ? 'Success' : 'Fail'}
        />
        <p className={'result__text'}>
          {isSucces
            ? 'Вы успешно зарегистрировались'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </p>
      </div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        onClick={onClose}
        type='button'
        className={`pop-up__close pop-up__close_place_${name}`}
      />
    </Popup>
  );
}

export default InfoTooltip;
