const sinon = require('sinon');
const { expect } = require('chai');
const Util = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
let a = sinon.stub(Util, 'calculateNumber').returns(10);
let b = sinon.spy(console, 'log');
describe('sendPaymentRequestToApi', ()=>{
  it('testing', (done)=>{
    sendPaymentRequestToApi(100, 20)
    expect(b.calledWith('The total is: 10')).to.be.true;
    done();
  })
})
