var http = require('http');
var url=require('url');

function start(route){
	http.createServer(function (req, res) {
	  var pathname = url.parse(req.url).pathname;
	  console.log('request for pathname:'+pathname);
	  route(pathname);
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');
};
exports.startserver=start;