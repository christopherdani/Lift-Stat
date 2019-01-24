const http = require('http');
const routes = require('./routes');

http.createServer(routes.handleReq).listen(3000);