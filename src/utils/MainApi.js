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

  addSavedMovie({ name, link }) {
    return this._request('/cards', {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  deleteMovie(cardId) {
    return this._request(`/cards/${cardId}`, {
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
