import { Request, Response } from 'express'

import database from '../../../data'

const { Snail, DateController } = database

export default {
	async addExamSnail(req: Request, res: Response) {
		try {
			await Snail.create({
				glabrata_total: req.body.data.glabrataCollected,
				straminea_total: req.body.data.stramineaCollected,
				tenagophila_total: req.body.data.tenagophilaCollected,

				glabrata_positivos: req.body.data.glabrataPositive,
				straminea_positivos: req.body.data.stramineaPositive,
				tenagophila_positivos: req.body.data.tenagophilaPositive,

				glabrata_negativos: req.body.data.glabrataNegative,
				straminea_negativos: req.body.data.stramineaNegative,
				tenagophila_negativos: req.body.data.tenagophilaNegative,
			})

			return res.send({ message: 'success' }).status(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},

	async getSnail(req: Request, res: Response) {
		try {
			const response = await Snail.findAll()

			const dateExam = await DateController.GetDateSnail()

			return res
				.send({
					dateNow: dateExam,
					database: response,
				})
				.end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},
}
