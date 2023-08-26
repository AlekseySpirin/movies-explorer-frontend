export default class MainApi {
  constructor(option) {
    this.url = option.url;
    this.headers = option.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _request(endpoint, options) {
    // eslint-disable-next-line no-underscore-dangle
    return fetch(`${this.url}${endpoint}`, options).then(this._getResponseData);
  }

  getUserInfo() {
    return this._request('/users/me', {
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
    });
  }

  editUserInfo({ name, email }) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getMovies() {
    return this._request('/movies', {
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
    });
  }

  addSavedMovie(movie) {
    return this._request('/movies', {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    });
  }

  deleteMovie(cardId) {
    return this._request(`/movies/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._request(`/cards/${cardId}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this.headers,
      credentials: 'include',
    });
  }
}
