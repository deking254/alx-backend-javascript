const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');
describe('Testing', ()=>{
  it('tests', (done)=>{
    let sum = calculateNumber('SUM', 1.4, 4.5);
    expect(sum).to.equal(6);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    done();
});
});
