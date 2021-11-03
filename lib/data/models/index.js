"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
	CONFIGURAçÃO DO DATABASE
*/
require('dotenv').config()

var _sequelize = require('sequelize');

var _Associate = require('../build/Associate'); var _Associate2 = _interopRequireDefault(_Associate);














const env = process.env.NODE_ENV || 'development'
console.log(`Mode: ${env}`)

const config = require(__dirname.replace(
	'models',
	'config/options.js'
))[env]

const sslConfig = config.ssl
	? {
			ssl: config.ssl,
			dialectOptions: {
				ssl: {
					rejectUnauthorized: config.dialectOptions.rejectUnauthorized,
					ca: config.dialectOptions.ca,
					key: config.dialectOptions.key,
					cert: config.dialectOptions.cert,
				},
			},
	  }
	: {}

 const database = new (0, _sequelize.Sequelize)(config.uri, {
	dialect: 'postgres',
	...sslConfig,
}); exports.database = database

/*
	CONFIGURAçÃO DO OBJETO DE MODELS

*/

var _Address = require('./Address'); var _Address2 = _interopRequireDefault(_Address);
var _ParasitologicalSample = require('./ParasitologicalSample'); var _ParasitologicalSample2 = _interopRequireDefault(_ParasitologicalSample);
var _Patient = require('./Patient'); var _Patient2 = _interopRequireDefault(_Patient);
var _Profiles = require('./Profiles'); var _Profiles2 = _interopRequireDefault(_Profiles);
var _QuestionnaireFamily = require('./QuestionnaireFamily'); var _QuestionnaireFamily2 = _interopRequireDefault(_QuestionnaireFamily);
var _QuestionnairePatient = require('./QuestionnairePatient'); var _QuestionnairePatient2 = _interopRequireDefault(_QuestionnairePatient);
var _Snail = require('./Snail'); var _Snail2 = _interopRequireDefault(_Snail);

var _UBS = require('./UBS'); var _UBS2 = _interopRequireDefault(_UBS);
var _User = require('./User'); var _User2 = _interopRequireDefault(_User);
var _KatoKats = require('./KatoKats'); var _KatoKats2 = _interopRequireDefault(_KatoKats);

const db = {
	Address: _Address2.default,
	Profiles: _Profiles2.default,
	ParasitologicalExam: _KatoKats2.default,
	Patient: _Patient2.default,
	Snail: _Snail2.default,
	QuestionnaireFamily: _QuestionnaireFamily2.default,
	QuestionnairePatient: _QuestionnairePatient2.default,
	ParasitologicalSample: _ParasitologicalSample2.default,
	User: _User2.default,
	UBS: _UBS2.default,
}

_Associate2.default.call(void 0, db)

exports. default = db
