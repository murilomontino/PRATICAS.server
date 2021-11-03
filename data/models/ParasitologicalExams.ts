import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'
import { ParasitologicalSampleInstance } from './ParasitologicalSample'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface ExamAttributes {
	id?: number
	data_de_emissao: string
	resultado: number
	intensidade?: number
	id_paciente?: number
}

// Some fields are optional when calling ExamModel.create() or ExamModel.build()
type ExamCreationAttributes = Optional<ExamAttributes, 'id'>

// We need to declare an interface for our model that is basically what our class would be
export interface ExamInstance
	extends Model<ExamAttributes, ExamCreationAttributes>,
		ExamAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
	deletedAt: Date
	getAmostrasParasitologicas: () => Promise<ParasitologicalSampleInstance[]>
}

const Exam = (() => {
	const model = database.define<ExamInstance>(
		'examesParasitologicos',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			data_de_emissao: {
				type: DataTypes.STRING(10),
			},
			resultado: DataTypes.INTEGER,
			intensidade: DataTypes.SMALLINT,
		},
		{
			freezeTableName: true,
			// Impede que o dado seja deletado do bd
			paranoid: true,
			hooks: {
				beforeCreate: (exam: ExamInstance, options) => {
					if (exam.resultado === 0) {
						exam.intensidade = 0
					} else if (exam.resultado <= 99) {
						exam.intensidade = 1
					} else if (exam.resultado >= 100 && exam.resultado <= 399) {
						exam.intensidade = 2
					} else {
						exam.intensidade = 3
					}
				},
			},
		}
	)
	return model
})()

export default Exam
