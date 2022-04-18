export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(card) {
    this._container.prepend(card);
  }

  render(items) {
    items.forEach((data) => {
      this._renderer(data);
    });
  }
}
