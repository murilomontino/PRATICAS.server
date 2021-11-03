require('dotenv').config()

const fs = require('fs')

const dir_cert = __dirname.replace('config', 'certs')

const ssl = {
	rejectUnauthorized: false,
	ca: fs.readFileSync(dir_cert + '/root.crt').toString(),
	key: fs.readFileSync(dir_cert + '/server.key').toString(),
	cert: fs.readFileSync(dir_cert + '/server.crt').toString(),
}

module.exports = {
	development: {
		uri: 'postgres://root:root@127.0.0.1:5432/root',
		username: 'root',
		password: 'root',
		database: 'root',
		host: '127.0.0.1',
		port: 5432,
		dialect: 'postgres',
		ssl: false,
		dialectOptions: {},
	},
	test: {
		uri: 'postgres://root:root@127.0.0.1:5432/test',
		username: 'root',
		password: 'root',
		database: 'test',
		host: '127.0.0.1',
		port: 5432,
		dialect: 'postgres',
		ssl: false,
		dialectOptions: {},
	},
	production: {
		uri: process.env.DATABASE_URL,
		dialect: 'postgres',
		username: process.env.username,
		password: process.env.password,
		database: process.env.database,
		host: process.env.host,
		port: process.env.port,
		ssl: true,
		dialectOptions: {
			...ssl,
		},
	},
}
