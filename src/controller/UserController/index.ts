/* eslint-disable @typescript-eslint/no-var-requires */
import type { Request, Response } from 'express'

import database from '../../../data'

const { User, DateController } = database

export default {
	async userRegister(req: Request, res: Response) {
		const hashMD5 = require('md5')
		const cryptoPass = hashMD5(req.body.data.password)

		try {
			await User.create({
				nome: req.body.data.name,
				sobrenome: req.body.data.lastName,
				cpf: req.body.data.cpf,
				telefone: req.body.data.phoneNumber,
				senha: cryptoPass,
				codIbge: req.body.data.codIbge,
				permissao: req.body.data.roleType,
			})
			return res.send({ message: 'success' }).end()
		} catch (error) {
			return res.send({ message: 'erro' }).end()
		}
	},

	async getUserValidations(req: Request, res: Response) {
		try {
			const dateUsers = await DateController.GetDateUser()

			const response = await User.findAll({
				order: ['updatedAt'],
				where: {
					validado: false,
					codIbge: req.body.data.codIbge,
				},
			})

			return res
				.status(200)
				.send({
					dateNow: dateUsers,
					database: response,
				})
				.end()
		} catch (error) {
			return res.status(400).end()
		}
	},

	async validarUser(req: Request, res: Response) {
		try {
			await User.update(
				{
					validado: true,
					ubs: req.body.data.id_ubs,
				},
				{
					where: {
						cpf: req.body.data.cpf,
					},
				}
			)
			return res.sendStatus(200).end()
		} catch (error) {
			return res.sendStatus(400).end()
		}
	},
}
