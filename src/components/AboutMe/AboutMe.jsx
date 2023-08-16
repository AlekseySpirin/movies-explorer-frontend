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
        <p className={'about-me__job'}>Фронтенд-разработчик, 31 год</p>
        <p className={'about-me__description'}>
          Приветствую! Меня зовут Алексей, и я живу в Ростове-на-Дону. Я начал
          увлекаться программированием и веб-разработкой, и решил развивать свои
          навыки в этой области. Сейчас я прохожу курс по веб-разработке от
          Яндекс Практикума, а этот сайт, который вы просматриваете, станет моей
          дипломной работой. Я уверен, что это замечательная возможность
          продемонстрировать свои знания и умения в создании функциональных и
          привлекательных веб-сайтов.
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
