export default class CreateCard {
  card = document.createElement("div");

  constructor(imgSrc, personaje) {
    this.card.className = "card character__card";
    this.createImg(imgSrc, personaje);
  }

  createImg(imgSrc, personaje) {
    const img = document.createElement("img");
    this.img.className = "character__picture card-img-top";
    this.img.src = imgSrc;
    this.img.alt = `${personaje.nombre} ${personaje.familia}`;
    this.card.append(img);
  }

  createCardBody(personaje) {
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const characterName = document.createElement("h2");
    characterName.className = "character__name card-title h4";
    characterName.innerText = `${personaje.nombre} ${personaje.familia}`;
    cardBody.append(characterName);
    return cardBody;
  }
}
