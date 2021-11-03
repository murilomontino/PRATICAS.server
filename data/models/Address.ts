import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface AddressAttributes {
	id: number
	cep: string
	estado: string
	cidade: string
	bairro: string
	rua: string
	numero: string
	complemento: string
	referencia: string
	pais: string
}

// Some fields are optional when calling AddressModel.create() or AddressModel.build()
type AddressCreationAttributes = Optional<AddressAttributes, 'id'>

// We need to declare an interface for our model that is basically what our class would be
export interface AddressInstance
	extends Model<AddressAttributes, AddressCreationAttributes>,
		AddressAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const Address = (() => {
	const model = database.define<AddressInstance>(
		'enderecos',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			cep: {
				type: DataTypes.STRING,
			},
			estado: DataTypes.STRING,
			cidade: DataTypes.STRING,
			bairro: DataTypes.STRING,
			rua: DataTypes.STRING,
			numero: DataTypes.STRING,
			complemento: DataTypes.STRING,
			referencia: DataTypes.STRING,
			pais: {
				type: DataTypes.STRING,
				defaultValue: 'Brasil',
			},
		},
		{
			freezeTableName: true,
			indexes: [
				{
					unique: true,
					fields: ['cep', 'estado', 'cidade', 'bairro', 'rua', 'numero'],
				},
			],
		}
	)

	return model
})()

export default Address
