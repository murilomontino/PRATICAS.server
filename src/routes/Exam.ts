import type { Express } from 'express'

import Exam from '../controller/ExamController'

export default function (App: Express) {
	/**
	 * @swagger
	 *  /api/addExam:
	 *    post:
	 *      tags:
	 *      - Exams
	 *      description: Adicionar um novo exame ao bd
	 *      parameters: []
	 *      responses:
	 *        '200':
	 *          description: "{ response: 'o id do exame gravado no banco de dados' }"
	 *      requestBody:
	 *        required: true
	 *        content:
	 *          application/json:
	 *            schema:
	 *              '$ref': '#/components/schemas/Exam'
	 *            example:
	 *              data:
	 *                data_de_emissao: 21/03/1998
	 *                id_paciente: 1000
	 *                resultado: Grave
	 *                amostrasParasitologicas:
	 *                - primeira_lamina: 2
	 *                  segunda_lamina: 2
	 *                - primeira_lamina: 5
	 *                  segunda_lamina: 6
	 *                - primeira_lamina: 8
	 *                  segunda_lamina: 9
	 */
	App.post('/api/addExam', Exam.addExam)

	/**
	 * @swagger
	 *  "/api/exams":
	 *    get:
	 *      tags:
	 *      - Exams
	 *      description: Busca todos os Exams do banco de dados
	 *      parameters: []
	 *      responses:
	 *        '200':
	 *          description: Array com todos os exames no bd
	 *          content:
	 *            application/json:
	 *              schema:
	 *                type: object
	 *                properties:
	 *                  dateNow:
	 *                    type: string
	 *                  database:
	 *                    type: array
	 *                    items:
	 *                      "$ref": "#/components/schemas/Exam"
	 *
	 */
	App.get('/api/exams', Exam.get)

	/*
	"/api/delExam":
  post:
    tags:
    - Exams
    description: Remover um exame do paciente do bd
    parameters: []
    responses:
      '200':
        description: O exame foi removido com sucesso'
      '400':
        description: Exame não encontrado no BD
    requestBody:
      required: true
      content:
        application/json:
          schema:
            "$ref": "#/components/schemas/Exam"
          example:
            data:
              id_exam: 1
	*/
	//App.post('/api/deleteExam', Exam.deleteExam)
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      Exam:
 *        type: object
 *        properties:
 *          data:
 *            type: object
 *            properties:
 *              data_de_emissao:
 *                type: string
 *                required: true
 *              resultado:
 *                type: string
 *                required: true
 *              id_patient:
 *                type: string
 *                required: true
 *              amostras:
 *                type: array
 *                required: true
 *                items:
 *                  "$ref": "#/components/schemas/Amostra"
 *      Amostra:
 *        type: object
 *        properties:
 *          primeira_lamina:
 *            type: number
 *            required: true
 *          segunda_lamina:
 *            type: number
 *            required: true
 */
