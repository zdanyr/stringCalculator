const {
  handleCommaOrBreakLineSeparator,
} = require('./handleCommaOrBreakLineSeparator');

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
