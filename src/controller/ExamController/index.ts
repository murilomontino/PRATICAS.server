import { Request, Response } from 'express'

import database from '../../../data'

const { ParasitologicalExam, DateController, ParasitologicalSample } = database

interface SampleAttributes {
	data_de_amostra: string
	primeira_lamina: number
	segunda_lamina: number
}

export default {
	async addExam(req: Request, res: Response) {
		const parasitologicalExam = await ParasitologicalExam.create({
			data_de_emissao: req.body.data.data_de_emissao,
			resultado: req.body.data.resultado,
			id_paciente: req.body.data.id_paciente,
		})

		for (const parasitologicalSample of req.body.data.amostrasParasitologicas) {
			await ParasitologicalSample.create({
				data_de_amostra: parasitologicalSample.data_de_amostra,
				id_exame: parasitologicalExam.id,
				primeira_lamina: parasitologicalSample.primeira_lamina,
				segunda_lamina: parasitologicalSample.segunda_lamina,
			})
		}

		const amostrasParasitologicas =
			await parasitologicalExam.getAmostrasParasitologicas()
		const response = {
			...parasitologicalExam.get(),
			amostrasParasitologicas: amostrasParasitologicas,
		}

		try {
			return res.send(response).status(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},

	async get(req: Request, res: Response) {
		try {
			const exams = await ParasitologicalExam.findAll({
				include: [
					{
						model: ParasitologicalSample,
					},
				],
			})

			const dateExam = await DateController.GetDateParasitologicalExam()

			return res
				.send({
					dateNow: dateExam,
					database: exams,
				})
				.end()
		} catch (error) {
			console.log(error)

			return res.sendStatus(400).end()
		}
	},

	/* DELETAR EXAME*/
	/* async deleteExam(req: Request, res: Response) {
		try {
			await ParasitologicalExam.destroy({
				where: {
					id: req.body.data.id_exam,
				},
			})
			return res.sendStatus(200).end()
		} catch (error) {
			console.log(error)
			return res.sendStatus(401).end()
		}
	}, */
}
