const {
  isCommaOrBreakLineSeparator,
  handleCommaOrBreakLineSeparator,
} = require('./handleCommaOrBreakLineSeparator');

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
  input              | expected
  ${'1,2,3'}         | ${['1', '2', '3']}
  ${'3\n5\n30,9,10'} | ${['3', '5', '30', '9', '10']}
`(
  'returns $expected when input has comma or break line separator',
  ({ input, expected }) => {
    const result = handleCommaOrBreakLineSeparator(input);
    expect(result).toEqual(expected);
  },
);
