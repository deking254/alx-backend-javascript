const server = require('http');

const app = server.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});
app.listen(1245, '0.0.0.0', () => {});
module.exports = app;
