import { Request, Response } from 'express'

import database from '../../../data'
const { ParasitologicalExam, Patient, Address } = database

export default {
	async CalcPacientPositive(req: Request, res: Response) {
		try {
			const response = await ParasitologicalExam.findAll({
				include: [
					{
						model: Patient,
						order: [['id', 'DESC']],
						where: { is_patient: true, ubs: req.body.data.id_patient },
					},
				],
				order: [['updatedAt', 'DESC']],
			})

			const values = response.filter(function (a) {
				return !this[a.id_paciente] && (this[a.id_paciente] = true)
			}, Object.create(null))

			const PacientPositive: typeof ParasitologicalExam[] = []
			const PacientNegative: any[] = []
			const Statistic: number[] = [0, 0, 0, 0, 0]
			let Positive = 0,
				Negative = 0
			values.map((Obj: any) => {
				Obj.resultado > 0
					? `${((Positive = Positive + 1), PacientPositive.push(Obj))}`
					: `${((Negative = Negative + 1), PacientNegative.push(Obj))}`
			})
			PacientPositive.map(({ paciente }: any) => {
				paciente.idade <= 15 ? (Statistic[0] += 1) : {}
				paciente.idade >= 16 && paciente.idade <= 30 ? (Statistic[1] += 1) : {}
				paciente.idade >= 31 && paciente.idade <= 45 ? (Statistic[2] += 1) : {}
				paciente.idade >= 46 && paciente.idade <= 60 ? (Statistic[3] += 1) : {}
				paciente.idade >= 61 ? (Statistic[4] += 1) : {}
			})

			const Data = {
				Positive: Positive,
				Negative: Negative,
				Statistic: Statistic,
			}
			return res.send(Data).sendStatus(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},

	async CalcPacientMunicip(req: Request, res: Response) {
		try {
			console.log(req.body.data)
			const response = await ParasitologicalExam.findAll({
				include: [
					{
						model: Patient,
						order: [['id', 'DESC']],
						where: { is_patient: true },
						include: [
							{
								model: Address,
								order: [['id', 'DESC']],
								where: { cep: req.body.data.cep_ubs },
							},
						],
					},
				],
				order: [['updatedAt', 'DESC']],
			})

			const values = response.filter(function (a) {
				return !this[a.id_paciente] && (this[a.id_paciente] = true)
			}, Object.create(null))

			const PacientPositive: typeof ParasitologicalExam[] = []
			const PacientNegative: any[] = []
			const Statistic: number[] = [0, 0, 0, 0, 0]
			let Positive = 0,
				Negative = 0
			values.map((Obj: any) => {
				Obj.resultado > 0
					? `${((Positive = Positive + 1), PacientPositive.push(Obj))}`
					: `${((Negative = Negative + 1), PacientNegative.push(Obj))}`
			})
			PacientPositive.map(({ paciente }: any) => {
				paciente.idade <= 15 ? (Statistic[0] += 1) : {}
				paciente.idade >= 16 && paciente.idade <= 30 ? (Statistic[1] += 1) : {}
				paciente.idade >= 31 && paciente.idade <= 45 ? (Statistic[2] += 1) : {}
				paciente.idade >= 46 && paciente.idade <= 60 ? (Statistic[3] += 1) : {}
				paciente.idade >= 61 ? (Statistic[4] += 1) : {}
			})

			const Data = {
				Positive: Positive,
				Negative: Negative,
				Statistic: Statistic,
			}
			return res.send(Data).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},
}
