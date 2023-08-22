import React, { useState } from 'react';
import './Register.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Register({ handleRegister }) {
  const { values, handleChange, errors, resetForm } = useFormAndValidation({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister(
      {
        email: values.email,
        password: values.password,
      },
      resetForm,
    ).catch((err) => {
      setErrorMessage(err);
      // showResults();
    });
  };
  return (
    <div className={'register'}>
      <div className='register__wrapper'>
        <Logo />
        <h2 className={'register__welcome'}>Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} className={'register__form'} noValidate>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor='name'>Имя</label>
          <input
            required
            id='name'
            name='name'
            type='text'
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && (
            <span className='form__item-error form__item-error_el_login'>
              {errors.name}
            </span>
          )}
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
            <span className='form__item-error form__item-error_el_login'>
              {errors.email}
            </span>
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
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className='form__item-error form__item-error_el_place'>
              {errors.password}
            </span>
          )}
          <p className={'register__error'}>{errorMessage}</p>
          <button type='submit' className='register__button'>
            Зарегистрироваться
          </button>
        </form>
        <div className='register__signin'>
          <p>Уже зарегистрированы?</p>
          <NavLink className={'register__link'} to='/signin'>
            Войти
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
