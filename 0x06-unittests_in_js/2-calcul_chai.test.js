const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');
c = describe('Testing', ()=>{
  it('checksum', (done)=>{
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    done();
  })
  it('checksub', (done)=>{
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    done();
  })
  it('checkdiv', (done)=>{
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    done();
  })
  it('checkdivby0', (done)=>{
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    done();
  })
});
