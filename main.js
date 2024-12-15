function createElement(HTML) {
  const el = document.createElement("div");
  el.insertAdjacentHTML("beforeend", HTML);
  return el.firstElementChild;
}

class Avatar {
  _state = {
    like: false,
  };

  constructor(premium, image, text) {
    this._premium = premium;
    this._image = image;
    this._text = text;
    this._init();
    this._addListeners();
  }

  _init() {
    this._element = createElement(this._getTemplate());
  }

  _addListeners() {
    this._element.querySelector(".avatar__like").addEventListener("click", () => {
      this._setStateLike(!this._state.like);
      this._render();
    });
  }
	
  _getTemplate() {
    return `<div class="avatar ${this._premium === true ? "avatar--premium" : ""}">
          <img class="avatar__img" src="${this._image}" alt="${this._text}" />
					<div class="avatar__like"><i class="fa-regular fa-thumbs-up"></i></div>
        </div>`;
  }

  _setStateLike(newState) {
    this._state.like = newState;
  }

  _render() {
    if (this._state.like === true) {
      this._element.querySelector(".avatar__like").innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    } else {
      this._element.querySelector(".avatar__like").innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
    }
  }

  get element() {
    return this._element;
  }
}

const messenger = document.querySelector(".messenger");
messenger.insertAdjacentElement("beforeend", new Avatar(true, "https://lipsum.app/id/24/100x100", "text").element);
const test = document.querySelector(".test");
test.insertAdjacentElement("beforeend", new Avatar(false, "https://lipsum.app/id/25/100x100", "text22").element);
