export default class CreateCard {
  card = document.createElement("div");
  cardbody;
  comunications;
  talk = (personaje) => {
    this.comunications.querySelector(".comunications__text").innerText =
      personaje.comunicar();
    this.comunications.querySelector(".comunications__picture").src =
      CreateCard.createImg(personaje, true);
    this.comunications.classList.add("on");
    setTimeout(() => {
      this.comunications.classList.remove("on");
    }, 2000);
  };

  constructor(personaje) {
    this.comunications = document.querySelector(".comunications");
    this.card.className = "card character__card";
    this.cardBody = CreateCard.createCardBody(
      personaje,
      CreateCard.createCharacterInfo(
        CreateCard.createList(CreateCard.createOverviewElements(personaje))
      )
    );
    this.card.append(CreateCard.createImg(personaje, false), this.cardBody);
    console.log(personaje);
  }

  static createImg(personaje, onlySrc) {
    const img = document.createElement("img");
    img.className = "character__picture card-img-top";
    img.src = `img/${personaje.nombre.toLowerCase()}.jpg`;
    img.alt = `${personaje.nombre} ${personaje.familia}`;
    if (onlySrc) {
      return img.src;
    }
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

  createButtons(personaje) {
    const container = document.createElement("div");
    container.className = "character__actions";
    const hablaButton = document.createElement("button");
    const muereButton = document.createElement("button");
    hablaButton.className = "character__action btn";
    hablaButton.addEventListener("click", () => {
      this.comunications.querySelector(".comunications__text").innerText =
        personaje.comunicar();
      this.comunications.querySelector(".comunications__picture").src =
        CreateCard.createImg(personaje, true);
      this.comunications.classList.add("on");
      setTimeout(() => {
        this.comunications.classList.remove("on");
      }, 2000);
    });
    muereButton.className = "character__action btn";
    muereButton.addEventListener("click", () => {
      const thumb = this.card.querySelector(".fas");
      thumb.classList.remove("fa-thumbs-up");
      thumb.classList.add("fa-thumbs-down");
    });
    hablaButton.innerText = "Habla";
    muereButton.innerText = "Muere";

    container.append(hablaButton, muereButton);
    return container;
  }

  static addListener(element, call, ...parameters) {
    element.addEventListener("click", call(parameters));
  }
}
