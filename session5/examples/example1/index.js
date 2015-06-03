var Radio = require('./radio.js');

var station = {
	freq: '80.16',
	name: 'Radio Ga'
};

var radio = new Radio(station);

radio.on('open', function (station) {
	console.log('"%s" FM %s OPENED', station.name, station.freq);
});

//notice 'once'
radio.once('playing', function (data) {
	console.log('We have started listening. This appears once.');
});

radio.on('playing', function (station, music) {
	console.log(music);
});

// add a 'close' event listener
radio.on('close', function (station) {
	console.log('"%s" FM %s CLOSED', station.name, station.freq);
});

radio.on('ghostEvent', function (data) {
	console.log(data.message);
});