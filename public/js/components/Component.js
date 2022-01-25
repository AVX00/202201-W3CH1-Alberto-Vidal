export default class Component {
  element;

  constructor(parentNode, goAfter, htmlTag, className, innerHTML) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.element.innerHTML = innerHTML;
    if (goAfter) {
      parentNode.append(this.element);
    } else {
      parentNode.prepend(this.element);
    }
  }
}
