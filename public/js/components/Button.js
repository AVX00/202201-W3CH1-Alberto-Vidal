import Component from "./Component.js";

export default class Button extends Component {
  constructor(parentNode, text, action) {
    const htmlTag = "button";
    const className = "character__action btn";

    super(parentNode, true, htmlTag, className);
    this.element.innerText = text;
    this.on(action);
  }

  on(action) {
    this.element.addEventListener("click", () => {
      action();
    });
  }

  static die(card) {
    const image = card.querySelector(".character__picture");
    image.classList.add("character__picture--dead");
    const thumb = card.querySelector(".fas");
    thumb.classList.remove("fa-thumbs-up");
    thumb.classList.add("fa-thumbs-down");
  }

  static comunicate(personaje) {
    const comunications = document.querySelector(".comunications");
    const text = comunications.querySelector("p");
    comunications.classList.add("on");
    text.innerText = personaje.comunicar();
    setTimeout(() => {
      comunications.classList.remove("on");
    }, 2000);
  }
}
