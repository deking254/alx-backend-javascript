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
app.listen(7865)
console.log('API available on localhost port 7865')
module.exports = app;
