import Asesor from "../Asesor.js";
import Escudero from "../Escudero.js";
import Luchador from "../Luchador.js";
import Rey from "../Rey.js";
import Component from "./Component.js";

export default class CardBody extends Component {
  constructor(parentNode) {
    const htmlTag = "div";
    const className = "card-body";
    super(parentNode, htmlTag, className, innerHTML);
  }

  generateInner(personaje) {
    const innerHTML = `
    <h2 class="character__name card-title h4">${personaje.nombre}${personaje.familia}</h2>
      <div class="character__info">
        <ul class="list-unstyled">
          <li>Edad: X años</li>
          <li>
            Estado:
            <i class="fas fa-thumbs-up"></i>
          </li>
        </ul>
      </div>
      <div class="character__overlay">
        <ul class="list-unstyled">
          
          <li>Arma: XXX</li>
          <li>Destreza: X</li>
          <li>Peloteo: X</li>
          <li>Asesora a: X</li>
          <li>Sirve a: X</li>
        </ul>
        <div class="character__actions">
        </div>
      </div>
      `;
    this.element.innerHTML = innerHTML;
  }

  generateListInfo(personaje) {
    let listInfo;
    if (personaje instanceof Rey) {
      listInfo = `
        <li>Años de reinado: ${personaje.anyosReinado}</li>
      `;
    } else if (personaje instanceof Asesor) {
    } else if (personaje instanceof Luchador) {
    } else {
      listInfo = `
      <li>Sirve a: ${personaje.sirveA.nombre}</li>
      <li>Peloteo: ${personaje.pelotismo}</li>
      `;
    }
    return listInfo;
  }
}
