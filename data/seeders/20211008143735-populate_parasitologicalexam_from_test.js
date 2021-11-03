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
		await queryInterface.bulkInsert('examesParasitologicos', [
			{
				id: 1000,
				resultado: 100,
				data_de_emissao: '20/06/2018',
				id_paciente: 1000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2000,
				resultado: 100,
				data_de_emissao: '21/03/2019',
				id_paciente: 2000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3000,
				resultado: 100,
				data_de_emissao: '21/04/2019',
				id_paciente: 3000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])

		await queryInterface.bulkInsert('amostrasParasitologicas', [
			{
				data_de_amostra: '18/06/2019',
				id_exame: 2000,
				primeira_lamina: 12,
				segunda_lamina: 33,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '20/06/2019',
				id_exame: 2000,
				primeira_lamina: 11,
				segunda_lamina: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '23/06/2019',
				id_exame: 2000,
				primeira_lamina: 14,
				segunda_lamina: 53,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '20/06/2019',
				id_exame: 3000,
				primeira_lamina: 18,
				segunda_lamina: 73,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '20/06/2019',
				id_exame: 3000,
				primeira_lamina: 17,
				segunda_lamina: 83,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '20/06/2018',
				id_exame: 3000,
				primeira_lamina: 20,
				segunda_lamina: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '20/06/2018',
				id_exame: 1000,
				primeira_lamina: 22,
				segunda_lamina: 33,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '20/06/2018',
				id_exame: 1000,
				primeira_lamina: 10,
				segunda_lamina: 42,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				data_de_amostra: '20/06/2018',
				id_exame: 1000,
				primeira_lamina: 2,
				segunda_lamina: 3,
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
		await queryInterface.bulkDelete('examesParasitologicos', null, {})
		await queryInterface.bulkDelete('amostrasParasitologicas', null, {})
	},
}
