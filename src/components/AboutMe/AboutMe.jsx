import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../images/photo.jpg';

function AboutMe() {
  return (
    <div id={'about-me'} className={'about-me'}>
      <h2 className={'title'}>Студент</h2>
      <hr className={'hr'} />
      <div className={'about-me__wrapper'}>
        <p className={'about-me__name'}>Алексей</p>
        <p className={'about-me__job'}>Фронтенд-разработчик, 31 год</p>
        <p className={'about-me__description'}>
          Приветствую! Меня зовут Алексей, и я живу в Ростове-на-Дону.
          Я&nbsp;получил высшее юридическое образование и работал в компании
          &quot;Смак&quot; с 2017 года. Однако, в последнее время я начал
          увлекаться программированием и веб-разработкой, и решил развивать свои
          навыки в этой области. Сейчас я прохожу курс по веб-разработке от
          Яндекс Практикума, а этот сайт, который вы просматриваете, станет моей
          дипломной работой. Я уверен, что это замечательная возможность
          продемонстрировать свои знания и умения в создании функциональных и
          привлекательных веб-сайтов.
        </p>
        {/* <div className={'about-me__photo'} /> */}
        <img
          className={'about-me__photo'}
          src={studentPhoto}
          alt='Фото студента'
        />
        <a
          className={'about-me__github-link'}
          href='https://github.com/AlekseySpirin'
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
