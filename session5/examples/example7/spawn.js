var spawn = require('child_process').spawn;

var dir    = spawn('ls', ['-l']); //For linux
//var dir = spawn(process.env.comspec, ['/c', 'dir']); //For windows

var grep    = spawn('grep', ['js']); //For linux
//var grep = spawn(process.env.comspec, ['/c', 'grep', 'js']); //For windows

var fs = require('fs');
var resultFile = fs.createWriteStream('result.txt');

dir.stdout.pipe(grep.stdin);
grep.stdout.pipe(resultFile);
grep.stdout.pipe(process.stdout);

//Can be moved to spawn() parameters.
dir.stderr.pipe(process.stderr);
grep.stderr.pipe(process.stderr);