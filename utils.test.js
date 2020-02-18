const { isCustomSeparator } = require('./utils');

test.each`
  input           | expected
  ${'//;\n1;2'}   | ${true}
  ${'//-\n1-2-9'} | ${true}
  ${'/;\n1;2'}    | ${false}
`(
  'should return $expected when $input matches regular expression',
  ({ input, expected }) => {
    const result = isCustomSeparator(input);
    expect(result).toBe(expected);
  },
);
