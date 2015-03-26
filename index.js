var server = require('./server');
var router = require('./router');
server.startserver(router.route);