import sequelize from 'sequelize'

import ParasitologicalExam from '../models/ParasitologicalExams'
import Patient from '../models/Patient'
import Snail from '../models/Snail'
import UBS from '../models/UBS'
import User from '../models/User'

const GetDateUser = async () => {
	const response = await User.findOne({
		attributes: [[sequelize.fn('max', sequelize.col('updatedAt')), 'date']],
	})

	return response?.dataValues.date
}
const GetDateSnail = async () => {
	const response = await Snail.findOne({
		attributes: [[sequelize.fn('max', sequelize.col('updatedAt')), 'date']],
	})

	return response?.dataValues.date
}

const GetDatePatient = async () => {
	const response = await Patient.findOne({
		attributes: [[sequelize.fn('max', sequelize.col('updatedAt')), 'date']],
	})

	return response?.dataValues.date
}

const GetDateParasitologicalExam = async () => {
	const response = await ParasitologicalExam.findOne({
		attributes: [[sequelize.fn('max', sequelize.col('updatedAt')), 'date']],
	})

	return response?.dataValues.date
}

const GetDateUBS = async () => {
	const response = await UBS.findOne({
		attributes: [[sequelize.fn('max', sequelize.col('updatedAt')), 'date']],
	})

	return response?.dataValues.date
}

export default {
	GetDateParasitologicalExam,
	GetDatePatient,
	GetDateSnail,
	GetDateUBS,
	GetDateUser,
}
