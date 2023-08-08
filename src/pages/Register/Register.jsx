import React from 'react';
import './Register.css';
import Logo from '../../components/Logo/Logo';

function register() {
  return (
    <div className={'register'}>
      <Logo />
      <h2 className={'register__welcome'}>Добро пожаловать!</h2>
      {/* <p className={'register__error'}>текст ошибки</p> */}
      <form className={'register__form'} noValidate>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='name'>Имя</label>
        <input
          required
          id='name'
          name='name'
          type='name'
          minLength='2'
          maxLength='30'
        />
        {/* <span>Что-то пошло не так...</span> */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='email'>E-mail</label>
        <input
          required
          id='email'
          name='email'
          type='email'
          minLength='2'
          maxLength='30'
        />
        {/* <span>Что-то пошло не так...</span> */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='password'>Пароль</label>
        <input
          required
          id='password'
          name='password'
          type='password'
          minLength='2'
          maxLength='30'
        />
        <span>Что-то пошло не так...</span>
        <button type='submit' className='register__button'>
          Зарегистрироваться
        </button>
      </form>
      <div className='register__signin'>
        <p>Уже зарегистрированы?</p>
        <p className='register__link'>Войти</p>
      </div>
    </div>
  );
}

export default register;
