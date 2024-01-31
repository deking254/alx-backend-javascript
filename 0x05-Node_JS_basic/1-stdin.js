#!/bin/node
console.log('Welcome to Holberton School, what is your name?');
process.on('exit', () => console.log('This important software is now closing'));
process.stdin.on('data', (data) => {
  const stringdata = `Your name is: ${data.toString('utf8', 0, data.byteLength - 1)}`;
  process.stdout.write(`${stringdata}\r`);
  process.stdout.write('\n');
});
process.openStdin();
