class Api {
  constructor({ url, userUrl, headers }) {
    this.url = url;
    this.userUrl = userUrl;
    this.headers = headers;
  }

  getUserInfo() {
    return fetch(this.userUrl, {
      headers: this.headers,
    }).then(checkResponse);
  }

  getCards() {
    return fetch(this.url, {
      headers: this.headers,
    }).then(checkResponse);
  }

  getAllData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  updateUserInfo(data) {
    return fetch(this.userUrl, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.username,
        about: data.job,
      }),
    }).then(checkResponse);
  }

  updateUserAvatar(res) {
    return fetch(`${this.userUrl}/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: res.avatar,
      }),
    }).then(checkResponse);
  }

  postNewCard(newCard) {
    return fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
      }),
    }).then(checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({
        _id: cardId,
      }),
    }).then(checkResponse);
  }

  likeCard(cardId) {
    return fetch(`${this.url}/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({
        _id: cardId,
      }),
    }).then(checkResponse);
  }

  dislikeCard(cardId) {
    return fetch(`${this.url}/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify({
        _id: cardId,
      }),
    }).then(checkResponse);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-42/cards",
  userUrl: "https://mesto.nomoreparties.co/v1/cohort-42/users/me",
  headers: {
    authorization: "7b060f74-b72c-47c7-a5e8-ffbce8b574c7",
    "Content-Type": "application/json",
  },
});

function checkResponse(res) {
  if (res.ok) {
    return Promise.resolve(res.json());
  }
  return Promise.reject(res.status);
}

export default api;
