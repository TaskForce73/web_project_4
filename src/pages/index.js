import "../pages/index.css";
import Card from "../scripts/components/Card";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithForm from "../scripts/components/PopupWithForm";
import UserInfo from "../scripts/components/UserInfo";
import Section from "../scripts/components/Section";
import FormValidator from "../scripts/components/FromValidator";
import PopupWithSubmit from "../scripts/components/PopupWithSubmit";
import Api from "../scripts/components/Api";
import { pageSettings } from "../scripts/utils/constants";

const plusProfileButton = document.querySelector(".profile__plus");
const profileForm = document.querySelector(".popup__form");
const editProfileButton = document.querySelector(".profile__edit");
const cardForm = document.querySelector(".popup__form_second");
const editAvatarButton = document.querySelector(".profile__overlay");
const avatarForm = document.querySelector(".popup__form_avatar");
let id;

import headerSrc from "../images/header.svg";
const headerImage = document.getElementById("around-the-us");
headerImage.src = headerSrc;

import profileSrc from "../images/Cousteau.png";
const profileImage = document.getElementById("profile-image");
profileImage.src = profileSrc;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "32b9efa0-6f35-4afe-975e-e3a6be43cfcb",
    "Content-Type": "application/json",
  },
});

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(pageSettings);

const confirmModal = new PopupWithSubmit(".popup_card_remover");
confirmModal.setEventListeners();

const imageModal = new PopupWithImage(".popup_big_image");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile_adder", (data) => {
  api
    .editProfile({ name: data.name, about: data.about })
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about });
      editModal.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      editModal.changeButtonText("Save");
    });
});
editModal.setEventListeners();

const avatarEditModal = new PopupWithForm(".popup_profile_changer", (data) => {
  api
    .changeAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserAvatar({ avatar: res.avatar });
      avatarEditModal.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      avatarEditModal.changeButtonText("Save");
    });
});
avatarEditModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_card_publisher", (data) => {
  api
    .createCard({ name: data.description, link: data.link })
    .then((res) => {
      section.addItem(createNewCard(res, res.owner._id));
      addCardModal.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      addCardModal.changeButtonText("Save");
    });
});
addCardModal.setEventListeners();

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardData, userData]) => {
    userInfo.setUserInfo({ name: userData.name, about: userData.about });
    section.render(cardData);
  })
  .catch((err) => {
    console.log(err);
  });

const section = new Section(
  {
    renderer: (cardData) => {
      section.addItem(createNewCard(cardData));
    },
  },
  ".elements__list"
);

const userInfo = new UserInfo({
  profileNameSelector: ".profile__author",
  profileJobSelector: ".profile__text",
  avatarSelector: ".profile__image",
});

function createNewCard(data, id) {
  const card = new Card(
    {
      data,
      handleCardClick: (name, link) => {
        imageModal.open(name, link);
      },
      handleDeleteButton: (cardId) => {
        confirmModal.open(cardId);
        confirmModal.setAction(() => {
          api
            .deleteCard(cardId)
            .then(() => {
              card.removeCard();
              confirmModal.close();
            })
            .catch((err) => console.log(err));
        });
      },
      handleLikeButton: (likeButton, id) => {
        if (card.isLiked()) {
          api
            .dislikeCard(id)
            .then((res) => {
              card.displayTotalLikes(res.likes.length);
              card.unlike(likeButton);
            })
            .catch((err) => console.log(err));
        } else {
          api
            .likeCard(id)
            .then((res) => {
              card.displayTotalLikes(res.likes.length);
              card.like(likeButton);
            })
            .catch((err) => console.log(err));
        }
      },
    },
    id,
    "#card-template"
  );
  const cardElement = card.generateCard();
  return cardElement;
}

editProfileButton.addEventListener("click", () => {
  formValidators[profileForm.getAttribute("name")].resetValidation();
  editModal.open();
});

plusProfileButton.addEventListener("click", () => {
  formValidators[cardForm.getAttribute("name")].resetValidation();
  addCardModal.open();
});

editAvatarButton.addEventListener("click", () => {
  formValidators[avatarForm.getAttribute("name")].resetValidation();
  avatarEditModal.open();
});
