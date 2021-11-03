"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable @typescript-eslint/no-var-requires */
var _models = require('../models'); var _models2 = _interopRequireDefault(_models);
var _Generate = require('./Generate');

require('dotenv').config()

const __main__ = async () => {
	//	console.log(process.env.DATABASE_URL);

	await _models.database.sync({ force: true })
	await _Generate.Generate.call(void 0, _models2.default)
}

__main__()
