const { add, subtract, multiply, divide, square, modulo } = require("./math");

it("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

it("should subtract two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});

it("should multiply two numbers", () => {
  expect(multiply(2, 3)).toBe(6);
});

it("should divide two numbers", () => {
  expect(divide(1, 2)).toBe(0.5);
});

it("should square a number", () => {
  expect(square(2)).toBe(4);
});

it("should modulo two numbers", () => {
  expect(modulo(1, 2)).toBe(1);
});
