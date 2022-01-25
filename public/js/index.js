import Card from "./components/Card.js";
import personajes from "./personajes.js";

new Card(document.querySelector(".characters-list"), personajes[0]);
new Card(document.querySelector(".characters-list"), personajes[2]);
