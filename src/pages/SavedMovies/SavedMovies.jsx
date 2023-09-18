import React from 'react';
import Footer from '../../components/Footer/Footer';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import cardImage from '../../images/33_word.jpg';
import './SavedMovies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Navigation from '../../components/Navigation/Navigation';

function SavedMovies() {
  return (
    <div className={'saved-movies'}>
      <Navigation />
      <SearchForm />
      <FilterCheckbox />
      <hr className={'saved-movies__hr'} />
      <MoviesCardList>
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={cardImage}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={cardImage}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={cardImage}
          duration={'1ч 17м'}
        />
      </MoviesCardList>
      <Footer />
    </div>
  );
}

export default SavedMovies;
