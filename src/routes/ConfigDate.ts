import type { Express } from 'express'

import DateController from '../controller/DateController'

export default function (App: Express) {
	App.post('/date/patients', DateController.validDateDatabasePatient)

	App.post('/date/ubs', DateController.validDateDatabaseUBS)

	App.post('/date/exams', DateController.validDateDatabaseExams)

	App.post('/date/users', DateController.validDateDatabaseUsers)

	App.post('/date/snails', DateController.validDateDatabaseSnails)
}
