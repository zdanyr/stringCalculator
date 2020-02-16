const { handleOneOrManyCustomDelimitersAnyLength } = require("./handleOneOrManyCustomDelimitersAnyLength");

test.each`
  input                   | expected
  ${"//[***]\n1***2***3"} | ${6}
`(
  "returns $expected when $input is custom delimiter",
  ({ input, expected }) => {
    const result = handleOneOrManyCustomDelimitersAnyLength(input);
    expect(result).toBe(expected);
  }
);