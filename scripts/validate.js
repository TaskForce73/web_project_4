const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputSelector) => {
  return inputSelector.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputSelector, submitButtonSelector) => {
  console.log(hasInvalidInput(inputSelector));
  if (hasInvalidInput(inputSelector)) {
    submitButtonSelector.classList.add("popup__button_disabled");
    submitButtonSelector.setAttribute("disabled", true);
  } else {
    submitButtonSelector.classList.remove("popup__button_disabled");
    submitButtonSelector.removeAttribute("disabled", true);
  }
};

const setEventListeners = (formElement) => {
  const inputSelector = Array.from(
    formElement.querySelectorAll(".popup__input")
  );
  const submitButtonSelector = formElement.querySelector(".popup__button");
  toggleButtonState(inputSelector, submitButtonSelector);
  inputSelector.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputSelector, submitButtonSelector);
    });
  });
};

function enableValidation() {
  const formSelector = Array.from(document.querySelectorAll(".popup__form"));
  formSelector.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const fieldset = Array.from(
      formElement.querySelectorAll(".popup__fieldset")
    );
    fieldset.forEach((field) => {
      setEventListeners(field);
    });
  });
}
enableValidation();
