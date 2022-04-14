const customFetch = (url, headers) => 
fetch(url, headers)
.then(res => res.ok ? res.json() : Promise.reject(res.statusText))
.catch(console.log)

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return customFetch(`${this._baseUrl}/cards`, { 
      headers: this._headers
     })
  }

  getUserInfo() {
    return customFetch(`${this._baseUrl}/users/me`, { 
      headers: this._headers
     })
  }

  createCard({name, link}) {
    return customFetch(`${this._baseUrl}/cards`, { 
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
     })
  }

  deleteCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/${cardId}`, { 
      method: 'DELETE',
      headers: this._headers,
     })
  }

  likeCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, { 
      method: 'PUT',
      headers: this._headers,
     })
  }

  dislikeCard(cardId) {
    return customFetch(`${this._baseUrl}/cards/likes/${cardId}`, { 
      method: 'DELETE',
      headers: this._headers,
     })
  }

  changeAvatar(avatar) {
    return customFetch(`${this._baseUrl}/users/me/avatar`, { 
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
  }   
}

