import React from 'react';
import './Login.css';
import Logo from '../../components/Logo/Logo';

function Login() {
  return (
    <div className={'login'}>
      <Logo />
      <h2 className={'login__welcome'}>Вход</h2>
      {/* <p className={'login__error'}>текст ошибки</p> */}
      <form className={'login__form'} noValidate>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='email'>Email</label>
        <input
          placeholder='Email'
          required
          id='email'
          name='email'
          type='email'
          minLength='2'
          maxLength='30'
        />
        <span className='form__item-error form__item-error_el_login'>
          Текст ошибки
        </span>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='password'>Пароль</label>
        <input
          placeholder={'Пароль'}
          required
          id='password'
          name='password'
          type='password'
          minLength='2'
          maxLength='30'
        />
        <span className='form__item-error form__item-error_el_place'>
          Текст ошибки
        </span>
        <div className='login__button-container'>
          <button type='submit' className='login__link'>
            Войти
          </button>
        </div>
      </form>
      <div className='register__signin'>
        <p>Уже зарегистрированы?</p>
        <p className='register__login-link'>
          <p>Войти</p>
        </p>
      </div>
    </div>
  );
}

export default Login;
