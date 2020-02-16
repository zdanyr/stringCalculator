const { splitInputReturnAfterBreakLine } = require("./add");

test.each`
  input           | expected
  ${"//;\n1;2"}   | ${"1;2"}
  ${"//-\n1-2-9"} | ${"1-2-9"}
`("returns $expected when $input contains break line", ({ input, expected }) => {
  const result = splitInputReturnAfterBreakLine(input);
  expect(result).toBe(expected);
});

