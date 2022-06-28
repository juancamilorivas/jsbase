const text = "Hello world";
const fruits = ["apple", "melon", "banana"];
const number = 11;
const boolean = true;

test("this contains a text", () => {
  expect(text).toMatch(/world/);
});

test("This part contains a fruit", () => {
  expect(fruits).toContain("banana");
});

test("the number is grater than other number", () => {
  expect(number).toBeGreaterThan(10);
});

test("this returns a true boolean", () => {
  expect(boolean).toBeTruthy();
});
