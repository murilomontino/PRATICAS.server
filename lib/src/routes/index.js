"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Auth = require('./Auth'); var _Auth2 = _interopRequireDefault(_Auth);
var _Exam = require('./Exam'); var _Exam2 = _interopRequireDefault(_Exam);
var _Families = require('./Families'); var _Families2 = _interopRequireDefault(_Families);
var _Graphic = require('./Graphic'); var _Graphic2 = _interopRequireDefault(_Graphic);
var _Home = require('./Home'); var _Home2 = _interopRequireDefault(_Home);
var _Patient = require('./Patient'); var _Patient2 = _interopRequireDefault(_Patient);
var _Snail = require('./Snail'); var _Snail2 = _interopRequireDefault(_Snail);
var _Ubs = require('./Ubs'); var _Ubs2 = _interopRequireDefault(_Ubs);
var _User = require('./User'); var _User2 = _interopRequireDefault(_User);

exports. default = function (App) {
	_Ubs2.default.call(void 0, App)
	_Auth2.default.call(void 0, App)
	_User2.default.call(void 0, App)
	_Exam2.default.call(void 0, App)
	_Patient2.default.call(void 0, App)
	_Families2.default.call(void 0, App)
	_Graphic2.default.call(void 0, App)
	_Home2.default.call(void 0, App)
	_Snail2.default.call(void 0, App)
}
