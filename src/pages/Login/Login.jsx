import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Login({ handleLogin }) {
  const { values, handleChange, errors, resetForm } = useFormAndValidation({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(
      {
        email: values.email,
        password: values.password,
      },
      resetForm,
    ).catch((err) => {
      console.log(err);
      setErrorMessage('Неправильный email или пароль');
    });
  };

  return (
    <div className={'login'}>
      <div className='login__wrapper'>
        <Logo />
        <h2 className={'login__welcome'}>Рады видеть!</h2>
        <form onSubmit={handleSubmit} className={'login__form'} noValidate>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor='email'>E-mail</label>
          <input
            required
            id='email'
            name='email'
            type='email'
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && (
            <span className='form__item-error'>{errors.email}</span>
          )}
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor='password'>Пароль</label>
          <input
            required
            id='password'
            name='password'
            type='password'
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && (
            <span className='form__item-error'>{errors.password}</span>
          )}
          <p className={'login__error'}>{errorMessage}</p>
          <button type='submit' className='login__button'>
            Войти
          </button>
        </form>
        <div className='login__signin'>
          <p>Ещё не зарегистрированы?</p>
          <NavLink className={'login__link'} to='/signup'>
            Регистрация
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
