"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _DateController = require('./controller/DateController'); var _DateController2 = _interopRequireDefault(_DateController);
var _models = require('./models'); var _models2 = _interopRequireDefault(_models);

const __main__ = async () => {
	await _models.database.sync()
}

//__main__()

exports. default = {
	..._models2.default,
	database: _models.database,
	DateController: _DateController2.default,
}
