process.on('message', function (work) {
	console.log('Slave got message');

	setTimeout(function () {
		console.log('Slave squares the number');
		work.processed = work.number * work.number;
		process.send(work);
	}, 1000);
});