const {
  isCustomSeparator,
  isOneOrManyCustomDelimitersAnyLength,
} = require('./utils');

test.each`
  input           | expected
  ${'//;\n1;2'}   | ${true}
  ${'//-\n1-2-9'} | ${true}
  ${'/;\n1;2'}    | ${false}
`(
  'isCustomSeparator should return $expected when $input',
  ({ input, expected }) => {
    const result = isCustomSeparator(input);
    expect(result).toBe(expected);
  },
);

test.each`
  input                            | expected
  ${'//[a][b][c][d]\n1a2a3b3c4d5'} | ${true}
  ${'//-\n1-2-9'}                  | ${false}
`(
  'isOneOrManyCustomDelimitersAnyLength should return $expected when $input',
  ({ input, expected }) => {
    const result = isOneOrManyCustomDelimitersAnyLength(input);
    expect(result).toBe(expected);
  },
);
