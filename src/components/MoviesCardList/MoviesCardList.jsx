import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import image from '../../images/33_word.jpg';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <div className='card-list__wrapper'>
      <ul className={'card-list'}>
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
      </ul>
    </div>
  );
}

export default MoviesCardList;
