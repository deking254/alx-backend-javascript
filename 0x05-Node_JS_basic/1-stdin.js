console.log('Welcome to Holberton School, what is your name?');
process.on('exit', () => {
  console.log('This important software is now closing');
});
process.stdin.on('data', (data) => {
  const stringdata = `Your name is: ${data.toString()}`;
  process.stdout.write(`${stringdata}`);
});
process.openStdin();
