"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');

var Genero; (function (Genero) {
	Genero[Genero['Masculino Cis'] = 0] = 'Masculino Cis';
	Genero[Genero['Feminino Cis'] = Genero['Masculino Cis'] + 1] = 'Feminino Cis';
	Genero[Genero['Masculino Trans'] = Genero['Feminino Cis'] + 1] = 'Masculino Trans';
	Genero[Genero['Feminino Trans'] = Genero['Masculino Trans'] + 1] = 'Feminino Trans';
	Genero[Genero['Não-binário'] = Genero['Feminino Trans'] + 1] = 'Não-binário';
	Genero[Genero['Não Identificado'] = Genero['Não-binário'] + 1] = 'Não Identificado';
	const Outro = Genero['Não Identificado'] + 1; Genero[Genero['Outro'] = Outro] = 'Outro';
})(Genero || (Genero = {}));

// We recommend you declare an interface for the attributes, for stricter typechecking








































const Patient = (() => {
	const model = _.database.define(
		'pacientes',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			nome: _sequelize.DataTypes.STRING,
			sobrenome: _sequelize.DataTypes.STRING,
			data_de_nascimento: {
				type: _sequelize.DataTypes.STRING(10),
			},
			nome_da_mae: _sequelize.DataTypes.STRING,
			rg: _sequelize.DataTypes.STRING,
			idade: _sequelize.DataTypes.SMALLINT,
			peso: _sequelize.DataTypes.DECIMAL(6, 3),
			telefone: _sequelize.DataTypes.STRING,
			cpf: {
				type: _sequelize.DataTypes.STRING,
				unique: true,
			},
			altura: _sequelize.DataTypes.SMALLINT,
			genero: _sequelize.DataTypes.SMALLINT,
			sus: {
				type: _sequelize.DataTypes.STRING,
				unique: true,

				/* 	validate: {
			is: /\d{15}/
		} */
			},
			latitude: _sequelize.DataTypes.REAL,
			longitude: _sequelize.DataTypes.REAL,
			assinatura: _sequelize.DataTypes.TEXT({
				length: 'long',
			}),
			is_patient: _sequelize.DataTypes.BOOLEAN,
			termos_e_assinatura: _sequelize.DataTypes.BOOLEAN,
		},
		{
			paranoid: true,
			freezeTableName: true,
			hooks: {
				beforeCreate: (patient, options) => {
					if (patient.assinatura) {
						patient.termos_e_assinatura = true
					}
				},
			},
		}
	)
	return model
})()
exports. default = Patient
