import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'
import { Permission } from './types'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface UsersAttributes {
	id?: number
	nome?: string
	sobrenome?: string
	telefone?: string
	img_perfil?: string
	codIbge: string
	validado?: boolean
	email?: string
	cpf?: string
	senha?: string
	permissao?: Permission
	ubs?: number
}

// Some fields are optional when calling UsersModel.create() or UsersModel.build()
type UsersCreationAttributes = Optional<UsersAttributes, 'id'>

// We need to declare an interface for our model that is basically what our class would be
export interface UsersInstance
	extends Model<UsersAttributes, UsersCreationAttributes>,
		UsersAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const User = (() => {
	const model = database.define<UsersInstance>('usuarios', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		codIbge: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sobrenome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telefone: {
			type: DataTypes.STRING,
		},
		img_perfil: {
			type: DataTypes.STRING,
		},
		validado: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true,
			},
		},
		cpf: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		senha: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		permissao: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	})
	return model
})()

export default User
