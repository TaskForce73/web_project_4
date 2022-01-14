let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let editProfileButton = document.querySelector('.profile-info__edit');
let popupClose = popup.querySelector(".popup__close");
let profileName = document.querySelector(".profile-info__author");
let profileText = document.querySelector(".profile-info__text");
let authorId = popup.querySelector('#name');
let aboutId = popup.querySelector('#about-me');
function getProfileInfo() {
    authorId.value = profileName.textContent;
    aboutId.value = profileText.textContent;
  }
  function openPopup() {
    popup.classList.add('popup__open');
    getProfileInfo();
  }
  editProfileButton.addEventListener('click', openPopup);

  function closePopup() {
    popup.classList.remove('popup__open');
  }
  
  popupClose.addEventListener('click', closePopup);
  
  function handleSubmitButton(e) {
    e.preventDefault();
    profileName.textContent = authorId.value;
    profileText.textContent = aboutId.value ;
    closePopup();
  }
  
  popupContainer.addEventListener('submit', handleSubmitButton);