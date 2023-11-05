import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../images/photo.jpg';
import Title from '../Title/Title';

function AboutMe() {
  return (
    <section id={'about-me'} className={'about-me'}>
      <Title text={'Студент'} />
      <div className={'about-me__wrapper'}>
        <p className={'about-me__name'}>Алексей</p>
        <p className={'about-me__job'}>Frontend-разработчик, 31 год</p>
        <p className={'about-me__description'}>
          Приветствую! Меня зовут Алексей, и я живу в Ростове-на-Дону. Я начал
          увлекаться веб-разработкой, и решил развивать свои навыки в этой
          области. Недавно окончил курс по веб-разработке от Яндекс Практикума.
          В данный момент изучаю TypeScript и юнит-тестирование, так как считаю
          их важными для улучшения качества кода и его поддержки. У меня есть
          собственные pet-проекты в git-репозитории, которые использую для
          самообучения и экспериментов.
        </p>
        <img
          className={'about-me__photo'}
          src={studentPhoto}
          alt='Фото студента'
        />
        <a
          target='_blank'
          rel='noreferrer'
          className={'about-me__github-link'}
          href='https://github.com/AlekseySpirin'
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
