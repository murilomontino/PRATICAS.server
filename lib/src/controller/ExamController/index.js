"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = require('../../../data'); var _data2 = _interopRequireDefault(_data);

const { ParasitologicalExam, DateController, ParasitologicalSample } = _data2.default







exports. default = {
	async addExam(req, res) {
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

	async get(req, res) {
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
