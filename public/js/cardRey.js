/* eslint-disable import/extensions */
import CreateCard from "./createCard.js";

export default class CreateCardRey extends CreateCard {
  constructor(personaje) {
    super(personaje);
    this.cardBody.append(
      CreateCardRey.filledOverlay(
        CreateCardRey.createOverlay(),
        CreateCardRey.createOverlayElements(personaje),
        this.putButtons(personaje)
      )
    );
  }

  static createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "character__overlay";
    return overlay;
  }

  static createOverlayElements(personaje) {
    const element = document.createElement("li");
    element.innerText = `Años de reinado: ${personaje.anyosReinado}`;
    return [element];
  }

  static filledOverlay(overlay, overlayElements, buttons) {
    const filledOverlay = overlay;
    filledOverlay.append(super.createList(overlayElements), buttons);
    return filledOverlay;
  }

  putButtons(personaje) {
    return super.createButtons(personaje);
  }
}
