import React from 'react';
import './Main.css';
import Promo from '../../components/Promo/Promo';

import AboutProject from '../../components/AboutProject/AboutProject';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio/Portfolio';

function Main() {
  return (
    <div className={'main'}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default Main;
