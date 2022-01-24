/* eslint-disable import/extensions */
import CreateCard from "./createCard.js";
import personajes from "./personajes.js";

const card = new CreateCard("img/bronn.jpg", personajes[0]);
const cardHolder = document.querySelector(".characters-list");
const listElement = document.createElement("li");
listElement.className = "character col";
listElement.append(card.card);
cardHolder.append(listElement);
