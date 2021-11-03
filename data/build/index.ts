/* eslint-disable @typescript-eslint/no-var-requires */
import db, { database } from '../models'
import { Generate } from './Generate'

require('dotenv').config()

const __main__ = async () => {
	//	console.log(process.env.DATABASE_URL);

	await database.sync({ force: true })
	await Generate(db)
}

__main__()
