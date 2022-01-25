import Asesor from "../Asesor.js";
import Escudero from "../Escudero.js";
import Luchador from "../Luchador.js";
import Rey from "../Rey.js";
import Component from "./Component.js";
import Image from "./Image.js";

export default class CardBody extends Component {
  constructor(parentNode, personaje) {
    const htmlTag = "div";
    const className = "card character__card";
    super(parentNode, htmlTag, className, CardBody.generateInner(personaje));
  }

  static generateInner(personaje) {
    const innerHTML = `
    <div class="card-body">      
      <h2 class="character__name card-title h4">${personaje.nombre}${
      personaje.familia
    }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${personaje.edad} años</li>
            <li>
              Estado: ${personaje.vivo ? "vivo" : "muerto"}
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            ${CardBody.generateListInfo(personaje)}
          </ul>
          <div class="character__actions">

          </div>
        </div>
        <i class="emoji"></i>
      </div>
      `;
    return innerHTML;
  }

  static generateListInfo(personaje) {
    let listInfo;
    if (personaje instanceof Rey) {
      listInfo = `
        <li>Años de reinado: ${personaje.anyosReinado}</li>
      `;
    } else if (personaje instanceof Asesor) {
      listInfo = `
        <li>Asesora a: ${personaje.asesorado.nombre}</li>
      `;
    } else if (personaje instanceof Luchador) {
      listInfo = `
        <li>Arma: ${personaje.arma}</li>
        <li>Destreza: ${personaje.destreza}</li>
      `;
    } else if (personaje instanceof Escudero) {
      listInfo = `
      <li>Sirve a: ${personaje.sirveA.nombre}</li>
      <li>Peloteo: ${personaje.pelotismo}</li>
      `;
    } else {
      listInfo = `
        <li>Años de reinado: X</li>
        <li>Arma: XXX</li>
        <li>Destreza: X</li>
        <li>Peloteo: X</li>
        <li>Asesora a: X</li>
        <li>Sirve a: X</li>
      `;
    }
    return listInfo;
  }
}
