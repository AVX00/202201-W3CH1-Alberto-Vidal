import Card from "../public/js/components/Card.js";

describe("Given a Card", () => {
  describe("When initialized ", () => {
    test("Then it shoul render a li with class character", () => {
      const parentNode = document.createElement("div");

      new Card(parentNode);

      expect(parentNode.querySelector(".character")).not.toBeNull();
    });
  });
});
