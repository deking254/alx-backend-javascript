const sinon = require('sinon');
const { expect } = require('chai');
const Util = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
let a = sinon.spy(Util, 'calculateNumber');
describe('sendPaymentRequestToApi', ()=>{
  it('testing', (done)=>{
    sendPaymentRequestToApi(100, 20)
    expect(a.calledWith('SUM', 100, 20)).to.be.true;
    done();
  })
})
