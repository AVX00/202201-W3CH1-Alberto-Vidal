import Component from "./Component.js";

export default class Button extends Component {
  constructor(parentNode, action, ...options) {
    const htmlTag = "button";
    const className = "character__action btn";

    super(parentNode, htmlTag, className);

    Button.on(this.element, action, options);
  }

  static on(element, action, ...options) {
    element.addEventListerer("click", () => {
      action(options);
    });
  }
}
