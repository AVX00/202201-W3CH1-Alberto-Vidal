export default class CreateCard {
  card = document.createElement("div");

  constructor(imgSrc, personaje) {
    this.card.className = "card character__card";
    this.card.append(this.createImg(imgSrc, personaje));
    this.card.append(this.createCardBody(personaje));
  }

  createImg(imgSrc, personaje) {
    const img = document.createElement("img");
    img.className = "character__picture card-img-top";
    img.src = imgSrc;
    img.alt = `${personaje.nombre} ${personaje.familia}`;
    return img;
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

  createCharacterInfo(personaje, list) {
    const characterInfo = document.createElement("div");
    characterInfo.className = "character__info";
    characterInfo.append(list);
    return characterInfo;
  }
}
