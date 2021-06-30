const BigNumber = require('bignumber.js');
const test = require('tape');

test('the biggest uint256 number', (t) => {
  let x = new BigNumber('1.1579209e+77');
  let z = new BigNumber(x);
  t.ok(x.isEqualTo(z));

  let one = new BigNumber('1');


  let long = new BigNumber('1e20');
  let precise = x.dividedBy(long);
  console.log(precise.toString());
  let restored = precise.multipliedBy(long);
  t.ok(x.isEqualTo(restored));

  t.end();
});


