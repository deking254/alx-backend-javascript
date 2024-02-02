const server = require('http');
const databaseReader = require('./3-read_file_async');

const app = server.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/students') {
    databaseReader(process.argv[2]).then((r) => {
      res.end(r);
    });
  } else {
    res.end('Hello Holberton School!');
  }
});
app.listen(1245, '0.0.0.0', () => {});
module.exports = app;
