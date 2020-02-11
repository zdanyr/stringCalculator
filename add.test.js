const { add, sum, inputToArray } = require("./add");

test("Empty string should return zero ", () => {
  const result = add("");
  expect(result).toBe(0);
});

test.each`
  input           | expected
  ${"1,2\n3"}     | ${6}
  ${"3\n5\n30,9"} | ${47}
`(
  "returns $expected when $input is comma or break line separator",
  ({ input, expected }) => {
    const result = add(input);
    expect(result).toBe(expected);
  }
);

test.each`
  input      | expected
  ${"1"}     | ${1}
  ${"1,2"}   | ${3}
  ${"1,2,3"} | ${6}
`("returns $expected when $input is comma separator", ({ input, expected }) => {
  const result = add(input);
  expect(result).toBe(expected);
});

test("should return sum of elements", () => {
  const toSum = [1, 2, 3, 4];
  const result = sum(toSum);
  expect(result).toBe(10);
});

test('comma separator input should transform into array',()=>{
const string = '1,2,3';
const result = inputToArray(string);
expect(result).toEqual(expect.arrayContaining(result));
})
