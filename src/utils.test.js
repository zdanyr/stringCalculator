const {
  splitInputReturnBeforeBreakLine,
  splitInputReturnAfterBreakLine,
  convertInputWithCustomSeparatorIntoArray,
} = require('./utils');

it.each`
  input                          | expected
  ${'//[/1*][%]\n1/1*2%3'}       | ${'//[/1*][%]\n'}
  ${'//[***][#][%]\n10***2#3%4'} | ${'//[***][#][%]\n'}
`('splitInputReturnBeforeBreakLine', ({ input, expected }) => {
  const result = splitInputReturnBeforeBreakLine(input);
  expect(result).toBe(expected);
});

test.each`
  input           | expected
  ${'//;\n1;2'}   | ${'1;2'}
  ${'//-\n1-2-9'} | ${'1-2-9'}
`(
  'returns $expected when $input contains break line',
  ({ input, expected }) => {
    const result = splitInputReturnAfterBreakLine(input);
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
    expect(result).toStrictEqual(expected);
  },
);
