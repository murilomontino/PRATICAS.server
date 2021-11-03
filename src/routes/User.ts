import type { Express } from 'express'

import UserController from '../controller/UserController'

export default function (App: Express) {
	/**
	 * @swagger
	 *    '/api/CadastroUsuario':
	 *      post:
	 *        tags:
	 *          - User
	 *        description: Cadastra um usuário no sistema
	 *        parameters: []
	 *        responses:
	 *          '200':
	 *            description: Usuário Cadastrado com sucesso
	 *          '400':
	 *            description: Cadastro Falhou
	 *        requestBody:
	 *          content:
	 *            application/json:
	 *              schema:
	 *                '$ref': '#/components/schemas/User'
	 *              example:
	 *                data:
	 *                  nome: Antonio
	 *                  sobrenome: Santos
	 *                  cpf: 000.000.000-01
	 *                  telefone: '(79)99933-2233'
	 *                  senha: '********'
	 *                  cargo: 3
	 */
	App.post('/api/CadastroUsuario', UserController.userRegister)

	App.post('/api/getUserValidations', UserController.getUserValidations)

	App.post('/api/validarUser', UserController.validarUser)
}

/**
 * @swagger
 *      CadastroUsuario:
 *        type: object
 *        properties:
 *          data:
 *            type: object
 *            properties:
 *              nome:
 *                type: string
 *              sobrenome:
 *                type: string
 *              cpf:
 *                type: number
 *              telefone:
 *                type: number
 *              senha:
 *                type: string
 *              permissao:
 *                type: number
 *              codIbge:
 *                type: string
 */
