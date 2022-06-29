//////////////////////METHODS TO TEST WITH JEST*********

//Test text
const text = "Hello world";

//Test array
const fruits = ["apple", "melon", "banana"];

//Test numbers
const number = 11;

//Test boolean
const boolean = true;

//Test callback
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

// Testing Promise
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

/////////////////////TESTS PRACTICE*********

//text
test("this contains a text", () => {
  expect(text).toMatch(/world/);
});

//Array
test("This part contains a fruit", () => {
  expect(fruits).toContain("banana");
});

//Number
test("the number is grater than other number", () => {
  expect(number).toBeGreaterThan(10);
});

//Boolean
test("this returns a true boolean", () => {
  expect(boolean).toBeTruthy();
});

//Callback
test("this test a callback function", () => {
  reverseString("Hello", (str) => {
    expect(str).toBe("olleH");
  });
});

//Promise
test("this test a promise", () => {
  return reverseString2("Hello").then((string) => {
    expect(string).toBe("olleH");
  });
});

//Async await
test("Testing async await", async () => {
  const string = await reverseString2("Hello");
  expect(string).toBe("olleH");
});


///////////Before*******
beforeEach(() => console.log('Before each test'));
beforeAll(() => console.log('Before all test'));

/////////////After*******
afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all test'));
