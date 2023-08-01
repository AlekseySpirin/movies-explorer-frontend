import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Main from '../pages/Main/Main';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className={'root'}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
