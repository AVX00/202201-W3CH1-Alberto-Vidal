import Card from "./components/Card.js";
import Rey from "./Rey.js";

const personaje = new Rey("haleu", "tuhen", 33, 2);

if (personaje instanceof Rey) {
  console.log(323);
}
const container = document.querySelector(".characters-list");

new Card(container);
