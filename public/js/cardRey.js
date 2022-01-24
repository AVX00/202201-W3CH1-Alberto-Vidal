/* eslint-disable import/extensions */
import CreateCard from "./CreateCard.js";

export default class CreateCardRey extends CreateCard {
  constructor(personaje) {
    super(personaje);
    this.cardBody.append(
      CreateCardRey.filledOverlay(
        CreateCardRey.createOverlay(),
        CreateCardRey.createOverlayElements(personaje)
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

  static filledOverlay(overlay, overlayElements) {
    const filledOverlay = overlay;
    filledOverlay.append(super.createList(overlayElements));
    return filledOverlay;
  }
}
