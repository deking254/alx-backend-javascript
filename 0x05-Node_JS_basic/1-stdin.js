console.log('Welcome to Holberton School, what is your name?');
process.on('exit', () => console.log('This important software is now closing'));
process.stdin.on('data', handledata);
process.openStdin();
function handledata(data){
	var stringdata = data.toString('utf8', 0, data.byteLength - 1);
	console.log('Your name is: %s', stringdata)		
}
