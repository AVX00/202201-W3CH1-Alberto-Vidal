export default class CreateCard {
  card = document.createElement("div");
  cardbody;

  constructor(imgSrc, personaje) {
    this.card.className = "card character__card";
    this.cardBody = CreateCard.createCardBody(
      personaje,
      CreateCard.createCharacterInfo(
        CreateCard.createList(CreateCard.createOverviewElements(personaje))
      )
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

  static createList(listElemnts) {
    const list = document.createElement("ul");
    list.className = "list-unstyled";
    listElemnts.forEach((element) => {
      list.append(element);
    });
    return list;
  }

  static createOverviewElements(personaje) {
    const listElement = [];
    const edad = document.createElement("li");
    const thumbsli = document.createElement("li");
    const thumbs = document.createElement("i");

    edad.innerText = `Edad: ${personaje.edad} años`;
    thumbs.className = "fas fa-thumbs-up";
    thumbsli.append(thumbs);
    listElement.push(edad, thumbsli);
    return listElement;
  }
}
