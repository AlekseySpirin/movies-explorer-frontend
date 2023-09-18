export default class MoviesApi {
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

  getMovies() {
    return this._request('/', {
      method: 'GET',
      headers: this.headers,
    });
  }
}
