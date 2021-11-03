import type { Request, Response } from 'express'

import database from '../../../data'

const { DateController } = database

export default {
	async validDateDatabasePatient(req: Request, res: Response) {
		try {
			const dateBefore = await DateController.GetDatePatient()
			const dateAfter = req.body.data.date // DATA ATUAL DO APP

			if (dateBefore && dateBefore > dateAfter) {
				res.sendStatus(200).end()
			} else {
				res.sendStatus(400).end()
			}

			return
		} catch (error) {}
	},

	async validDateDatabaseExams(req: Request, res: Response) {
		try {
			const dateBefore = await DateController.GetDateParasitologicalExam()
			const dateAfter = req.body.data.date // DATA ATUAL DO APP

			if (dateBefore && dateBefore > dateAfter) {
				res.sendStatus(200).end()
			} else {
				res.sendStatus(400).end()
			}

			return
		} catch (error) {}
	},

	async validDateDatabaseUBS(req: Request, res: Response) {
		try {
			const dateBefore = await DateController.GetDateUBS()
			const dateAfter = req.body.data.date // DATA ATUAL DO APP

			if (dateBefore && dateBefore > dateAfter) {
				res.sendStatus(200).end()
			} else {
				res.sendStatus(400).end()
			}

			return
		} catch (error) {}
	},

	async validDateDatabaseUsers(req: Request, res: Response) {
		try {
			const dateBefore = await DateController.GetDateUser()
			const dateAfter = req.body.data.date // DATA ATUAL DO APP

			if (dateBefore && dateBefore > dateAfter) {
				res.sendStatus(200).end()
			} else {
				res.sendStatus(400).end()
			}
		} catch (error) {}

		return
	},

	async validDateDatabaseSnails(req: Request, res: Response) {
		try {
			const dateBefore = await DateController.GetDateSnail()
			const dateAfter = req.body.data.date // DATA ATUAL DO APP

			if (dateBefore && dateBefore > dateAfter) {
				res.sendStatus(200).end()
			} else {
				res.sendStatus(400).end()
			}

			return
		} catch (error) {}
	},
}
