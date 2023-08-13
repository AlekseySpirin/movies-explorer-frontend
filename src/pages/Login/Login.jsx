import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

function Login() {
  return (
    <div className={'login'}>
      <div className='login__wrapper'>
        <Logo />
        <h2 className={'login__welcome'}>Рады видеть!</h2>
        {/* <p className={'login__error'}>текст ошибки</p> */}
        <form className={'login__form'} noValidate>
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
          {/* <span className='form__item-error form__item-error_el_place'> */}
          {/*  Текст ошибки */}
          {/* </span> */}
          <button type='submit' className='login__button'>
            Войти
          </button>
        </form>
        <div className='login__signin'>
          <p>Ещё не зарегистрированы?</p>
          <NavLink
            className={'login__link'}
            to='/signup'
            activeClassName='active'
          >
            Регистрация
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
