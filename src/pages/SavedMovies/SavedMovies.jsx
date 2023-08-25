import React from 'react';
import Footer from '../../components/Footer/Footer';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Navigation from '../../components/Navigation/Navigation';

function SavedMovies({ movies }) {
  return (
    <div className={'saved-movies'}>
      <Navigation />
      <SearchForm />
      <FilterCheckbox />
      <hr className={'saved-movies__hr'} />
      <MoviesCardList>
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            // onCardLike={onCardLike}
            movie={movie}
            // onCardClick={onCardClick}
            // onCardDelete={onCardDelete}
            // onConfirm={onConfirm}
          />
        ))}
      </MoviesCardList>
      <Footer />
    </div>
  );
}

export default SavedMovies;
