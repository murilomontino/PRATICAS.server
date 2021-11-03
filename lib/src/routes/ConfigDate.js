"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _DateController = require('../controller/DateController'); var _DateController2 = _interopRequireDefault(_DateController);

exports. default = function (App) {
	App.post('/date/patients', _DateController2.default.validDateDatabasePatient)

	App.post('/date/ubs', _DateController2.default.validDateDatabaseUBS)

	App.post('/date/exams', _DateController2.default.validDateDatabaseExams)

	App.post('/date/users', _DateController2.default.validDateDatabaseUsers)

	App.post('/date/snails', _DateController2.default.validDateDatabaseSnails)
}
