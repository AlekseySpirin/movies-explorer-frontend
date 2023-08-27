import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

function Movies({
  movies,
  handleSaveMovie,
  sortedMovies,
  savedMovies,
  handleDeleteMovie,
  isLoading,
  handleSearch,
  handleCheckbox,
  isReqErr,
  isNotFount,
}) {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [isShortFilm, setIsShortFilm] = useState(false);
  // const [sortedMovies, setSortedMovies] = useState(
  //   localStorage.getItem('movies') || [],
  // );
  // const [isReqErr, setIsReqErr] = useState(false);
  // const [isNotFount, setIsNotFound] = useState(false);
  //
  // useEffect(() => {
  //   const sortMovies = () => {
  //     let filtered = localStorage.getItem('movies') || [];
  //     if (searchQuery) {
  //       const query = searchQuery.toLowerCase().trim();
  //       filtered = filtered.filter(
  //         (movie) =>
  //           movie.nameRU.toLowerCase().includes(query) ||
  //           movie.nameEN.toLowerCase().includes(query),
  //       );
  //     }
  //     if (isShortFilm) {
  //       filtered = filtered.filter((movie) => movie.duration <= 40);
  //     }
  //
  //     setSortedMovies(filtered);
  //   };
  //   sortMovies();
  // }, [movies, searchQuery, isShortFilm]);

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };
  //
  // const handleCheckbox = (checked) => {
  //   setIsShortFilm(checked);
  // };
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <>
      <Navigation />
      <main className={'movies'}>
        <SearchForm
          handleSearch={handleSearch}
          setIsFormSubmitted={setIsFormSubmitted}
        />
        <FilterCheckbox handleCheckbox={handleCheckbox} />
        <hr className={'movies__hr'} />
        <MoviesCardList
          savedMovies={savedMovies}
          movies={movies}
          sortedMovies={sortedMovies}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          isLoading={isLoading}
          isReqErr={isReqErr}
          isNotFount={isNotFount}
          isFormSubmitted={isFormSubmitted}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
