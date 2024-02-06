const express = require('express');
const app = express();
app.get('/', (request, response)=>{
	response.end('Welcome to the payment system');
})
app.get('/cart/:id', (request, response)=>{
  let id = request.params.id;
  if (parseInt(id)){
    response.end(`Payment methods for cart ${id}`)
  } else {
    response.sendStatus(404);
  }
})
app.get('/available_payments', (request, response)=>{
  response.end(JSON.stringify({
  payment_methods: {
    credit_cards: true,
    paypal: false
  }}));
})
app.post('/login', (request, response)=>{
  request.on('data', (data)=>{
    let userData = JSON.parse(data.toString());
    response.end(`Welcome ${userData.userName}`)
  })
})
app.listen(7865)
console.log('API available on localhost port 7865')
module.exports = app;
