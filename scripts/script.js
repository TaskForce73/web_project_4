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
   const localName = name;
   const localLink = link;
   const clonedCard = cardTemplate.cloneNode(true);
   clonedCard.querySelector(".element__picture").src = localLink;
   const cardTitle = clonedCard.querySelector(".element__header");
   const newCardImage = clonedCard.querySelector(".element__picture");
   newCardImage.setAttribute("alt",localName);
   cardTitle.textContent = localName;
   elementList.prepend(clonedCard);
 function likeAllElements () {
   const likeButton = Array.from(clonedCard.querySelectorAll(".element__button"));
     likeButton.forEach((item) =>
       item.addEventListener("click", function () {
       item.classList.toggle("element__button_active");
       }),
     );
   }
   const popupPicture = document.querySelectorAll(".element__picture");
   popupPicture.forEach((picture) => {
     const descriptionPic = picture.parentNode.querySelector(".element__header");
     picture.addEventListener("click", (e) => {
       openImage(picture.currentSrc, descriptionPic.textContent);
     });
   });
   likeAllElements();
   deleteCard(clonedCard);
 };
// Hi, Kseniya! Nice to meet you! If it's possible I want to ask you some questions :)
//If you could give me some usefull tips I will be very thankful  =)
// First of all i tried to put a like button listener in the place you want me to put it. As a resalt i got a function where i could like not all elemements but only first, fird and fith. I don't now why it's working this way =\
//The second thing is that recycleBinButton. I tried to change querySelectorAll to querySelector and it's always error. Also if I want to select this element or LikeButtons without "Array.from" always occure an error.
// And the last one : i don't properly anderstand what you want me to do in renderCard function.To be precise I understood what i need to do but don't know how to realize it =/
// Thanks in advance!
 const initializeCards  = () => {
   const initialCardsReversed = initialCards.reverse();
   initialCardsReversed.forEach((item) => {
     const cardPropsObject = {
       name: item.name,
       link: item.link,
     };
     createNewCard(cardPropsObject);
   });
 };
 initializeCards();
 
 function deleteCard () {
 const elementRecycleBin = Array.from(document.querySelectorAll(".element__bin"));
 elementRecycleBin.forEach((item) =>
   item.addEventListener("click", function () {
     item.parentNode.remove();
   }),
 );
 }
 
 function openImage(src, description) {
   popupImage.src = src;
   popupDescriptionImage.textContent = description;
   popupImage.setAttribute("alt", description);
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
   const newCardObj = {
     link: newCardLink.value,
     name: newCardTitle.value,
   };
   createNewCard(newCardObj);
   closeCardPopup();
   document.getElementById('addCardForm').reset();
 }
 
 function openPopup(popup) { 
  popup.classList.add("popup_open"); 
} 

function openAddCardPopup() {
  openPopup(cardPopup);
}

function openProfilePopup() {
  openPopup(profilePopup);
  fillProfileInfo()
} 

function openImagePopup() {
openPopup(imagePopup);
}

function closePopup (close) {
close.classList.remove("popup_open");
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