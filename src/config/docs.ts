export default {
	swaggerDefinition: {
		openapi: '3.0.1',
		info: {
			title: 'Tecno Schisto', // Title (required)
			version: '1.0.0', // Version (required)
			description: 'Documentação da API TecnoSchisto', // Description (optional)
		},
		host: process.env.APP_URL, // Host (optional),
		components: {
			/* 	securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			}, */
		},
	},
	apis: ['src/routes/*.ts'],
}
