const profilePopup = document.querySelector(".popup_profile_adder");
const cardPopup = document.querySelector(".popup_card_publisher");
const plusProfileButton = document.querySelector(".profile__plus");
const popupContainer = profilePopup.querySelector(".popup__container");
const editProfileButton = document.querySelector(".profile__edit");
const closeProfilePopupButton = profilePopup.querySelector(".popup__close");
const closeCardPopupButton = cardPopup.querySelector(".popup__close_second");
const profileName = document.querySelector(".profile__author");
const profileText = document.querySelector(".profile__text");
const currentName = profilePopup.querySelector(".popup__text_input_name");
const aboutMe = profilePopup.querySelector(".popup__text_input_about");
const pageElements = Array.from(document.querySelectorAll(".element"));
const newCardLink = document.querySelector(".popup__text_input_link");
const newCardTitle = document.querySelector(".popup__text_input_description");
const popupDescription = document.querySelector(".element__header");
const popupSecondContainer = document.querySelector(".popup__container_second");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".element");
const closeImagePopupButton = document.querySelector(".popup__close_image");
const popupImage = document.querySelector(".popup__image");
const popupDescriptionImage = document.querySelector(".popup__description");
const imagePopup = document.querySelector(".popup_big_image");
const elementList = document.querySelector(".elements__list");
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const createNewCard = (cardPropsObject) => {
  const { name, link } = cardPropsObject;
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector(".element__header");
  const newCardImage = card.querySelector(".element__picture");
  newCardImage.src = link;
  newCardImage.alt = `Photo of ${name}`;
  cardTitle.textContent = name;
  const popupPicture = card.querySelector(".element__picture");
  popupPicture.addEventListener("click", function () {
    const descriptionPic =
      popupPicture.parentNode.querySelector(".element__header");
    openImage(popupPicture.currentSrc, descriptionPic.textContent);
  });
  const elementRecycleBin = card.querySelector(".element__bin");
  elementRecycleBin.addEventListener("click", function () {
    elementRecycleBin.parentNode.remove();
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
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const newCardObject = {
    link: newCardLink.value,
    name: newCardTitle.value,
  };
  renderCard(newCardObject);
  closeCardPopup();
  popupSecondContainer.reset();
}

function openPopup(popup) {
  popup.classList.add("popup_open");
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

closeImagePopupButton.addEventListener("click", closeImagePopup);
editProfileButton.addEventListener("click", openProfilePopup);
closeProfilePopupButton.addEventListener("click", closeProfilePopup);
closeCardPopupButton.addEventListener("click", closeCardPopup);
plusProfileButton.addEventListener("click", openAddCardPopup);
popupContainer.addEventListener("submit", handleSubmitButton);
popupSecondContainer.addEventListener("submit", handleAddCardFormSubmit);
