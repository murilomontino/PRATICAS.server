import type { Express } from 'express'

export default function (App: Express) {
	App.get('/', async (req, res) => {
		try {
			res.send('Hello World!').status(200).end
		} catch (error) {
			res.sendStatus(400)
		}
	})
}
