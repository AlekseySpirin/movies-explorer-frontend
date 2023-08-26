import React, { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

function Movies({
  movies,
  setMovies,
  handleSaveMovie,
  savedMovies,
  handleDeleteMovie,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    const sortMovies = () => {
      let filtered = movies;
      if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(
          (movie) =>
            movie.nameRU.toLowerCase().includes(query) ||
            movie.nameEN.toLowerCase().includes(query),
        );
      }
      if (isShortFilm) {
        filtered = filtered.filter((movie) => movie.duration <= 40);
      }

      setSortedMovies(filtered);
    };
    sortMovies();
  }, [movies, searchQuery, isShortFilm]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCheckbox = (checked) => {
    setIsShortFilm(checked);
  };
  return (
    <>
      <Navigation />
      <main className={'movies'}>
        <SearchForm handleSearch={handleSearch} />
        <FilterCheckbox handleCheckbox={handleCheckbox} />
        <hr className={'movies__hr'} />
        <MoviesCardList
          savedMovies={savedMovies}
          movies={sortedMovies}
          setMovies={setMovies}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
