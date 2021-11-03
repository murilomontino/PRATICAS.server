"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _UserController = require('../controller/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

exports. default = function (App) {
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
	App.post('/api/CadastroUsuario', _UserController2.default.userRegister)

	App.post('/api/getUserValidations', _UserController2.default.getUserValidations)

	App.post('/api/validarUser', _UserController2.default.validarUser)
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
