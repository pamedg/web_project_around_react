class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    // cuerpo del constructor
  }
  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        return result;
      })
      .then((result) => {
        return result;
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "GET",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
      },
    }).then((res) => res.json());
  }

  updateUserInformation({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //body en patch y post//
        name,
        about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  createCard(name, link) {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "POST",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      this.isLiked = false;
      return Promise.reject(`Error: ${response.status}`);
    });
  }

  Likes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.Dislike(cardId);
    } else {
      return this.Likes(cardId);
    }
  }

  Dislike(cardId) {
    console.log(fetch(`${this._baseUrl}/cards/${cardId}/likes`));
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  Avatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error: ${res.status}`);
    });
  }

  DeleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
    "Content-Type": "application/json",
  },
});
