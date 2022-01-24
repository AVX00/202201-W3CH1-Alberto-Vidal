/* eslint-disable import/extensions */
import CreateCard from "./createCard.js";

export default class CreateCardRey extends CreateCard {
  constructor(imgSrc, personaje) {
    super(imgSrc, personaje);
    this.cardBody.append(CreateCardRey.createOverlay());
  }

  static createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "character__overlay";
    return overlay;
  }
}
