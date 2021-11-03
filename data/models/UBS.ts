import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface UBSAttributes {
	id?: number
	nome?: string
	codIbge: string
	cep?: string
	estado?: string
	cidade?: string
	bairro?: string
	rua?: string
	numero?: string
	complemento?: string
	pais?: string
}

// Some fields are optional when calling UBSModel.create() or UBSModel.build()
type UBSCreationAttributes = Optional<UBSAttributes, 'id'>

// We need to declare an interface for our model that is basically what our class would be
export interface UBSInstance
	extends Model<UBSAttributes, UBSCreationAttributes>,
		UBSAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const UBS = (() => {
	const model = database.define<UBSInstance>(
		'ubs',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			codIbge: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nome: {
				type: DataTypes.STRING,
			},
			cep: {
				type: DataTypes.STRING,
			},
			estado: {
				type: DataTypes.STRING,
			},
			cidade: {
				type: DataTypes.STRING,
			},
			bairro: {
				type: DataTypes.STRING,
			},
			rua: {
				type: DataTypes.STRING,
			},
			numero: {
				type: DataTypes.STRING,
			},
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
					fields: [
						'cidade',
						'bairro',
						'numero',
						'nome',
						'rua',
						'cep',
						'estado',
					],
				},
			],
		}
	)
	return model
})()

export default UBS
