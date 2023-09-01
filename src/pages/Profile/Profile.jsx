import './Profile.css';
import React, { useContext, useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import SpanError from '../../components/SpanError/SpanError';
import Preloader from '../../components/Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({
  handleLogout,
  handleUpdateUser,
  isLoading,
  editingProfile,
  handleEditProfileClick,
  setEditingProfile,
  responseMessage,
  errorMessage,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;

  const { values, setValues, handleChange, isValid, errors } =
    useFormAndValidation({
      name,
      email,
    });

  useEffect(() => {
    if (editingProfile) {
      setValues({
        ...values,
        name,
        email,
      });
    }
  }, [editingProfile]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditingProfile(false);
    try {
      // throw new Error('Тестовая ошибка');
      await handleUpdateUser({
        name: values.name,
        email: values.email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={'profile'}>
      <Navigation />
      <div className='profile__wrapper'>
        <h2 className='profile__title'>{`Привет, ${name}!`}</h2>
        <form onSubmit={handleSubmit}>
          <ul className='profile-list'>
            <li className='profile-list__item'>
              <p>Имя</p>
              {editingProfile ? (
                <div className={'profile-list__input-wrapper'}>
                  <input
                    className='profile-list__input'
                    name={'name'}
                    type='text'
                    minLength='2'
                    maxLength='30'
                    value={values.name}
                    onChange={handleChange}
                    placeholder={name}
                  />
                  <SpanError error={errors.name} />
                </div>
              ) : (
                <p>{name}</p>
              )}
            </li>
            <li className='profile-list__item'>
              <p>E-mail</p>
              {editingProfile ? (
                <div className={'profile-list__input-wrapper'}>
                  <input
                    className='profile-list__input'
                    name={'email'}
                    type='email'
                    minLength='2'
                    maxLength='30'
                    pattern='^\S+@\S+\.[A-Za-z]{2,}$'
                    value={values.email}
                    onChange={handleChange}
                    placeholder={email}
                  />
                  <SpanError error={errors.email} />
                </div>
              ) : (
                <p>{email}</p>
              )}
            </li>
          </ul>
          <div className='profile__btn-container'>
            <span className={'profile__error-text'}>
              {editingProfile && errorMessage ? '' : errorMessage}
            </span>
            <span className={'profile__response-text'}>
              {editingProfile && responseMessage ? '' : responseMessage}
            </span>
            {editingProfile ? (
              <button
                type='submit'
                disabled={
                  !isValid ||
                  (values.email === email && values.name === name) ||
                  values.email === '' ||
                  values.name === ''
                }
                className='profile__btn profile__btn_type_submit'
              >
                {isLoading ? <Preloader /> : 'Сохранить'}
              </button>
            ) : (
              <>
                <button
                  type='button'
                  className='profile__btn'
                  onClick={handleEditProfileClick}
                >
                  Редактировать
                </button>
                <button
                  onClick={handleLogout}
                  type='button'
                  className='profile__btn profile__btn_color_red'
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
