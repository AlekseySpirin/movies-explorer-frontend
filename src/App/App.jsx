import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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

// import Preloader from '../components/Preloader/Preloader';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);

  const {
    REACT_APP_API_MAIN_URL = 'https://api.best-movies-explorer.nomoredomains.xyz',
    // REACT_APP_API_MAIN_URL = 'http://localhost:4000',
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
  // Фильмы
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState(
    JSON.parse(localStorage.getItem('sortedMovies')) || [],
  );
  const [sortedSavedMovies, setSortedSavedMovies] = useState(
    JSON.parse(localStorage.getItem('sortedSavedMovies')) || [],
  );
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  //
  // const [movies, setMovies] = useState(null);
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

  function handleUpdateUser({ name, email }) {
    function makeRequest() {
      return apiMain
        .editUserInfo({
          name,
          email,
        })
        .then(setCurrentUser);
    }

    handleSubmit(makeRequest);
  }

  function handleSaveMovie(movie) {
    function makeRequest() {
      return apiMain.addSavedMovie(movie).then((newMovie) => {
        const updatedMovies = [newMovie, ...savedMovies];
        setSavedMovies(updatedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
      });
    }

    handleSubmit(makeRequest);
  }

  function handleDeleteMovie(movieId) {
    function makeRequest() {
      return apiMain.deleteMovie(movieId).then((movie) => {
        const updatedMovies = savedMovies.filter((m) => m._id !== movie._id);
        setSavedMovies(updatedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
      });
    }

    handleSubmit(makeRequest);
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
    console.log('Выход');
    logout().then((res) => console.log(res));
    localStorage.removeItem('movies');
    setIsLoggedIn(false);
    navigate('/');
  };
  const handleLogin = ({ email, password }) =>
    authorize(email, password).then((data) => {
      console.log(data);
      setIsLoggedIn(true);
      navigate('/movies');
      getLoginUserDataFromToken();
      // getLoginUserDataFromToken(data);
    });

  const handleRegister = ({ name, email, password }, resetForm) =>
    // eslint-disable-next-line no-undef
    register(name, email, password).then(() => {
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
    // if (isLoggedIn) {
    apiMain
      .getUserInfo()
      .then((info) => {
        console.log(info);
        setCurrentUser(info);
        // navigate('/movies');
      })
      .catch(console.error);
    // }
  }, []);

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
  }, []);

  useEffect(() => {
    // if (isLoggedIn) {
    apiMain
      .getMovies()
      .then((saveMovie) => {
        setSavedMovies(saveMovie);
        setIsReqErr(false);
        // navigate('/movies');
      })
      .catch((err) => {
        setIsReqErr(false);
        console.log(err);
      });
    // }
  }, [moviesSearchQuery]);

  // eslint-disable-next-line no-shadow
  const filterMovies = (query, isShortFilm) => {
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
    if (isShortFilm) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    setSortedMovies(filteredMovies);
  };

  useEffect(() => {
    filterMovies(moviesSearchQuery, isShortFilm);
  }, [moviesSearchQuery, isShortFilm]);

  // eslint-disable-next-line no-shadow
  const filterSavedMovies = (savedMoviesQuery, isShortFilm) => {
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
    if (isShortFilm) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    setSortedSavedMovies(filteredMovies);
  };

  useEffect(() => {
    filterSavedMovies(savedMoviesSearchQuery, isShortFilm);
  }, [savedMoviesSearchQuery, isShortFilm]);

  const handleSearch = (query) => {
    setMoviesSearchQuery(query);
    filterMovies(query, isShortFilm);
  };

  const handleSearchSavedMovies = (query) => {
    setSavedMoviesSearchQuery(query);
    filterSavedMovies(query, isShortFilm);
  };

  const handleCheckbox = (checked) => {
    setIsShortFilm(checked);
    filterMovies(moviesSearchQuery, checked);
  };
  const handleCheckboxSavedMovies = (checked) => {
    setIsShortFilm(checked);
    filterMovies(savedMoviesSearchQuery, checked);
  };

  // useEffect(() => {
  //   if (sortedSavedMovies.length === 0) {
  //     setSortedSavedMovies(savedMovies);
  //   }
  // }, [sortedSavedMovies]);
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     const sortMovies = () => {
  //       let filtered = movies;
  //       if (moviesSearchQuery) {
  //         const query = moviesSearchQuery.toLowerCase().trim();
  //         filtered = filtered.filter(
  //           (movie) =>
  //             movie.nameRU.toLowerCase().includes(query) ||
  //             movie.nameEN.toLowerCase().includes(query),
  //         );
  //         if (filtered.length === 0) {
  //           setIsNotFound(true);
  //         } else {
  //           setIsNotFound(false);
  //         }
  //       } else {
  //         setIsNotFound(false);
  //       }
  //       if (isShortFilm) {
  //         filtered = filtered.filter((movie) => movie.duration <= 40);
  //       }
  //
  //       setSortedMovies(filtered);
  //     };
  //     sortMovies();
  //   }
  // }, [moviesSearchQuery, isShortFilm]);

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

  // if (isLoggedIn === null) {
  //   return <Preloader />;
  // }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <InfoTooltip
        name={'result'}
        isSucces={isSuccess}
        isOpen={isResultsOpen}
        onClose={closeAllPopups}
      />
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
