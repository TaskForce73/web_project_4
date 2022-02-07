const pageSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputsList) => {
  return inputsList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputsList, elementButton, settings) => {
  if (hasInvalidInput(inputsList)) {
    elementButton.classList.add(settings.inactiveButtonClass);
    elementButton.setAttribute("disabled", true);
  } else {
    elementButton.classList.remove(settings.inactiveButtonClass);
    elementButton.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement, settings) => {
  const inputsList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const elementButton = formElement.querySelector(
    settings.submitButtonSelector
  );
  toggleButtonState(inputsList, elementButton, settings);
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputsList, elementButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formsList = Array.from(
    document.querySelectorAll(settings.formSelector)
  );
  formsList.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(formElement, settings);
  });
};

enableValidation(pageSettings);

