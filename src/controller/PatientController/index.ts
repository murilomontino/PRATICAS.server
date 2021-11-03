import { Request, Response } from 'express'

import database from '../../../data'
import { Permission } from '../../../data/models/types'

const {
	Patient,
	DateController,
	Address,
	QuestionnaireFamily,
	QuestionnairePatient,
	ParasitologicalExam,
	ParasitologicalSample,
	UBS,
} = database

export default {
	async get(req: Request, res: Response) {
		if (req.body.data.permissao === Permission.SecretarioDaSaude) {
			const response = await Patient.findAll({
				include: [
					{
						model: ParasitologicalExam,
						include: [
							ParasitologicalSample,
							{
								model: Patient,
								attributes: ['nome', 'sobrenome'],
							},
						],
					},
					Address,
					QuestionnairePatient,
					QuestionnaireFamily,
					{
						model: UBS,
						attributes: ['nome'],
						where: {
							codIbge: req.body.data.codIbge,
						},
					},
				],
				where: {
					is_patient: true,
				},
			})

			const datePatient = await DateController.GetDatePatient()

			return res
				.status(200)
				.send({
					dateNow: datePatient,
					database: response,
				})
				.end()
		} else {
			const response = await Patient.findAll({
				include: [
					{
						model: ParasitologicalExam,
						order: [['createdAt', 'ASC']],
						include: [
							ParasitologicalSample,
							{
								model: Patient,
								attributes: ['nome', 'sobrenome'],
							},
						],
					},
					Address,
					QuestionnairePatient,
					QuestionnaireFamily,
					{
						model: UBS,
						attributes: ['nome'],
					},
				],
				where: {
					is_patient: true,
					ubs: req.body.data.ubs,
				},
			})

			const datePatient = await DateController.GetDatePatient()

			return res
				.status(200)
				.send({
					dateNow: datePatient,
					database: response,
				})
				.end()
		}
	},

	async archive(req: Request, res: Response) {
		try {
			const date = await Patient.update(
				{ is_patient: !req.body.data.is_patient },
				{ where: { id: req.body.data.id_patient } }
			)
			return res.send(date)
		} catch (error) {
			return res.send({ error: 'erro' })
		}
	},
	/* UPDATE DE PACIENTE*/
	async updatePatient(req: Request, res: Response) {
		/* 		try {
			const date = await Patient.update(
				{
					include: [{ model: Patient }],
				},
				{ where: { id: 1000 } }
			)

			console.log(date)
			return res.send(date).end()
		} catch (error) {
			return res.send({ message: 'erro' }).end()
		} */
	},

	async desvincularEvincular(req: Request, res: Response) {
		try {
			const date = await Patient.update(
				{ ubs: req.body.data.id_ubs },
				{ where: { id: req.body.data.id_patient } }
			)

			return res.send({ message: 'paciente desvilculado com sucesso' }).end()
		} catch (error) {
			return res.send({ message: 'erro' }).end()
		}
	},

	/* ADICIONANDO PACIENTE*/
	async addPatient(req: Request, res: Response) {
		try {
			const residencia = (
				await Address.findOrCreate({
					where: {
						rua: req.body.data.rua ? req.body.data.rua : '',
						numero: req.body.data.numero ? req.body.data.numero : '',
						bairro: req.body.data.bairro ? req.body.data.bairro : '',
						cidade: req.body.data.cidade ? req.body.data.cidade : '',
						estado: req.body.data.estado ? req.body.data.estado : '',
						cep: req.body.data.cep ? req.body.data.cep : '',
						complemento: req.body.data.complemento
							? req.body.data.complemento
							: '',
						referencia: req.body.data.referencia
							? req.body.data.referencia
							: '',
					},
				})
			)[0]

			//console.log(residencia);
			const termos_e_assinatura = req.body.data.assinatura ? true : false

			let questionnaireFamily
			let questionnairePatient

			if (termos_e_assinatura) {
				questionnaireFamily = (
					await QuestionnaireFamily.create({
						...req.body.data.quizFamily,
					})
				).id

				questionnairePatient = (
					await QuestionnairePatient.create({
						...req.body.data.quizPatient,
					})
				).id
			}

			const patient = await Patient.create({
				id_questionarioFamilia: questionnaireFamily
					? questionnaireFamily
					: null,
				id_questionarioPaciente: questionnairePatient
					? questionnairePatient
					: null,
				nome: req.body.data.nome,
				sobrenome: req.body.data.sobrenome,
				cpf: req.body.data.cpf,
				rg: req.body.data.rg,
				peso: req.body.data.peso,
				altura: req.body.data.altura,
				idade: req.body.data.idade,
				residencia: residencia.id!,
				data_de_nascimento: req.body.data.data_de_nascimento,
				nome_da_mae: req.body.data.nome_da_mae,
				telefone: req.body.data.telefone,
				termos_e_assinatura: termos_e_assinatura,
				sus: req.body.data.sus,
				ubs: req.body.data.ubs,
				latitude: req.body.data.latitude,
				longitude: req.body.data.longitude,
				assinatura: req.body.data.assinatura ? req.body.data.assinatura : null,
				genero: req.body.data.genero,
				is_patient: true,
			})

			return res.sendStatus(200).end()
		} catch (error) {
			return res.sendStatus(404).end()
		}
	},
}
