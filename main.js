function createElement(HTML) {
  const el = document.createElement("div");
  el.insertAdjacentHTML("beforeend", HTML);
  return el.firstElementChild;
}

class Avatar {
  constructor(premium, image, text) {
    this._premium = premium;
    this._image = image;
    this._text = text;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
  }

  _getTemplate() {
    return `<div class="avatar ${this._premium === true ? "avatar--premium" : ""}">
          <img class="avatar__img" src="${this._image}" alt="${this._text}" />
        </div>`;
  }

  get element() {
    return this._element;
  }
}

const messenger = document.querySelector(".messenger");
messenger.insertAdjacentElement("beforeend", new Avatar(true, "https://lipsum.app/id/24/100x100", "text").element);
const test = document.querySelector(".test");
test.insertAdjacentElement("beforeend", new Avatar(false, "https://lipsum.app/id/25/100x100", "text22").element);
