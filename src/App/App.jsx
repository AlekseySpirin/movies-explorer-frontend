import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Register from '../pages/Register/Register';
import Main from '../pages/Main/Main';
import NotFound from '../components/NotFound/NotFound';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import MoviesApi from '../utils/MoviesApi';
import MainApi from '../utils/MainApi';
import { authorize, getContent, logout, register } from '../utils/auth';
import InfoTooltip from '../components/InfoTooltip/InfoTooltip';
import ProtectedRouteElement from '../components/ProtectedRoute/ProtectedRoute';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';

import Preloader from '../components/Preloader/Preloader';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);

  const {
    // REACT_APP_API_MAIN_URL = 'https://api.mesto-spirin.nomoredomains.work',
    REACT_APP_API_MAIN_URL = 'http://localhost:4000',
    REACT_APP_API_MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies',
  } = process.env;

  const apiMain = new MainApi({
    url: REACT_APP_API_MAIN_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const apiMovie = new MoviesApi({
    url: REACT_APP_API_MOVIES_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const [userData, setUserData] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  function showResults() {
    setIsResultsOpen(true);
  }

  function successResult() {
    setIsSuccess(true);
  }

  function closeAllPopups() {
    setIsResultsOpen(false);
  }

  function getLoginUserDataFromToken() {
    getContent()
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          setUserData(data);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log(err);
      });
  }

  const handleLogout = () => {
    logout().then((res) => console.log(res));
    setIsLoggedIn(false);
    navigate('/');
  };
  const handleLogin = ({ email, password }, resetForm) =>
    authorize(email, password).then((data) => {
      setIsLoggedIn(true);
      navigate('/movies');
      getLoginUserDataFromToken(data);
      resetForm();
    });

  const handleRegister = ({ email, password }, resetForm) =>
    // eslint-disable-next-line no-undef
    register(email, password).then(() => {
      successResult();
      showResults();
      navigate('/signin');
      resetForm();
    });

  useEffect(() => {
    Promise.all([apiMain.getUserInfo(), apiMovie.getMovies()])
      .then(([info, movie]) => {
        setCurrentUser(info);
        setMovies(movie);
        // navigate('/movies');
      })
      .catch(console.error);
  }, []);

  const checkToken = () => {
    getContent()
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          navigate(location.pathname);
        } else {
          setIsLoggedIn(false);
        }
        setUserData(data);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log(err);
      });
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (isLoggedIn === null) {
    return <Preloader />;
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <InfoTooltip
        name={'result'}
        isSucces={isSuccess}
        isOpen={isResultsOpen}
        onClose={closeAllPopups}
      />
      <Routes>
        <Route
          path='/'
          element={isLoggedIn ? <Navigate to='/movies' replace /> : <Main />}
        />
        <Route
          path='/movies'
          element={
            <ProtectedRouteElement
              element={Movies}
              isLoggedIn={isLoggedIn}
              movies={movies}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRouteElement
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              movies={movies}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRouteElement
              element={Profile}
              isLoggedIn={isLoggedIn}
              userData={userData}
              handleLogout={handleLogout}
            />
          }
        />
        <Route path='/signin' element={<Login handleLogin={handleLogin} />} />
        <Route
          path='/signup'
          element={<Register handleRegister={handleRegister} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
