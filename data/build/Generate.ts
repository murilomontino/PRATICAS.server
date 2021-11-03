import { ModelsDb, Permission } from '../models/types'

export const Generate = async (db: ModelsDb) => {
	await db.Profiles.create({
		id: Permission.Agente,
		tipo: 'Agente',
	})

	await db.Profiles.create({
		id: Permission.CoordenadorDaUBS,
		tipo: 'Coordenador da UBS',
	})
	await db.Profiles.create({
		id: Permission.Enfermeiro,
		tipo: 'Enfermeiro',
	})
	await db.Profiles.create({
		id: Permission.Medico,
		tipo: 'Médico',
	})

	await db.Profiles.create({
		id: Permission.Pesquisador,
		tipo: 'Pesquisador',
	})

	await db.Profiles.create({
		id: Permission.SecretarioDaSaude,
		tipo: 'Secretário da Saude',
	})

	const user_aracaju = await db.User.create(
		{
			id: 10000,
			cpf: '559.649.930-79',
			senha: '21232f297a57a5a743894a0e4a801fc3',
			permissao: Permission.SecretarioDaSaude,
			nome: 'Conceição',
			sobrenome: 'Evaristo',
			validado: true,
			codIbge: '2800308',
		},
		{}
	)
	const user_estancia = await db.User.create(
		{
			id: 10001,
			cpf: '907.779.150-73',
			senha: '21232f297a57a5a743894a0e4a801fc3',
			permissao: Permission.SecretarioDaSaude,
			nome: 'Daniel',
			sobrenome: 'Evaristo',
			validado: true,
			codIbge: '2802106',
		},
		{}
	)
	console.log(user_aracaju)
	console.log(user_estancia)
}
