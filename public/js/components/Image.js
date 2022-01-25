import Component from "./Component.js";

export default class Image extends Component {
  constructor(parentNode, personaje) {
    const htmlTag = "img";
    const className = "character__picture card-img-top";
    const alt = `${personaje.nombre} ${personaje.familia}`;
    const src = `img/${personaje.nombre.toLowerCase}.jpg`;
    super(parentNode, htmlTag, className, "");
    this.element.setAttribute("alt", alt);
    this.element.setAttribute("src", src);
  }
}
