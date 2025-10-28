const { add, subtract } = require("./math");

it("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

it("should subtract two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});
