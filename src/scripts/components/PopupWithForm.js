import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._popup.querySelector(".popup__button");
  }
  _getInputValues() {
    const inputValues = {};
    const inputs = [...this._form.querySelectorAll(".popup__input")];
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  changeButtonText() {
    this._submitButton.textContent = "Saving...";
  }

  showButtonText() {
    this._submitButton.textContent = "Save";
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      this.changeButtonText();
      e.preventDefault();
      this._handleSubmit(this._getInputValues());
      this._form.reset();
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this.showButtonText();
    super.close();
  }
}
