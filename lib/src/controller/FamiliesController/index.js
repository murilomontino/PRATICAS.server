"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _data = require('../../../data'); var _data2 = _interopRequireDefault(_data);

const { Patient } = _data2.default

exports. default = {
	async addMemberFamily(req, res) {
		try {
			await Patient.create({
				genero: req.body.data.genero,
				ubs: req.body.data.ubs,
				residencia: req.body.data.residencia,
				nome: req.body.data.nome,
				sobrenome: req.body.data.sobrenome,
				idade: req.body.data.idade,
				data_de_nascimento: req.body.data.data_de_nascimento,
				is_patient: false,
			})

			return res.sendStatus(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},

	/* 	async deleteMemberFamily(req: Request, res: Response) {
		try {
			const connection = await client.connect()
			console.log(req.body)

			const response = await models.PersonModel.deletePerson({
				id_person: req.body.data.id_person,
			})

			connection.release()

			return res.sendStatus(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	}, */
}
