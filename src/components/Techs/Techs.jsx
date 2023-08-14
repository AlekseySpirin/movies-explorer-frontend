import React from 'react';
import './Techs.css';
import Title from '../Title/Title';

function Techs() {
  return (
    <div className='techs__wrapper'>
      <div id={'techs'} className={'techs'}>
        <Title text={'Технологии'} />
        <div className={'techs__container'}>
          <h3 className={'techs__subtitle'}>7 технологий</h3>
          <p className={'techs__text'}>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className={'techs-list'}>
          <li className={'techs-list__item'}>HTML</li>
          <li className={'techs-list__item'}>CSS</li>
          <li className={'techs-list__item'}>JS</li>
          <li className={'techs-list__item'}>React</li>
          <li className={'techs-list__item'}>Git</li>
          <li className={'techs-list__item'}>Express.js</li>
          <li className={'techs-list__item'}>mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
