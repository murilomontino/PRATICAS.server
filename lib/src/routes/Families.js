"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _FamiliesController = require('../controller/FamiliesController'); var _FamiliesController2 = _interopRequireDefault(_FamiliesController);

exports. default = function (App) {
	App.post('/api/addMemberFamily', _FamiliesController2.default.addMemberFamily)

	// App.post('/api/deleteMemberFamily', FamiliesController.deleteMemberFamily)
}
