#!/usr/bin/babel-node
class AppController{

}
AppController.getHomepage = function(request, response){
  response.writeHead(200);
  response.end('Hello Holberton School!');
}
module.exports = AppController;
