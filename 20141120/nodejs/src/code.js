setTimeout(function() { console.log("hello"); }, 1000)
var t = setInterval(function() { console.log("hello"); }, 1000)
clearInterval(t)

var buf = new Buffer("OpenDevMeet")
buf.toString()
buf.length

/* file.js */
var fs = require("fs")
var file = fs.createReadStream('./test.txt')
file.setEncoding("utf8")
file.on("error", console.error)
file.on("data", console.log)
file.on("end", function() { console.log("end"); })

/* file2.js */
var fs = require("fs")
fs.createReadStream(process.argv[2]).pipe(process.stdout)


/* module.js */
module.exports = function() {
	console.log("I do some work here")
}
/* REPL */
var fun = require('./module.js')
fun();

/* server.js */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello OpenDevMeet");
}).listen(1337, "127.0.0.1");
console.log("Server listens on http://127.0.0.1:1337");
