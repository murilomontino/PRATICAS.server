import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface SnailAttributes {
	id?: number
	ubs?: number
	latitude?: number
	longitude?: number
	glabrata_total: number
	straminea_total: number
	tenagophila_total: number
	glabrata_positivos: number
	straminea_positivos: number
	tenagophila_positivos: number
	glabrata_negativos: number
	straminea_negativos: number
	tenagophila_negativos: number
}

// Some fields are optional when calling SnailModel.create() or SnailModel.build()
type SnailCreationAttributes = Optional<SnailAttributes, 'id'>

// We need to declare an interface for our model that is basically what our class would be
export interface SnailInstance
	extends Model<SnailAttributes, SnailCreationAttributes>,
		SnailAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const Snail = (() => {
	const model = database.define<SnailInstance>(
		'caramujos',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			latitude: DataTypes.REAL,
			longitude: DataTypes.REAL,
			glabrata_total: DataTypes.SMALLINT,
			straminea_total: DataTypes.SMALLINT,
			tenagophila_total: DataTypes.SMALLINT,
			glabrata_positivos: DataTypes.SMALLINT,
			straminea_positivos: DataTypes.SMALLINT,
			tenagophila_positivos: DataTypes.SMALLINT,
			glabrata_negativos: DataTypes.SMALLINT,
			straminea_negativos: DataTypes.SMALLINT,
			tenagophila_negativos: DataTypes.SMALLINT,
		},
		{
			freezeTableName: true,
		}
	)
	return model
})()

export default Snail
