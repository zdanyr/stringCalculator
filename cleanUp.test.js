const {
  inputToArrayCommaBackSlashSeparator,
  findDelimiter,
  convertInputWithCustomSeparatorIntoArray,
} = require('./cleanUp');

test.each`
  input              | expected
  ${'1,2,3'}         | ${['1', '2', '3']}
  ${'3\n5\n30,9,10'} | ${['3', '5', '30', '9', '10']}
`(
  'returns $expected when input has comma or break line separator',
  ({ input, expected }) => {
    const result = inputToArrayCommaBackSlashSeparator(input);
    expect(result).toEqual(expected);
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

test.each`
  input      | delimiter | expected
  ${'1;2'}   | ${';'}    | ${['1', '2']}
  ${'1-2-9'} | ${'-'}    | ${['1', '2', '9']}
`(
  'returns $expected when $input should be converted in array using custom delimiter',
  ({ input, delimiter, expected }) => {
    const result = convertInputWithCustomSeparatorIntoArray(input, delimiter);
    expect([...result]).toMatchObject(expected);
  },
);
