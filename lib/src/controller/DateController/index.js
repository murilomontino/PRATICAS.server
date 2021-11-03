"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = require('../../../data'); var _data2 = _interopRequireDefault(_data);

const { DateController } = _data2.default

exports. default = {
	async validDateDatabasePatient(req, res) {
		const dateBefore = await DateController.GetDatePatient()
		const dateAfter = req.body.data.date // DATA ATUAL DO APP

		if (dateBefore && dateBefore > dateAfter) {
			res.sendStatus(200).end()
		} else {
			res.sendStatus(400).end()
		}

		return
	},

	async validDateDatabaseExams(req, res) {
		const dateBefore = await DateController.GetDateParasitologicalExam()
		const dateAfter = req.body.data.date // DATA ATUAL DO APP

		if (dateBefore && dateBefore > dateAfter) {
			res.sendStatus(200).end()
		} else {
			res.sendStatus(400).end()
		}

		return
	},

	async validDateDatabaseUBS(req, res) {
		const dateBefore = await DateController.GetDateUBS()
		const dateAfter = req.body.data.date // DATA ATUAL DO APP

		if (dateBefore && dateBefore > dateAfter) {
			res.sendStatus(200).end()
		} else {
			res.sendStatus(400).end()
		}

		return
	},

	async validDateDatabaseUsers(req, res) {
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

	async validDateDatabaseSnails(req, res) {
		const dateBefore = await DateController.GetDateSnail()
		const dateAfter = req.body.data.date // DATA ATUAL DO APP

		if (dateBefore && dateBefore > dateAfter) {
			res.sendStatus(200).end()
		} else {
			res.sendStatus(400).end()
		}

		return
	},
}
