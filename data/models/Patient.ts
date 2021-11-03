import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'

enum Genero {
	'Masculino Cis',
	'Feminino Cis',
	'Masculino Trans',
	'Feminino Trans',
	'Não-binário',
	'Não Identificado',
	'Outro',
}

// We recommend you declare an interface for the attributes, for stricter typechecking
interface PatientAttributes {
	id?: number
	sus?: string
	latitude?: number
	longitude?: number
	assinatura?: string
	nome?: string
	sobrenome?: string
	data_de_nascimento?: string
	nome_da_mae?: string
	rg?: string
	idade?: number
	peso?: number
	altura?: number
	telefone?: string
	cpf?: string
	is_patient?: boolean
	genero?: Genero
	ubs?: number | null
	termos_e_assinatura?: boolean
}

// Some fields are optional when calling PatientModel.create() or PatientModel.build()
interface PatientCreationAttributes extends Optional<PatientAttributes, 'id'> {
	ubs: number
	residencia: number
	id_questionarioFamilia?: number | null
	id_questionarioPaciente?: number | null
}

// We need to declare an interface for our model that is basically what our class would be
export interface PatientInstance
	extends Model<PatientAttributes, PatientCreationAttributes>,
		PatientAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
	deletedAt: Date
}

const Patient = (() => {
	const model = database.define<PatientInstance>(
		'pacientes',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			nome: DataTypes.STRING,
			sobrenome: DataTypes.STRING,
			data_de_nascimento: {
				type: DataTypes.STRING(10),
			},
			nome_da_mae: DataTypes.STRING,
			rg: DataTypes.STRING,
			idade: DataTypes.SMALLINT,
			peso: DataTypes.DECIMAL(6, 3),
			telefone: DataTypes.STRING,
			cpf: {
				type: DataTypes.STRING,
				unique: true,
			},
			altura: DataTypes.SMALLINT,
			genero: DataTypes.SMALLINT,
			sus: {
				type: DataTypes.STRING,
				unique: true,

				/* 	validate: {
			is: /\d{15}/
		} */
			},
			latitude: DataTypes.REAL,
			longitude: DataTypes.REAL,
			assinatura: DataTypes.TEXT({
				length: 'long',
			}),
			is_patient: DataTypes.BOOLEAN,
			termos_e_assinatura: DataTypes.BOOLEAN,
		},
		{
			paranoid: true,
			freezeTableName: true,
			hooks: {
				beforeCreate: (patient: PatientInstance, options) => {
					if (patient.assinatura) {
						patient.termos_e_assinatura = true
					}
				},
			},
		}
	)
	return model
})()
export default Patient
