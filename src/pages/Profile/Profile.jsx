import React from 'react';
import MoviesHeader from '../../components/MoviesHeader/MoviesHeader';
import './Profile.css';

function Profile() {
  return (
    <div className={'profile'}>
      <MoviesHeader />
      <h2 className='profile__title'>Привет, Алексей!</h2>
      <ul className='profile-list'>
        <li className='profile-list__item'>
          <p>Имя</p>
          <p>Алексей</p>
        </li>
        <li className='profile-list__item'>
          <p>E-mail</p>
          <p>pochta@yandex.ru</p>
        </li>
      </ul>
      <div className='profile__btn-container'>
        <button type={'button'} className='profile__btn'>
          Редактировать
        </button>
        <button type={'button'} className='profile__btn profile__btn_color_red'>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}

export default Profile;
