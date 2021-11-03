"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = require('../../../data'); var _data2 = _interopRequireDefault(_data);

const { Snail, DateController } = _data2.default

exports. default = {
	async addExamSnail(req, res) {
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

		try {
			return res.send({ message: 'success' }).status(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},

	async getSnail(req, res) {
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
