#!/bin/node
console.log('Welcome to Holberton School, what is your name?');
process.on('exit', () => console.log('This important software is now closing'));
function handledata(data) {
  const stringdata = 'Your name is: ' + data.toString('utf8', 0, data.byteLength - 1);
  process.stdout.write(stringdata + '\r');
}
process.stdin.on('data', handledata);
process.openStdin();
