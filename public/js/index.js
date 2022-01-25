import Button from "./components/Button.js";
import Card from "./components/Card.js";
import personajes from "./Personajes.js";

const parentIdentifier = document.querySelector(".characters-list");

personajes.forEach((personaje, i) => {
  new Card(parentIdentifier, personaje);
  const characterActions = document.querySelectorAll(".character__actions");
  const cards = document.querySelectorAll(".character");
  console.log(personaje.comunicar());
  new Button(characterActions[i], "Habla", () => {
    Button.comunicate(personaje);
  });
  new Button(characterActions[i], "Die", () => {
    Button.die(cards[i]);
  });
});
