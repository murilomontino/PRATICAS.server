import DateController from './controller/DateController'
import db, { database } from './models'

const __main__ = async () => {
	await database.sync()
}

//__main__()

export default {
	...db,
	database,
	DateController,
}
