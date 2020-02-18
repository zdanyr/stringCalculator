const {
  isOneOrManyCustomDelimitersAnyLength,
  splitInputReturnAfterBreakLine,
  splitInputReturnBeforeBreakLine,
} = require('./utils');

test.each`
  input                            | expected
  ${'//[a][b][c][d]\n1a2a3b3c4d5'} | ${true}
  ${'//[***]\n1***2***3}'}         | ${true}
  ${'//[***][#][%]\n10***2#3%4'}   | ${true}
  ${'//[**1*][%%]\n1**1*2%%3'}     | ${true}
  ${'//-\n1-2-9'}                  | ${false}
`(
  'isOneOrManyCustomDelimitersAnyLength should return $expected when $input',
  ({ input, expected }) => {
    const result = isOneOrManyCustomDelimitersAnyLength(input);
    expect(result).toBe(expected);
  },
);

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

it.each`
  input                          | expected
  ${'//[/1*][%]\n1/1*2%3'}       | ${'//[/1*][%]\n'}
  ${'//[***][#][%]\n10***2#3%4'} | ${'//[***][#][%]\n'}
`('splitInputReturnBeforeBreakLine', ({ input, expected }) => {
  const result = splitInputReturnBeforeBreakLine(input);
  expect(result).toBe(expected);
});
