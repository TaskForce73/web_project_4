import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._popup.querySelector(".popup__button");
    this._inputs = [...this._form.querySelectorAll(".popup__input")];
  }
  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  changeButtonText(text = "Saving...") {
    this._submitButton.textContent = text;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      this.changeButtonText();
      e.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
