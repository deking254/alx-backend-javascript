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
})
