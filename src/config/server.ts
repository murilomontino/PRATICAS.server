import cors from 'cors'
import express from 'express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import routes from '../routes'
import options from './docs'

const limit = 52428800

const Application = express()

Application.use(cors())
Application.use(express.urlencoded({ limit: limit, extended: false }))
Application.use(express.json({ limit: limit }))

const doc = swaggerJsDoc(options)

Application.use('/docs-api', swaggerUi.serve, swaggerUi.setup(doc))

routes(Application)

export default Application
