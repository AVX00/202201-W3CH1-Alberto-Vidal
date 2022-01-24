export default class CreateCard {
  card = document.createElement("div");
  cardbody;

  constructor(imgSrc, personaje) {
    this.card.className = "card character__card";
    this.cardBody = CreateCard.createCardBody(
      personaje,
      CreateCard.createCharacterInfo(CreateCard.createOverviewList(personaje))
    );
    this.card.append(CreateCard.createImg(imgSrc, personaje), this.cardBody);
  }

  static createImg(imgSrc, personaje) {
    const img = document.createElement("img");
    img.className = "character__picture card-img-top";
    img.src = imgSrc;
    img.alt = `${personaje.nombre} ${personaje.familia}`;
    return img;
  }

  static createCardBody(personaje, characterOverview) {
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const characterName = document.createElement("h2");
    characterName.className = "character__name card-title h4";
    characterName.innerText = `${personaje.nombre} ${personaje.familia}`;
    cardBody.append(characterName, characterOverview);
    return cardBody;
  }

  static createCharacterInfo(list) {
    const characterInfo = document.createElement("div");
    characterInfo.className = "character__info";
    characterInfo.append(list);
    return characterInfo;
  }

  static createOverviewList(personaje) {
    const list = document.createElement("ul");
    const edad = document.createElement("li");
    const thumbsli = document.createElement("li");
    const thumbs = document.createElement("i");
    list.className = "list-unstyled";
    edad.innerText = `Edad: ${personaje.edad} años`;
    thumbs.className = "fas fa-thumbs-up";
    thumbsli.append(thumbs);
    list.append(edad, thumbsli);
    return list;
  }
}
