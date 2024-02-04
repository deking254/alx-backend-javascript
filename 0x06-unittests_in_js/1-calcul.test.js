const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
c = describe('Testing', ()=>{
  it('checksum', (done)=>{
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    done();
  })
  it('checksub', (done)=>{
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    done();
  })
  it('checkdiv', (done)=>{
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    done();
  })
  it('checkdivby0', (done)=>{
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    done();
  })
});
