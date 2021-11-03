"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');

// We recommend you declare an interface for the attributes, for stricter typechecking

























const Address = (() => {
	const model = _.database.define(
		'enderecos',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			cep: {
				type: _sequelize.DataTypes.STRING,
			},
			estado: _sequelize.DataTypes.STRING,
			cidade: _sequelize.DataTypes.STRING,
			bairro: _sequelize.DataTypes.STRING,
			rua: _sequelize.DataTypes.STRING,
			numero: _sequelize.DataTypes.STRING,
			complemento: _sequelize.DataTypes.STRING,
			referencia: _sequelize.DataTypes.STRING,
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
					fields: ['cep', 'estado', 'cidade', 'bairro', 'rua', 'numero'],
				},
			],
		}
	)

	return model
})()

exports. default = Address
