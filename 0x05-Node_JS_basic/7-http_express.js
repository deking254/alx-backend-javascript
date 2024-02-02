const express = require('express');
const databaseReader = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  databaseReader(process.argv[2]).then((a) => { res.end(a); });
});
app.listen(1245);
module.exports = app;
