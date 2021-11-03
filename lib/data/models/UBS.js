"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');

// We recommend you declare an interface for the attributes, for stricter typechecking


























const UBS = (() => {
	const model = _.database.define(
		'ubs',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			codIbge: {
				type: _sequelize.DataTypes.STRING,
				allowNull: false,
			},
			nome: {
				type: _sequelize.DataTypes.STRING,
			},
			cep: {
				type: _sequelize.DataTypes.STRING,
			},
			estado: {
				type: _sequelize.DataTypes.STRING,
			},
			cidade: {
				type: _sequelize.DataTypes.STRING,
			},
			bairro: {
				type: _sequelize.DataTypes.STRING,
			},
			rua: {
				type: _sequelize.DataTypes.STRING,
			},
			numero: {
				type: _sequelize.DataTypes.STRING,
			},
			pais: {
				type: _sequelize.DataTypes.STRING,
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

exports. default = UBS
