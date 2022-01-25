import Component from "../public/js/components/Component.js";

describe("Given a Component ", () => {
  describe("When initialized with htmlTag = button", () => {
    test("Then it shoul render a button", () => {
      const parentNode = document.createElement("div");
      const htmlTag = "button";

      new Component(parentNode, htmlTag);

      expect(parentNode.querySelector("button")).not.toBeNull();
    });
  });

  describe("when it's initialized with a innerhtml = <div class ='hola'></div>", () => {
    test("Then it should return an element wich contains a div with class hola", () => {
      const parentNode = document.createElement("div");
      const innerHtml = `<div class="hola"></div>`;

      new Component(parentNode, "div", "", innerHtml);

      expect(parentNode.querySelector(".hola")).not.toBeNull();
    });
  });
});
