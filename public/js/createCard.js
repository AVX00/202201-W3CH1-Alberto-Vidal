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

  createCharacterInfo(personaje) {
    const characterInfo = document.createElement("div");
    characterInfo.className = "character__info";
  }

  createList(listClass, dataToDisplay) {
    const list = document.createElement("ul");
    list.className = listClass;
    dataToDisplay.forEach((data) => {
      const element = document.createElement("li");
      element.append = data;
      list.append(element);
    });
    return list;
  }

  formatDataList(isShort, personaje) {
    const data = [];

    if (isShort) {
      const edad = document.createElement("li");
      edad.innerText = `Edad: ${personaje.edad} años`;
      const icon = document.createElement("i");
      icon.className = "fas fa-thumbs-up";
      data.push(edad, icon);
    }
  }
}
