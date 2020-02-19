const {
  isSingleCustomSeparator,
  findDelimiter,
} = require('./handleSingleCustomDelimiter');

test.each`
  input           | expected
  ${'//;\n1;2'}   | ${true}
  ${'//-\n1-2-9'} | ${true}
  ${'/;\n1;2'}    | ${false}
`(
  'isSingleCustomSeparator should return $expected when $input',
  ({ input, expected }) => {
    const result = isSingleCustomSeparator(input);
    expect(result).toBe(expected);
  },
);

test.each`
  input           | expected
  ${'//;\n1;2'}   | ${';'}
  ${'//-\n1-2-9'} | ${'-'}
`(
  'returns $expected when $input contains custom delimiter',
  ({ input, expected }) => {
    const result = findDelimiter(input);
    expect(result).toBe(expected);
  },
);
