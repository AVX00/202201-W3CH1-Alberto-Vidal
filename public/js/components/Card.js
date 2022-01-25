import CardBody from "./CharacterCard.js";
import Component from "./Component.js";

export default class Card extends Component {
  constructor(parentNode, personaje) {
    const className = "character col";
    const htmlTag = "li";

    super(parentNode, htmlTag, className);

    new CardBody(this.element, personaje);
  }
}
