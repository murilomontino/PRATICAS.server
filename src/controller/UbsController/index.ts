import { Request, Response } from 'express'

import database from '../../../data'

const { UBS, DateController } = database

export default {
	/* 	BUSCANDO TODAS AS UBS do DB
	 */
	async getUBS(req: Request, res: Response) {
		try {
			const response = await UBS.findAll({
				attributes: [
					['id', 'id_ubs'],
					['nome', 'nome_ubs'],
					['pais', 'pais_ubs'],
					['cep', 'cep_ubs'],
					['estado', 'estado_ubs'],
					['cidade', 'cidade_ubs'],
					['bairro', 'bairro_ubs'],
					['rua', 'rua_ubs'],
					['numero', 'numero_ubs'],
				],
				where: {
					codIbge: req.body.data.codIbge,
				},
			})
			const dateUBS = await DateController.GetDateUBS()

			return res
				.status(200)
				.send({
					dateNow: dateUBS,
					database: response,
				})
				.end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},

	/*DELETE UBS*/
	async deleteUBS(req: Request, res: Response) {
		try {
			UBS.destroy({
				where: {
					id: req.body.data.id_ubs,
				},
			})

			return res.sendStatus(202).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},

	async addUBS(req: Request, res: Response) {
		try {
			UBS.create({
				bairro: req.body.data.bairro,
				cep: req.body.data.cep,
				cidade: req.body.data.cidade,
				estado: req.body.data.estado,
				nome: req.body.data.nome,
				numero: req.body.data.numero,
				pais: req.body.data.pais,
				rua: req.body.data.rua,
				codIbge: req.body.data.codIbge,
			})

			return res.sendStatus(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},
}
