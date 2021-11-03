"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable */
require('dotenv').config()

var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _server = require('./config/server'); var _server2 = _interopRequireDefault(_server);

const port = process.env.PORT || 3000

const server = _http2.default.createServer(_server2.default)

server.listen(port, () => {
	console.log(`Server listens: ${port}`)
	console.log('====================================')
	console.log('===========SERVIDOR ATIVO===========')
	console.log('====================================')
})
