const { cleanUpInput } = require('./cleanUp');

test.each`
  input                                | expected
  ${''}                                | ${0}
  ${'3\n5\n30,9'}                      | ${['3', '5', '30', '9']}
  ${'1000,1001,2,2000,1,5000'}         | ${['2', '1']}
  ${'2,2000,10'}                       | ${['2', '10']}
  ${'//-\n1-44-100'}                   | ${['1', '44', '100']}
  ${'//[///][*][#][%]\n1///2#3%4///5'} | ${['1', '2', '3', '4', '5']}
`('cleanUpInput should return $expected when $input', ({ input, expected }) => {
  const result = cleanUpInput(input);
  expect(result).toStrictEqual(expected);
});
