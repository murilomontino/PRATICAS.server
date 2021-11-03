"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _GraphicController = require('../controller/GraphicController'); var _GraphicController2 = _interopRequireDefault(_GraphicController);

exports. default = function (App) {
	/**
	 * @swagger
	 *    '/api/graphic':
	 *      post:
	 *        tags:
	 *          - Graphics
	 *        description: COnsultar casos positivos e negativos da ubs
	 *        parameters: []
	 *        responses:
	 *          '200':
	 *            description: o id da ubs gravado no banco de dados
	 *        requestBody:
	 *          content:
	 *            application/json:
	 *              schema:
	 *                '$ref': '#/components/schemas/graphic'
	 *              example:
	 *                data:
	 *                  id_ubs: 2001
	 */
	App.post('/api/graphic', _GraphicController2.default.CalcPacientPositive)

	/**
	 * @swagger
	 *    '/api/graphicMuni':
	 *      post:
	 *        tags:
	 *          - Graphics
	 *        description: COnsultar casos positivos e negativos do Municipio
	 *        parameters: []
	 *        responses:
	 *          '200':
	 *            description: o cep do municipio gravado no banco de dados
	 *        requestBody:
	 *          content:
	 *            application/json:
	 *              schema:
	 *                '$ref': '#/components/schemas/graphicMuni'
	 *              example:
	 *                data:
	 *                  cep_ubs: 49200-000
	 */
	App.post('/api/graphicMuni', _GraphicController2.default.CalcPacientMunicip)
}
