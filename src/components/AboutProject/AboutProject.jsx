import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';

function AboutProject() {
  return (
    <section id={'about-project'} className={'about-project'}>
      <Title text={'О проекте'} />
      <section className={'about-project__description'}>
        <div className={'about-project-chapter'}>
          <h3 className={'about-project-chapter__title'}>
            Дипломный проект включал 5 этапов
          </h3>
          <p className={'about-project-chapter__text'}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className={'about-project-chapter'}>
          <h3 className={'about-project-chapter__title'}>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className={'about-project-chapter__text'}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </section>
      <div className={'about-project-duration'}>
        <div className={'about-project-duration__backend'}>
          <p>1 неделя</p>
        </div>
        <div className={'about-project-duration__frontend'}>
          <p>4 недели</p>
        </div>
      </div>
      <div className={'about-project-action'}>
        <div className={'about-project-action__backend'}>
          <p>Back-end</p>
        </div>
        <div className={'about-project-action__frontend'}>
          <p>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
