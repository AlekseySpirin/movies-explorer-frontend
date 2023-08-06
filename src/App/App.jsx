import React from 'react';
import './App.css';
// import MainHeader from '../components/MainHeader/MainHeader';
import Footer from '../components/Footer/Footer';
import Movies from '../pages/Movies/Movies';

function App() {
  return (
    <div className={'root'}>
      {/* <MainHeader /> */}
      {/* <Main /> */}
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
