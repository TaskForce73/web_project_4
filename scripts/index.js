const profilePopup = document.querySelector(".popup_profile_adder");
const cardPopup = document.querySelector(".popup_card_publisher");
const plusProfileButton = document.querySelector(".profile__plus");
const profileForm = profilePopup.querySelector(".popup__form");
const editProfileButton = document.querySelector(".profile__edit");
const closeProfilePopupButton = profilePopup.querySelector(".popup__close");
const closeCardPopupButton = cardPopup.querySelector(".popup__close_second");
const profileName = document.querySelector(".profile__author");
const profileText = document.querySelector(".profile__text");
const currentName = profilePopup.querySelector(".popup__input-name");
const aboutMe = profilePopup.querySelector(".popup__input-about");
const pageElements = Array.from(document.querySelectorAll(".element"));
const newCardLink = document.querySelector(".popup__input-link");
const newCardTitle = document.querySelector(".popup__input-description");
const popupDescription = document.querySelector(".element__header");
const cardForm = document.querySelector(".popup__form_second");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".element");
const closeImagePopupButton = document.querySelector(".popup__close_image");
const popupImage = document.querySelector(".popup__image");
const popupDescriptionImage = document.querySelector(".popup__description");
const imagePopup = document.querySelector(".popup_big_image");
const elementList = document.querySelector(".elements__list");

const createNewCard = (cardPropsObject) => {
  const { name, link } = cardPropsObject;
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector(".element__header");
  const newCardImage = card.querySelector(".element__picture");
  newCardImage.src = link;
  newCardImage.alt = `Photo of ${name}`;
  cardTitle.textContent = name;
  const popupPicture = card.querySelector(".element__picture");
  const descriptionPicture =
    popupPicture.parentNode.querySelector(".element__header");
  const handlePopupPicture = () => {
    openImage(popupPicture.currentSrc, descriptionPicture.textContent);
  };
  popupPicture.addEventListener("click", handlePopupPicture);
  const elementRecycleBin = card.querySelector(".element__bin");
  elementRecycleBin.addEventListener("click", function () {
    const mainElement = elementRecycleBin.closest(".element");
    mainElement.remove();
  });
  const likeButton = card.querySelector(".element__button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("element__button_active");
  });
  return card;
};

const renderCard = (cardPropsObject) => {
  const card = createNewCard(cardPropsObject);
  elementList.prepend(card);
};

const initializeCards = () => {
  const initialCardsReversed = initialCards.reverse();
  initialCardsReversed.forEach((item) => {
    const cardPropsObject = {
      name: item.name,
      link: item.link,
    };
    renderCard(cardPropsObject);
  });
};
initializeCards();

function openImage(src, description) {
  popupImage.src = src;
  popupDescriptionImage.textContent = description;
  popupImage.alt = `Photo of ${description}`;
  openImagePopup();
}

function fillProfileInfo() {
  currentName.value = profileName.textContent;
  aboutMe.value = profileText.textContent;
}

function handleSubmitButton(e) {
  e.preventDefault();
  profileName.textContent = currentName.value;
  profileText.textContent = aboutMe.value;
  closeProfilePopup();
  profileForm.reset();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const newCardObject = {
    link: newCardLink.value,
    name: newCardTitle.value,
  };
  renderCard(newCardObject);
  closeCardPopup();
  cardForm.reset();
}

function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupWithEsc);
}

function openAddCardPopup() {
  openPopup(cardPopup);
}

function openProfilePopup() {
  openPopup(profilePopup);
  fillProfileInfo();
}

function openImagePopup() {
  openPopup(imagePopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupWithEsc);
}

function closeCardPopup() {
  closePopup(cardPopup);
}

function closeProfilePopup() {
  closePopup(profilePopup);
}

function closeImagePopup() {
  closePopup(imagePopup);
}

const closePopupWithEsc = (event) => {
  if (event.key === "Escape") {
    const popupOpenClass = document.querySelector(".popup_open");
    closePopup(popupOpenClass);
  }
};

closeImagePopupButton.addEventListener("click", closeImagePopup);
editProfileButton.addEventListener("click", openProfilePopup);
closeProfilePopupButton.addEventListener("click", closeProfilePopup);
closeCardPopupButton.addEventListener("click", closeCardPopup);
plusProfileButton.addEventListener("click", openAddCardPopup);
profileForm.addEventListener("submit", handleSubmitButton);
cardForm.addEventListener("submit", handleAddCardFormSubmit);
