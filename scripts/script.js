const popup = document.querySelector(".popup");
let popupSecond = document.querySelector(".popup_card_publisher");
let plusProfileButton = document.querySelector(".profile__plus");
let popupContainer = popup.querySelector(".popup__container");
let editProfileButton = document.querySelector(".profile__edit");
let popupClose = popup.querySelector(".popup__close");
let popupCloseSecond = popupSecond.querySelector(".popup__close_second");
let profileName = document.querySelector(".profile__author");
let profileText = document.querySelector(".profile__text");
let currentName = popup.querySelector(".popup__text_input_name");
let aboutMe = popup.querySelector(".popup__text_input_about");
let element = Array.from(document.querySelectorAll(".element"));
const newCardLink = document.querySelector(".popup__text_input_link");
const newCardTitle = document.querySelector(".popup__text_input_description");
const popupDescription = document.querySelector(".element__header");
const popupSecondContainer = document.querySelector(".popup__container_second");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".element");
  const popupCloseImage = document.querySelector(".popup__close_image");
  const popupImage = document.querySelector(".popup__image");
  const popupDescriptionImage = document.querySelector(".popup__description");
  const showImage = document.querySelector(".popup_big_image");
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
  const localName = name;
  const localLink = link;
  const elementList = document.querySelector(".elements__list");
  const clonedCard = cardTemplate.cloneNode(true);
  clonedCard.querySelector(".element__picture").src = localLink;
  const cardTitle = clonedCard.querySelector(".element__header");
  cardTitle.textContent = localName;
  elementList.prepend(clonedCard);
  const elementRecycleBin = Array.from(document.querySelectorAll(".element__bin"));
elementRecycleBin.forEach((item) =>
  item.addEventListener("click", function () {
    item.parentNode.remove();
  }),
);
};


const cardsPopulation  = () => {
  const initialCardsReversed = initialCards.reverse();
  initialCardsReversed.forEach((item) => {
    const cardPropsObject = {
      name: item.name,
      link: item.link,
    };
    createNewCard(cardPropsObject);
  });
};
cardsPopulation();

const popupPicture = document.querySelectorAll(".element__picture");

function openImage(src, description) {
  popupImage.src = src;
  popupDescriptionImage.textContent = description;
  showImage.classList.add("popup_open");
}

function closeImage() {
  showImage.classList.remove("popup_open");
}
popupPicture.forEach((pic) => {
  const descriptionPic = pic.parentNode.querySelector(".element__header");
  pic.addEventListener("click", (e) => {
    openImage(pic.currentSrc, descriptionPic.textContent);
  });
});
function getProfileInfo() {
  currentName.value = profileName.textContent;
  aboutMe.value = profileText.textContent;
}
function openPopup() {
  popup.classList.add("popup_open");
  getProfileInfo();
}
function closePopup() {
  popup.classList.remove("popup_open");
}
function handleSubmitButton(e) {
  e.preventDefault();
  profileName.textContent = currentName.value;
  profileText.textContent = aboutMe.value;
  closePopup();

}
function popupOpen() {
  popupSecond.classList.add("popup_open"); 
}

function popupCloseNow() {
  popupSecond.classList.remove("popup_open");
}
function handleSubmitButtonSecond(e) {
  e.preventDefault();
  const newCardObj = {
  link: newCardLink.value,
  name: newCardTitle.value,
  };
  createNewCard(newCardObj);
  popupCloseNow();
}

function likeAllElements () {
const likeButton = Array.from(document.querySelectorAll(".element__button"));
  likeButton.forEach((item) =>
    item.addEventListener("click", function () {
    item.classList.toggle("element__button_active");
    }),
  );
}
likeAllElements();
popupCloseImage.addEventListener("click", closeImage);
editProfileButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popupCloseSecond.addEventListener("click", popupCloseNow);
plusProfileButton.addEventListener("click", popupOpen);
popupContainer.addEventListener("submit", handleSubmitButton);
popupSecondContainer.addEventListener("submit", handleSubmitButtonSecond);








