export default class Component {
  element;

  constructor(parentNode, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    parentNode.append(this.element);
  }
}
