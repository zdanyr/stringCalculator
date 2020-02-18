const {
  isCustomSeparator,
  isCommaOrBreakLineSeparator,
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
  input            | expected
  ${'3,5,3,9'}     | ${true}
  ${'1,2\n3'}      | ${true}
  ${'3\n5\n30,9'}  | ${true}
  ${'3\n5\n,30,9'} | ${false}
`(
  'isCommaOrBreakLineSeparator should return $expected when $input',
  ({ input, expected }) => {
    const result = isCommaOrBreakLineSeparator(input);
    expect(result).toBe(expected);
  },
);

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
