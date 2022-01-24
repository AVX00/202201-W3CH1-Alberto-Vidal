/* eslint-disable import/extensions */
import CreateCardRey from "./cardRey.js";
import personajes from "./personajes.js";

const card = new CreateCardRey("img/bronn.jpg", personajes[0]);
const cardHolder = document.querySelector(".characters-list");
const listElement = document.createElement("li");
listElement.className = "character col";
listElement.append(card.card);
cardHolder.append(listElement);
