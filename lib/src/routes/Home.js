"use strict";Object.defineProperty(exports, "__esModule", {value: true});

exports. default = function (App) {
	App.get('/', async (req, res) => {
		try {
			res.send('Hello World!').status(200).end
		} catch (error) {
			res.sendStatus(400)
		}
	})
}
