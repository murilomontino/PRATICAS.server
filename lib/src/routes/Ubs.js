"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _UbsController = require('../controller/UbsController'); var _UbsController2 = _interopRequireDefault(_UbsController);

exports. default = function (App) {
	/**
	 * @swagger
	 *    '/api/getUBS':
	 *      post:
	 *        tags:
	 *          - Ubs
	 *        description: ''
	 *        parameters: []
	 *        responses:
	 *          '202':
	 *            description: Todas as UBS Cadastradas do Banco de Dados
	 *            content:
	 *              application/json:
	 *                schema:
	 *                  type: array
	 *                  items:
	 *                    '$ref': '#/components/schemas/UBS'
	 */
	App.post('/api/getUBS', _UbsController2.default.getUBS)

	App.post('/api/addUBS', _UbsController2.default.addUBS)

	App.post('/api/deleteUBS', _UbsController2.default.deleteUBS)
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      UBS:
 *        type: object
 *        properties:
 *          id:
 *            type: number
 *          nome:
 *            type: string
 *          endereco:
 *            type: number
 *          cep:
 *            type: string
 *          bairro:
 *            type: string
 *          cidade:
 *            type: string
 *          numero:
 *            type: string
 *          estado:
 *            type: string
 *          pais:
 *            type: string
 *          rua:
 *            type: string
 */
