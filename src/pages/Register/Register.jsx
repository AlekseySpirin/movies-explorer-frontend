import React from 'react';
import './Register.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

function Register() {
  return (
    <div className={'register'}>
      <div className='register__wrapper'>
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
          <NavLink
            className={'register__link'}
            to='/signin'
            activeClassName='active'
          >
            Войти
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
