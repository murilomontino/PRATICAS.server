import type { Express } from 'express'

import FamiliesController from '../controller/FamiliesController'

export default function (App: Express) {
	App.post('/api/addMemberFamily', FamiliesController.addMemberFamily)

	// App.post('/api/deleteMemberFamily', FamiliesController.deleteMemberFamily)
}
