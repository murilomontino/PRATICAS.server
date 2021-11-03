"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _ParasitologicalExams = require('../models/ParasitologicalExams'); var _ParasitologicalExams2 = _interopRequireDefault(_ParasitologicalExams);
var _Patient = require('../models/Patient'); var _Patient2 = _interopRequireDefault(_Patient);
var _Snail = require('../models/Snail'); var _Snail2 = _interopRequireDefault(_Snail);
var _UBS = require('../models/UBS'); var _UBS2 = _interopRequireDefault(_UBS);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

const GetDateUser = async () => {
	const response = await _User2.default.findOne({
		attributes: [[_sequelize2.default.fn('max', _sequelize2.default.col('updatedAt')), 'date']],
	})

	return _optionalChain([response, 'optionalAccess', _ => _.dataValues, 'access', _2 => _2.date])
}
const GetDateSnail = async () => {
	const response = await _Snail2.default.findOne({
		attributes: [[_sequelize2.default.fn('max', _sequelize2.default.col('updatedAt')), 'date']],
	})

	return _optionalChain([response, 'optionalAccess', _3 => _3.dataValues, 'access', _4 => _4.date])
}

const GetDatePatient = async () => {
	const response = await _Patient2.default.findOne({
		attributes: [[_sequelize2.default.fn('max', _sequelize2.default.col('updatedAt')), 'date']],
	})

	return _optionalChain([response, 'optionalAccess', _5 => _5.dataValues, 'access', _6 => _6.date])
}

const GetDateParasitologicalExam = async () => {
	const response = await _ParasitologicalExams2.default.findOne({
		attributes: [[_sequelize2.default.fn('max', _sequelize2.default.col('updatedAt')), 'date']],
	})

	return _optionalChain([response, 'optionalAccess', _7 => _7.dataValues, 'access', _8 => _8.date])
}

const GetDateUBS = async () => {
	const response = await _UBS2.default.findOne({
		attributes: [[_sequelize2.default.fn('max', _sequelize2.default.col('updatedAt')), 'date']],
	})

	return _optionalChain([response, 'optionalAccess', _9 => _9.dataValues, 'access', _10 => _10.date])
}

exports. default = {
	GetDateParasitologicalExam,
	GetDatePatient,
	GetDateSnail,
	GetDateUBS,
	GetDateUser,
}
