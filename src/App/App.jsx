import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from '../pages/Register/Register';
import Movies from '../pages/Movies/Movies';
import Main from '../pages/Main/Main';
import NotFound from '../components/NotFound/NotFound';
import Login from '../pages/Login/Login';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import Profile from '../pages/Profile/Profile';

function App() {
  return (
    <div className={'root'}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Navigation /> */}
      {/* <Main /> */}
      {/* <Movies /> */}
      {/* <Footer /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <SavedMovies /> */}
      {/* <Profile /> */}
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
