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

import {
  REACT_APP_API_MAIN_URL,
  REACT_APP_API_MOVIES_URL,
} from '../utils/constants';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);

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
      Accept: 'application/json',
    },
  });
  // Фильмы
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState(
    [],
    // JSON.parse(localStorage.getItem('sortedMovies')) || [],
  );
  const [sortedSavedMovies, setSortedSavedMovies] = useState(
    [],
    // JSON.parse(localStorage.getItem('sortedSavedMovies')) || [],
  );
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Пользователь
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: userData?.name,
    email: userData?.email,
  });
  const [editingProfile, setEditingProfile] = useState(false);
  // мелочи
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReqErr, setIsReqErr] = useState(false);
  const [isNotFount, setIsNotFound] = useState(false);

  const resetAllStates = () => {
    setMovies([]);
    setSavedMovies([]);
    setSortedMovies([]);
    setSortedSavedMovies([]);
    setMoviesSearchQuery('');
    setSavedMoviesSearchQuery('');
    setIsShortMovies(false);
    setIsFormSubmitted(false);
    setUserData(null);
    setCurrentUser({
      name: null,
      email: null,
    });
    setEditingProfile(false);
    setIsLoggedIn(null);
    setIsLoading(false);
    setIsReqErr(false);
    setIsNotFound(false);
  };

  function showResults() {
    setIsResultsOpen(true);
  }

  function successResult() {
    setIsSuccess(true);
  }

  function closeAllPopups() {
    setIsResultsOpen(false);
    setEditingProfile(false);
  }

  function handleEditProfileClick(e) {
    e.preventDefault();
    setEditingProfile(true);
  }

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(closeAllPopups)

      .catch(console.error)

      .finally(() => setIsLoading(false));
  }

  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleUpdateUser({ name, email }) {
    function makeRequest() {
      return apiMain
        .editUserInfo({
          name,
          email,
        })
        .then((res) => {
          setCurrentUser(res);
          setResponseMessage('Обновление данных прользователя прошло успешно');
          setErrorMessage('');
        })
        .catch((err) => {
          console.log(err);
          if (err === 'Ошибка 409') {
            setResponseMessage('');
            setErrorMessage('Пользователь с таким email уже существует');
            console.log(responseMessage);
          } else {
            setErrorMessage('При обновлении профиля произошла ошибка');
          }
        });
    }

    handleSubmit(makeRequest);
  }

  function handleSaveMovie(movie) {
    return apiMain
      .addSavedMovie(movie)
      .then((newMovie) => {
        const updatedMovies = [newMovie, ...savedMovies];
        setSavedMovies(updatedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
      })
      .catch(console.error);
  }

  function handleDeleteMovie(movieId) {
    return apiMain
      .deleteMovie(movieId)
      .then((movie) => {
        const updatedMovies = savedMovies.filter((m) => m._id !== movie._id);
        setSavedMovies(updatedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
      })
      .catch(console.error);
  }

  function getLoginUserDataFromToken() {
    getContent()
      .then((data) => {
        console.log(data);
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
    localStorage.clear();
    resetAllStates();
    logout().then((res) => {
      console.log(res);
    });
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleLogin = ({ email, password }) =>
    authorize(email, password).then((data) => {
      console.log(data);
      navigate('/movies');
      getLoginUserDataFromToken();
      // getLoginUserDataFromToken(data);
    });

  const handleRegister = ({ name, email, password }, resetForm) =>
    // eslint-disable-next-line no-undef
    register(name, email, password).then(() => {
      handleLogin({
        email,
        password,
      });
      successResult();
      showResults();
      navigate('/signin');
      resetForm();
    });

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     Promise.all([apiMain.getUserInfo(), apiMovie.getMovies()])
  //       .then(([info, movie]) => {
  //         setCurrentUser(info);
  //         setMovies(movie);
  //         // navigate('/movies');
  //       })
  //       .catch(console.error);
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      apiMain
        .getUserInfo()
        .then((info) => {
          console.log(info);
          setCurrentUser(info);
          // navigate('/movies');
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    } else {
      setIsLoading(true);
      apiMovie
        .getMovies()
        .then((movie) => {
          setMovies(movie);
          localStorage.setItem('movies', JSON.stringify(movie));
          setIsReqErr(false);
          // navigate('/movies');
        })
        .catch((err) => {
          setIsReqErr(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('savedMovies');
    if (storedMovies) {
      setSavedMovies(JSON.parse(storedMovies));
    } else {
      apiMain
        .getMovies()
        .then((saveMovie) => {
          setSavedMovies(saveMovie);
          localStorage.setItem('savedMovies', JSON.stringify(saveMovie));
          setIsReqErr(false);
          // navigate('/movies');
        })
        .catch((err) => {
          setIsReqErr(false);
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // eslint-disable-next-line no-shadow
  const filterMovies = (query, isShortMovies) => {
    let filteredMovies = movies;

    // Фильтрация по общему поиску
    if (query) {
      const lowercaseQuery = query.toLowerCase().trim();
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(lowercaseQuery) ||
          movie.nameEN.toLowerCase().includes(lowercaseQuery),
      );

      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }

    // Фильтрация по длительности
    if (isShortMovies) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
      localStorage.setItem('shortMovies', JSON.stringify(isShortMovies));
    }

    setSortedMovies(filteredMovies);
    localStorage.setItem('sortedMovies', JSON.stringify(sortedMovies));
  };

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === true) {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    const moviesSearchQueryLS = localStorage.getItem('moviesSearchQuery');
    if (moviesSearchQueryLS) {
      setMoviesSearchQuery(moviesSearchQueryLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('moviesSearchQuery', moviesSearchQuery);
  }, [moviesSearchQuery]);

  useEffect(() => {
    const sortedMoviesLS = JSON.parse(localStorage.getItem('sortedMovies'));
    if (sortedMoviesLS) {
      setSortedMovies(sortedMoviesLS);
    }
  }, []);

  useEffect(() => {
    filterMovies(moviesSearchQuery, isShortMovies);
  }, [moviesSearchQuery, isShortMovies]);

  // eslint-disable-next-line no-shadow
  const filterSavedMovies = (savedMoviesQuery, isShortMovies) => {
    let filteredMovies = savedMovies;
    if (savedMoviesQuery) {
      const lowercaseSavedMoviesQuery = savedMoviesQuery.toLowerCase().trim();
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.nameRU.toLowerCase().includes(lowercaseSavedMoviesQuery) ||
          movie.nameEN.toLowerCase().includes(lowercaseSavedMoviesQuery),
      );

      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }

    // Фильтрация по длительности
    if (isShortMovies) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    setSortedSavedMovies(filteredMovies);
    localStorage.setItem(
      'sortedSavedMovies',
      JSON.stringify(sortedSavedMovies),
    );
  };

  useEffect(() => {
    filterSavedMovies(savedMoviesSearchQuery, isShortMovies);
  }, [savedMovies, savedMoviesSearchQuery, isShortMovies]);

  const handleSearch = (query) => {
    localStorage.setItem('shortMovies', isShortMovies);
    setMoviesSearchQuery(query);
    filterMovies(query, isShortMovies);
  };

  const handleSearchSavedMovies = (query) => {
    setSavedMoviesSearchQuery(query);
    filterSavedMovies(query, isShortMovies);
  };

  const handleCheckbox = (checked) => {
    setIsShortMovies(checked);
    filterMovies(moviesSearchQuery, checked);
    localStorage.setItem('isShortMovies', JSON.stringify(checked));
  };
  const handleCheckboxSavedMovies = (checked) => {
    setIsShortMovies(checked);
    filterMovies(savedMoviesSearchQuery, checked);
    localStorage.setItem('isShortMovies', JSON.stringify(checked));
  };

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
      <Routes>
        <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
        <Route
          path='/movies'
          element={
            <ProtectedRouteElement
              element={Movies}
              isLoading={isLoading}
              isLoggedIn={isLoggedIn}
              handleSaveMovie={handleSaveMovie}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
              handleSearch={handleSearch}
              handleCheckbox={handleCheckbox}
              movies={movies}
              sortedMovies={sortedMovies}
              isReqErr={isReqErr}
              isNotFount={isNotFount}
              isFormSubmitted={isFormSubmitted}
              setIsFormSubmitted={setIsFormSubmitted}
              isShortMovies={isShortMovies}
              moviesSearchQuery={moviesSearchQuery}
              setIsShortMovies={setIsShortMovies}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRouteElement
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              handleSearchSavedMovies={handleSearchSavedMovies}
              handleCheckboxSavedMovies={handleCheckboxSavedMovies}
              sortedMovies={sortedMovies}
              isReqErr={isReqErr}
              isNotFount={isNotFount}
              sortedSavedMovies={sortedSavedMovies}
              isFormSubmitted={isFormSubmitted}
              setIsFormSubmitted={setIsFormSubmitted}
              isShortMovies={isShortMovies}
              setIsShortMovies={setIsShortMovies}
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
              handleUpdateUser={handleUpdateUser}
              editingProfile={editingProfile}
              isLoading={isLoading}
              handleEditProfileClick={handleEditProfileClick}
              setEditingProfile={setEditingProfile}
              responseMessage={responseMessage}
              errorMessage={errorMessage}
            />
          }
        />
        {isLoggedIn ? (
          <>
            <Route path='/signin' element={<Navigate to='/movies' />} />
            <Route path='/signup' element={<Navigate to='/movies' />} />
          </>
        ) : (
          <>
            <Route
              path='/signin'
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path='/signup'
              element={<Register handleRegister={handleRegister} />}
            />
          </>
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <InfoTooltip
        name={'result'}
        isSucces={isSuccess}
        isOpen={isResultsOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
