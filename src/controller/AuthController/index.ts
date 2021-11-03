/* eslint-disable @typescript-eslint/no-var-requires */
import type { Request, Response } from 'express'

import database from '../../../data'

const { User } = database

export default {
	async authenticate(req: Request, res: Response) {
		// biblioteca de criptografia
		const hashMD5 = require('md5')

		// Busca um usuário dado o cpf e pode retornar null ou user
		const user = await User.findOne({
			where: {
				cpf: req.body.data.cpf,
			},
		})

		// !user se não existir usuário retornará erro 404 Not Found
		if (!user) {
			res.sendStatus(404).end()
		}
		// usuário existe e senha está correta
		else if (user && user.senha === hashMD5(req.body.data.password)) {
			// usuario tem permissão de acessar o sistema?
			// 200 retornará dados do usuário
			// 400 usuário ainda não tem permissão de acesso
			if (user.validado) {
				res.status(200).send(user).end()
			} else {
				res.sendStatus(400).end()
			}

			// a senha digitada está incorreta
		} else {
			res.sendStatus(406).end()
		}
		return
	},
}
