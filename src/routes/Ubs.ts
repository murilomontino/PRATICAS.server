import type { Express } from 'express'

import Ubs from '../controller/UbsController'

export default function (App: Express) {
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
	App.post('/api/getUBS', Ubs.getUBS)

	App.post('/api/addUBS', Ubs.addUBS)

	App.post('/api/deleteUBS', Ubs.deleteUBS)
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
