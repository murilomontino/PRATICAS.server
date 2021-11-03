"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _swaggerjsdoc = require('swagger-jsdoc'); var _swaggerjsdoc2 = _interopRequireDefault(_swaggerjsdoc);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);

var _routes = require('../routes'); var _routes2 = _interopRequireDefault(_routes);
var _docs = require('./docs'); var _docs2 = _interopRequireDefault(_docs);

const limit = 52428800

const Application = _express2.default.call(void 0, )

Application.use(_cors2.default.call(void 0, ))
Application.use(_express2.default.urlencoded({ limit: limit, extended: false }))
Application.use(_express2.default.json({ limit: limit }))

const doc = _swaggerjsdoc2.default.call(void 0, _docs2.default)

Application.use('/docs-api', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(doc))

_routes2.default.call(void 0, Application)

exports. default = Application
