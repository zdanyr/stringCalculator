const {
  handleOneOrManyCustomDelimitersAnyLength,
  removeCustomDelimiterFromInput,
  removeAllCustomDelimitersFromInput
} = require("./handleOneOrManyCustomDelimitersAnyLength");

// test.each`
//   input                   | expected
//   ${"//[***]\n1***2***3"} | ${6}
// `(
//   "returns $expected when $input is custom delimiter",
//   ({ input, expected }) => {
//     const result = handleOneOrManyCustomDelimitersAnyLength(input);
//     expect(result).toBe(expected);
//   }
// );

test.each`
  input             | expected
  ${"1a2a3b3c4d5"}  | ${"1,2,3b3c4d5"}
  ${"10a2a3b3c4d5"} | ${"10,2,3b3c4d5"}
  ${"1a2a3b3c4a5"}  | ${"1,2,3b3c4,5"}
`("should return $expected when $input", ({ input, expected }) => {
  const delimiter = "a";
  const result = removeCustomDelimiterFromInput(input, delimiter);
  expect(result).toBe(expected);
});

test("removeAllCustomDelimitersFromInput", () => {
  let numbers = "1a2a3b3";
  const customDelimiters = ["a", "b"];
  const result = removeAllCustomDelimitersFromInput(numbers, customDelimiters);
  expect(result).toBe("1,2,3,3");
});


