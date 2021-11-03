/* eslint-disable */
'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 *
		 */

		await queryInterface.bulkInsert(
			'ubs',
			[
				{
					id: 1000,
					nome: 'Francisco Fonseca',
					cep: '49060-020',
					cidade: 'Aracaju',
					bairro: 'Dezoito do Forte',
					estado: 'Sergipe',
					numero: 'S/N',
					rua: 'Av. Álvaro Maciel',
					createdAt: new Date(),
					updatedAt: new Date(),
					codIbge: '2800308',
				},
				{
					id: 2000,
					nome: 'Dona Sinhazinha',
					cep: '49052-000',
					cidade: 'Aracaju',
					bairro: 'Grajeru',
					estado: 'Sergipe',
					numero: 'S/N',
					rua: 'Av. Hermes Fontes',
					createdAt: new Date(),
					updatedAt: new Date(),
					codIbge: '2800308',
				},
				{
					id: 3000,
					nome: 'USF Dr Raimundo Good Lima',
					cep: '49200-000',
					cidade: 'Estância',
					bairro: 'Centro',
					estado: 'Sergipe',
					numero: '100-116',
					rua: 'R. José Venâncio Cruz',
					createdAt: new Date(),
					updatedAt: new Date(),
					codIbge: '2802106',
				},
			],
			{}
		)

		await queryInterface.bulkInsert('enderecos', [
			{
				id: 1000,
				complemento: '',
				cep: '49000-188',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'Aracaju',
				bairro: 'São José',
				rua: 'Vila Cristina',
				numero: '1051',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				id: 2000,
				complemento: '',
				cep: '49100-000',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'São Cristóvão',
				bairro: 'Rosa Maria',
				rua: 'Elpídio Batista Neri',
				numero: '80',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				id: 3000,
				complemento: '',
				cep: '49200-000',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'Estância',
				bairro: 'Centro',
				rua: 'da Alegria',
				numero: '380',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				id: 4000,
				complemento: '',
				cep: '49200-000',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'Estância',
				bairro: 'Centro',
				rua: 'Visconde do Rio Branco',
				numero: '65',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				id: 5000,
				complemento: '',
				cep: '49200-000',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'Estância',
				bairro: 'Centro',
				rua: 'da Alegria',
				numero: '358',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				id: 6000,
				complemento: '',
				cep: '49200-000',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'Estância',
				bairro: 'Centro',
				rua: 'Beco das Panelas',
				numero: '425',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				id: 7000,
				complemento: '',
				cep: '49200-000',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'Estância',
				bairro: 'Centro',
				rua: 'Capitão Salomão',
				numero: '235',
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				id: 8000,
				complemento: '',
				cep: '49100-000',
				estado: 'Sergipe',
				referencia: '',
				cidade: 'São Cristóvão',
				bairro: 'Eduardo Gomes',
				rua: 'Gbarbosa',
				numero: '888',
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
		 *
		 */
		await queryInterface.bulkDelete('ubs', null, {})
		await queryInterface.bulkDelete('enderecos', null, {})
	},
}
