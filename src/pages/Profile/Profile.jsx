import React from 'react';
import './Profile.css';
import Navigation from '../../components/Navigation/Navigation';

function Profile({ handleLogout, userData }) {
  return (
    <div className={'profile'}>
      <Navigation />
      <div className='profile__wrapper'>
        <h2 className='profile__title'>Привет, Алексей!</h2>
        <ul className='profile-list'>
          <li className='profile-list__item'>
            <p>Имя</p>
            <p>{userData?.name}</p>
          </li>
          <li className='profile-list__item'>
            <p>E-mail</p>
            <p>{userData?.email}</p>
          </li>
        </ul>
        <div className='profile__btn-container'>
          <button type={'button'} className='profile__btn'>
            Редактировать
          </button>
          <button
            onClick={handleLogout}
            type={'button'}
            className='profile__btn profile__btn_color_red'
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
