"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = require('../../../data'); var _data2 = _interopRequireDefault(_data);
const { ParasitologicalExam, Patient, Address } = _data2.default

exports. default = {
	async CalcPacientPositive(req, res) {
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

			const PacientPositive = []
			const PacientNegative = []
			const Statistic = [0, 0, 0, 0, 0]
			let Positive = 0,
				Negative = 0
			values.map((Obj) => {
				Obj.resultado > 0
					? `${((Positive = Positive + 1), PacientPositive.push(Obj))}`
					: `${((Negative = Negative + 1), PacientNegative.push(Obj))}`
			})
			PacientPositive.map(({ paciente }) => {
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

	async CalcPacientMunicip(req, res) {
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

			const PacientPositive = []
			const PacientNegative = []
			const Statistic = [0, 0, 0, 0, 0]
			let Positive = 0,
				Negative = 0
			values.map((Obj) => {
				Obj.resultado > 0
					? `${((Positive = Positive + 1), PacientPositive.push(Obj))}`
					: `${((Negative = Negative + 1), PacientNegative.push(Obj))}`
			})
			PacientPositive.map(({ paciente }) => {
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
