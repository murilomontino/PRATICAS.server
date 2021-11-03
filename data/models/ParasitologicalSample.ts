import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface ParasitologicalSampleAttributes {
	id?: number
	data_de_amostra: string
	primeira_lamina: number
	segunda_lamina: number
	id_exame?: number
}

// Some fields are optional when calling ParasitologicalSampleModel.create() or ParasitologicalSampleModel.build()
type ParasitologicalSampleCreationAttributes = Optional<
	ParasitologicalSampleAttributes,
	'id'
>

// We need to declare an interface for our model that is basically what our class would be
export interface ParasitologicalSampleInstance
	extends Model<
			ParasitologicalSampleAttributes,
			ParasitologicalSampleCreationAttributes
		>,
		ParasitologicalSampleAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const ParasitologicalSample = (() => {
	const model = database.define<ParasitologicalSampleInstance>(
		'amostrasParasitologicas',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			data_de_amostra: DataTypes.STRING(10),
			primeira_lamina: DataTypes.INTEGER,
			segunda_lamina: DataTypes.INTEGER,
		},
		{
			paranoid: true,
			freezeTableName: true,
		}
	)
	return model
})()

export default ParasitologicalSample
