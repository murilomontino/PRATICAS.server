/* eslint-disable */
require('dotenv').config()

import http from 'http'
import Application from './config/server'

const port = process.env.PORT || 3000

const server = http.createServer(Application)

server.listen(port, () => {
	console.log(`Server listens: ${port}`)
	console.log('====================================')
	console.log('===========SERVIDOR ATIVO===========')
	console.log('====================================')
})
