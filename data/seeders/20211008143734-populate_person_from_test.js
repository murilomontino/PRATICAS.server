/* eslint-disable */

'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert('pacientes', [
			{
				id: 1000,
				cpf: '341.721.179-77',
				data_de_nascimento: '15/02/2010',
				idade: 11,
				nome: 'Alf',
				sobrenome: 'Andrade',
				nome_da_mae: 'Josefina Cleiton',
				rg: '21.587.584-00',
				peso: 45.01,
				altura: 140,
				telefone: '',
				residencia: 3000,
				ubs: 3000,
				latitude: -10.927471,
				longitude: -37.108003,
				is_patient: true,
				sus: '123456789101147',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2000,
				cpf: '121.121.121-12',
				data_de_nascimento: '25/12/1998',
				idade: 23,
				nome: 'Adelaide',
				residencia: 1000,
				ubs: 1000,
				is_patient: true,
				sobrenome: 'Silva',
				nome_da_mae: 'Jussara Silva',
				rg: '8.687.984-03',
				peso: 72.35,
				altura: 175,
				telefone: '',
				latitude: -10.927482,
				longitude: -37.108471,
				sus: '123456789101130',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3000,
				cpf: '231.821.146-01',
				data_de_nascimento: '01/03/1999',
				idade: 22,
				is_patient: true,
				nome: 'Maicon',
				sobrenome: 'Silva',
				nome_da_mae: 'Maria Silva',
				rg: '2.587.984-00',
				peso: 80.45,
				residencia: 2000,
				ubs: 2000,
				altura: 170,
				telefone: '',
				latitude: -10.926868,
				longitude: -37.108382,
				sus: '123456789101121',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('pessoas', null, {})
		await queryInterface.bulkDelete('pacientes', null, {})
	},
}
