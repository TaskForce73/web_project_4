import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open(name, link) {
    const image = this._popup.querySelector(".popup__image");
    const caption = this._popup.querySelector(".popup__description");
    caption.textContent = name;
    image.alt = `Photo of ${name}`;
    image.src = link;
    super.open();
  }
}
