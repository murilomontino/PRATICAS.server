import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'
import { Permission } from './types'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface ProfilesAttributes {
	id?: Permission
	tipo: string
}

// Some fields are optional when calling ProfilesModel.create() or ProfilesModel.build()
type ProfilesCreationAttributes = Optional<ProfilesAttributes, 'id'>

// We need to declare an interface for our model that is basically what our class would be
export interface ProfilesInstance
	extends Model<ProfilesAttributes, ProfilesCreationAttributes>,
		ProfilesAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const Profiles = (() => {
	const model = database.define<ProfilesInstance>(
		'perfis',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			tipo: DataTypes.STRING,
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	)
	return model
})()

export default Profiles
