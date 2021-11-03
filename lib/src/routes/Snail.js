"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _SnailController = require('../controller/SnailController'); var _SnailController2 = _interopRequireDefault(_SnailController);

exports. default = function (App) {
	App.get('/api/getExamSnail', _SnailController2.default.getSnail)

	/**
	 * @swagger
	 *    '/api/addExamSnail':
	 *      post:
	 *        tags:
	 *          - Snails
	 *        description: Adicionar um novo exame do caramujo ao bd
	 *        parameters: []
	 *        responses:
	 *          '200':
	 *            description: o id do exame gravado no banco de dados
	 *        requestBody:
	 *          content:
	 *            application/json:
	 *              schema:
	 *                '$ref': '#/components/schemas/Snail'
	 *              example:
	 *                data:
	 *                  glabrata_total: 26
	 *                  straminea_total: 30
	 *                  tenagophila_total: 30
	 *                  glabrata_positivos: 15
	 *                  straminea_positivos: 12
	 *                  tenagophila_positivos: 15
	 *                  glabrata_negativos: 12
	 *                  straminea_negativos: 12
	 *                  tenagophila_negativos: 12
	 */
	App.post('/api/addExamSnail', _SnailController2.default.addExamSnail)
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      Snail:
 *        type: object
 *        properties:
 *          data:
 *            type: object
 *            properties:
 *              glabrata_total:
 *                type: number
 *              straminea_total:
 *                type: number
 *              tenagophila_total:
 *                type: number
 *              glabrata_positivos:
 *                type: number
 *              straminea_positivos:
 *                type: number
 *              tenagophila_positivos:
 *                type: number
 *              glabrata_negativos:
 *                type: number
 *              straminea_negativos:
 *                type: number
 *              tenagophila_negativos:
 *                type: number
 */
