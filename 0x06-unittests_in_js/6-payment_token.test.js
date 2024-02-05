const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');
describe('getPaymentTokenFromAPI', ()=>{
  it('testing', (done)=>{
    getPaymentTokenFromAPI(true).then((a)=>{
      try{
       expect(a).to.deep.equal({data: 'Successful response from the API' });
       done();
      } catch (e) {
        done(Error(e));
      }
  });
})
})
