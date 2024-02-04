const calculateNumber = require('./0-calcul');
const assert = require('assert');
it('calculateNumber', (done)=>{
  assert.equal(calculateNumber(7.6, 2), 10);
  assert.equal(calculateNumber(3, 4.2), 7);
  assert.equal(calculateNumber(7.3, 3), 10);
  assert.equal(calculateNumber(6, 5.8), 12);
  done()
})
