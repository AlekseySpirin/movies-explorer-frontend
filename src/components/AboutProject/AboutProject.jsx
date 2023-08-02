import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <div className={'about-project'}>
      <h2 className={'title'}>О проекте</h2>
      <section className={'about-project__description'}>
        <div className={'chapter'}>
          <h3 className={'chapter__title'}>
            Дипломный проект включал 5 этапов
          </h3>
          <p className={'chapter__text'}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className={'chapter'}>
          <h3 className={'chapter__title'}>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className={'chapter__text'}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </section>
      <div className={'duration'}>
        <div className={'duration__backend'}>
          <p>1 неделя</p>
        </div>
        <div className={'duration__frontend'}>
          <p>4 недели</p>
        </div>
      </div>
      <div className={'action'}>
        <div className={'action__backend'}>
          <p>Back-end</p>
        </div>
        <div className={'action__frontend'}>
          <p>Front-end</p>
        </div>
      </div>
    </div>
  );
}
export default AboutProject;
