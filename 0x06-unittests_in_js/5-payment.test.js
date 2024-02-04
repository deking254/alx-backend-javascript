const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment.js');
let a = sinon.spy(console, 'log');
beforeEach(()=>{
 a.resetHistory();
});
afterEach(()=>{
  a.resetHistory();
});
describe('Tests', ()=>{
  it('first_test', (done)=>{
    sendPaymentRequestToAPI(100, 20);
    expect(a.calledOnceWith('The total is: 120')).to.be.true;
    done();
  });
  it ('second_test', (done) => {
    sendPaymentRequestToAPI(10, 10);
    expect(a.calledOnceWith('The total is: 20')).to.be.true;
    done();
  });

})
