"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');

// We recommend you declare an interface for the attributes, for stricter typechecking


























const ParasitologicalSample = (() => {
	const model = _.database.define(
		'amostrasParasitologicas',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			data_de_amostra: _sequelize.DataTypes.STRING(10),
			primeira_lamina: _sequelize.DataTypes.INTEGER,
			segunda_lamina: _sequelize.DataTypes.INTEGER,
		},
		{
			paranoid: true,
			freezeTableName: true,
		}
	)
	return model
})()

exports. default = ParasitologicalSample
