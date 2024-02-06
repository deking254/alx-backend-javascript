const { spy } = require('sinon');
const { expect } = require('chai');
const request = require('request');
let spyy = spy(console, 'log');
describe('index_page', ()=>{
    it('test_status_code', (done)=>{
      request.get('http://localhost:7865', (error, response)=>{
        expect(response.statusCode).to.be.equal(200);
        done()
      });
    })
    it('test_message', (done)=>{
      request.get('http://localhost:7865', (error, response)=>{
        expect(response.body).to.be.equal('Welcome to the payment system');
        done()
      });
    })
    it('test_status_code', (done)=>{
      request.get('http://localhost:7865/cart/14', (error, response)=>{
        expect(response.statusCode).to.be.equal(200);
	done()
      });
    })
    it('test_message', (done)=>{
      request.get('http://localhost:7865/cart/12', (error, response)=>{
        expect(response.body).to.be.equal('Payment methods for cart 12');
        done()
      });
    })
    it('test_status_code_id_not_int', (done)=>{
      request.get('http://localhost:7865/cart/hello', (error, response)=>{
        expect(response.statusCode).to.be.equal(404);
        done()
      });
    })
    it('available_payment_status', (done)=>{
      request.get('http://localhost:7865/available_payments', (error, response)=>{
        expect(response.statusCode).to.be.equal(200);
        done()
      });
    })
    it('available_payment_correct_return', (done)=>{
      request.get('http://localhost:7865/available_payments', (error, response)=>{
        expect(JSON.parse(response.body)).to.deep.include({payment_methods: {credit_cards: true, paypal: false}});
        done()
      });
    })
    it('login_status_code', (done)=>{
      request.post({url: 'http://localhost:7865/login', form: '{ "userName": "Betty" }'}, (error, response, j)=>{
        expect(response.statusCode).to.be.equal(200);
	done();
      })
    })
    it('login_betty', (done)=>{
      request.post({url: 'http://localhost:7865/login', form: '{ "userName": "Betty" }'}, (error, response, j)=>{
        expect('Welcome Betty'=== j).to.be.true;
        done();
      })
    })

});
