export default class Component {
  element;

  constructor(parentNode, htmlTag, className, innerHTML) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.element.innerHTML = innerHTML;
    parentNode.append(this.element);
  }
}
