import type { Express } from 'express'

import Auth from './Auth'
import Exam from './Exam'
import Families from './Families'
import Graphic from './Graphic'
import Home from './Home'
import Patient from './Patient'
import Snail from './Snail'
import UBS from './Ubs'
import User from './User'

export default function (App: Express) {
	UBS(App)
	Auth(App)
	User(App)
	Exam(App)
	Patient(App)
	Families(App)
	Graphic(App)
	Home(App)
	Snail(App)
}
