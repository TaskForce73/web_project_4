import { popupImage, popupDescriptionImage, openImagePopup } from "./index.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    this._element = cardElement;
    return this._element;
  }

  _handleDeleteButton() {
    const card = this._element;
    card.remove();
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("element__button_active");
  }

  _handlePopupPicture() {
    popupImage.src = this._link;
    popupImage.alt = `Photo of ${this._name}`;
    popupDescriptionImage.textContent = this._name;
    openImagePopup();
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__bin")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });
    this._elementPicture.addEventListener("click", () => {
      this._handlePopupPicture();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".element__button");
    this._elementPicture = this._element.querySelector(".element__picture");
    this._setEventListeners();
    this._elementPicture.src = this._link;
    this._elementPicture.alt = `Photo of ${this._name}`;
    this._element.querySelector(".element__header").textContent = this._name;

    return this._element;
  }
}
