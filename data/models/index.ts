/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
	CONFIGURAçÃO DO DATABASE
*/
require('dotenv').config()

import { Dialect, Sequelize } from 'sequelize'

import Associate from '../build/Associate'

interface Options {
	uri: string
	use_env_variable: string
	dialect: Dialect
	ssl: boolean
	dialectOptions: {
		rejectUnauthorized: boolean
		ca: string
		key: string
		cert: string
	}
}

const env = process.env.NODE_ENV || 'development'
console.log(`Mode: ${env}`)

const config: Options = require(__dirname.replace(
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

export const database: Sequelize = new Sequelize(config.uri, {
	dialect: 'postgres',
	...sslConfig,
})

/*
	CONFIGURAçÃO DO OBJETO DE MODELS

*/

import Address from './Address'
import ParasitologicalSample from './ParasitologicalSample'
import Patient from './Patient'
import Profiles from './Profiles'
import QuestionnaireFamily from './QuestionnaireFamily'
import QuestionnairePatient from './QuestionnairePatient'
import Snail from './Snail'
import type { ModelsDb } from './types'
import UBS from './UBS'
import User from './User'
import KatoKats from './KatoKats'

const db: ModelsDb = {
	Address: Address,
	Profiles: Profiles,
	ParasitologicalExam: KatoKats,
	Patient: Patient,
	Snail: Snail,
	QuestionnaireFamily: QuestionnaireFamily,
	QuestionnairePatient: QuestionnairePatient,
	ParasitologicalSample: ParasitologicalSample,
	User: User,
	UBS: UBS,
}

Associate(db)

export default db
