import React from 'react';
import './Main.css';
import Promo from '../../components/Promo/Promo';

import AboutProject from '../../components/AboutProject/AboutProject';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio/Portfolio';
import MainHeader from '../../components/MainHeader/MainHeader';
import Footer from '../../components/Footer/Footer';

function Main() {
  return (
    <div className={'main'}>
      <MainHeader />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main;
