import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface QuestionnairePatientAttributes {
	id?: number
	TomaBanhoRio: string
	LavaRoupa: string
	RegaHorta: string
	BuscaAgua: string
	LavaCarro: string
	Pesca: string
	resultado: number
	intensidade: string
	TomaBanho: string
}

// Some fields are optional when calling QuestionnairePatientModel.create() or QuestionnairePatientModel.build()
type QuestionnairePatientCreationAttributes = Optional<
	QuestionnairePatientAttributes,
	'id'
>

// We need to declare an interface for our model that is basically what our class would be
export interface QuestionnairePatientInstance
	extends Model<
			QuestionnairePatientAttributes,
			QuestionnairePatientCreationAttributes
		>,
		QuestionnairePatientAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const QuestionnairePatient = (() => {
	const model = database.define<QuestionnairePatientInstance>(
		'questionarioPaciente',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			TomaBanhoRio: DataTypes.SMALLINT,
			LavaRoupa: DataTypes.SMALLINT,
			RegaHorta: DataTypes.SMALLINT,
			BuscaAgua: DataTypes.SMALLINT,
			LavaCarro: DataTypes.SMALLINT,
			Pesca: DataTypes.SMALLINT,
			resultado: DataTypes.STRING,
			intensidade: DataTypes.STRING,
			TomaBanho: DataTypes.SMALLINT,
		},
		{
			freezeTableName: true,
		}
	)
	return model
})()

export default QuestionnairePatient
