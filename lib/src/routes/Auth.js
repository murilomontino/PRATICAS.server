"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _AuthController = require('../controller/AuthController'); var _AuthController2 = _interopRequireDefault(_AuthController);

exports. default = function (App) {
	/**
	 * @swagger
	 *  "/api/auth":
	 *    post:
	 *      tags:
	 *      - User
	 *      description: Login do Usuário
	 *      requestBody:
	 *        required: true
	 *        content:
	 *          application/json:
	 *            schema:
	 *              "$ref": "#/components/schemas/Login"
	 *            example:
	 *              data:
	 *                cpf: 000.000.000-01
	 *                password: admin
	 *      responses:
	 *        '200':
	 *          description: Login realizado com sucesso, objeto com dados do usuário
	 *          content:
	 *            application/json:
	 *              schema:
	 *                "$ref": "#/components/schemas/User"
	 *        '404':
	 *          description: CPF não encontrado
	 *        '406':
	 *          description: Senha Inválida
	 * */

	App.post('/api/auth', _AuthController2.default.authenticate)
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *          senha:
 *            type: string
 *          nome:
 *            type: string
 *          sobrenome:
 *            type: string
 *          telefone:
 *            type: string
 *          cpf:
 *            type: string
 *          permissao:
 *            type: number
 *          img_perfil:
 *            type: string
 *          codIbge:
 *            type: string
 *          ubs:
 *            type: number
 *          nome_ubs:
 *            type: string
 *          cep_ubs:
 *            type: string
 *          bairro_ubs:
 *            type: string
 *          cidade_ubs:
 *            type: string
 *          numero_ubs:
 *            type: string
 *          rua_ubs:
 *            type: string
 *
 *      Login:
 *        type: object
 *        properties:
 *          data:
 *            type: object
 *            properties:
 *              cpf:
 *                type: string
 *                required: true
 *              password:
 *                type: string
 *                required: true
 */
