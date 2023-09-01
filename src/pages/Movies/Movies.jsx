import SearchForm from '../../components/SearchForm/SearchForm';
import './Movies.css';
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
  isFormSubmitted,
  setIsFormSubmitted,
  moviesSearchQuery,
  isShortMovies,
  setIsShortMovies,
}) {
  return (
    <>
      <Navigation />
      <main className={'movies'}>
        <SearchForm
          moviesSearchQuery={moviesSearchQuery}
          setIsFormSubmitted={setIsFormSubmitted}
          handleSearch={handleSearch}
          isShortMovies={isShortMovies}
          handleCheckbox={handleCheckbox}
          setIsShortMovies={setIsShortMovies}
        />
        {/* <FilterCheckbox */}
        {/*   handleSearch={handleSearch} */}
        {/*   isShortMovies={isShortMovies} */}
        {/*   handleCheckbox={handleCheckbox} */}
        {/*   setIsShortMovies={setIsShortMovies} */}
        {/* /> */}
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
