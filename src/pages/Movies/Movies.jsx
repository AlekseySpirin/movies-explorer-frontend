import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
import FilterCheckbox from '../../components/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import image from '../../images/33_word.jpg';
import Navigation from '../../components/Navigation/Navigation';

function Movies() {
  return (
    <div className={'movies'}>
      <Navigation />
      <SearchForm />
      <FilterCheckbox />
      <hr className={'movies__hr'} />
      <MoviesCardList>
        <MoviesCard
          shouldShowSaveButton
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          shouldShowSaveButton
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          shouldShowSaveButton
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          shouldShowSaveButton
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          shouldShowSaveButton
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          shouldShowSaveButton
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
        <MoviesCard
          title={'33 слова о дизайне'}
          alt={'33 слова о дизайне'}
          src={image}
          duration={'1ч 17м'}
        />
      </MoviesCardList>
      <button type={'button'} className='movies__btn-more'>
        Ещё
      </button>
      <Footer />
    </div>
  );
}

export default Movies;
