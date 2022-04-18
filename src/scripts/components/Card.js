export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteButton, handleLikeButton},
    userId,
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeButton = handleLikeButton;
    this._id = data._id;
    this._owner = data.owner;
    this._userId = userId;
    this._likes = data.likes;
    this._likesAmount = data.likes.length;
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return this._element;
  }

  removeCard() {
    const card = this._element;
    card.remove();
    this._element = null;
  }

  _getId() {
    return this._id;
  }

    _deleteButton() { 
      const cardTrashButton = this._element.querySelector(".element__bin"); 
      if (this._owner._id !== this._userId) { 
          cardTrashButton.remove();
      } 
  } 

  _setEventListeners() {
    this._elementBin.addEventListener("click", () => {
      this._handleDeleteButton(this._getId());
    });
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton(this._likeButton, this._getId());
    });
    this._elementPicture.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  toggleLikeButton(likeButton) {
    likeButton.classList.toggle("element__button_active");
  }

  displayTotalLikes(totalLikes) {
    this._counter.textContent = totalLikes;
  }

  _handleCardLikes() {
    const cardLikes = Array.from(this._likes);
    cardLikes.forEach((element) => {
      if (element._id === this._userId) {
        this._likeButton.classList.add("element__button_active");
      }
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementBin = this._element.querySelector(".element__bin");
    this._likeButton = this._element.querySelector(".element__button");
    this._elementPicture = this._element.querySelector(".element__picture");
    this._counter = this._element.querySelector(".element__button-counter");
    this._setEventListeners();
    this._elementPicture.src = this._link;
    this._elementPicture.alt = `Photo of ${this._name}`;
    this._element.querySelector(".element__header").textContent = this._name;
    this._counter.textContent = this._likesAmount;
    this._handleCardLikes();
    this._deleteButton();
    return this._element;
  }
}
