/* eslint-disable */

'use strict'

const Permission = {
	Agente: 1,
	CoordenadorDaUBS: 2,
	Enfermeiro: 3,
	Medico: 4,
	Pesquisador: 5,
	SecretarioDaSaude: 6,
}

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'usuarios',
			[
				{
					id: 1000,
					cpf: '000.000.000-01',
					senha: '21232f297a57a5a743894a0e4a801fc3',
					permissao: Permission.Agente,
					nome: 'Leandro',
					sobrenome: 'Leal',
					codIbge: '2802106',

					validado: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id: 1001,
					cpf: '000.000.000-02',
					senha: '21232f297a57a5a743894a0e4a801fc3',
					permissao: Permission.Enfermeiro,
					nome: 'Osvaldo',
					sobrenome: 'das Graças',
					validado: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					codIbge: '2800308',
				},

				{
					id: 1003,
					cpf: '000.000.000-03',
					senha: '21232f297a57a5a743894a0e4a801fc3',
					permissao: Permission.Medico,
					nome: 'Maria',
					sobrenome: 'Brandão',
					validado: false,
					createdAt: new Date(),
					codIbge: '2802106',
					updatedAt: new Date(),
				},

				{
					id: 1004,
					cpf: '000.000.000-04',
					senha: '21232f297a57a5a743894a0e4a801fc3',
					permissao: Permission.Pesquisador,
					nome: 'Iane',
					sobrenome: 'Leal',
					validado: false,
					codIbge: '2800308',
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					id: 1005,
					cpf: '000.000.000-05',
					senha: '21232f297a57a5a743894a0e4a801fc3',
					permissao: Permission.CoordenadorDaUBS,
					nome: 'Manuel',
					sobrenome: 'Silva',
					validado: true,
					codIbge: '2802106',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('usuarios', null, {})
	},
}
