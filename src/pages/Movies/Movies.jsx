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
  isFormSubmitted,
  setIsFormSubmitted,
  isShortMovies,
  moviesSearchQuery,
  setIsShortMovies,
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

  return (
    <>
      <Navigation />
      <main className={'movies'}>
        <SearchForm
          moviesSearchQuery={moviesSearchQuery}
          handleSearch={handleSearch}
          setIsFormSubmitted={setIsFormSubmitted}
        />
        <FilterCheckbox
          isShortMovies={isShortMovies}
          handleCheckbox={handleCheckbox}
          setIsShortMovies={setIsShortMovies}
        />
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
