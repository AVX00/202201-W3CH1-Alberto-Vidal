/* eslint-disable import/extensions */
import Personaje from "./personaje.js";

export default class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edadLuchador,
    armaLuchador,
    valorDestreza
  ) {
    super(nombreLuchador, familiaLuchador, edadLuchador);
    this.arma = armaLuchador;
    this.destreza = Luchador.filtraDestreza(valorDestreza);
  }

  static filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    }
    if (valorDestreza > 10) {
      return 10;
    }
    return valorDestreza;
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}
