"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');

// We recommend you declare an interface for the attributes, for stricter typechecking




























const Snail = (() => {
	const model = _.database.define(
		'caramujos',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			latitude: _sequelize.DataTypes.REAL,
			longitude: _sequelize.DataTypes.REAL,
			glabrata_total: _sequelize.DataTypes.SMALLINT,
			straminea_total: _sequelize.DataTypes.SMALLINT,
			tenagophila_total: _sequelize.DataTypes.SMALLINT,
			glabrata_positivos: _sequelize.DataTypes.SMALLINT,
			straminea_positivos: _sequelize.DataTypes.SMALLINT,
			tenagophila_positivos: _sequelize.DataTypes.SMALLINT,
			glabrata_negativos: _sequelize.DataTypes.SMALLINT,
			straminea_negativos: _sequelize.DataTypes.SMALLINT,
			tenagophila_negativos: _sequelize.DataTypes.SMALLINT,
		},
		{
			freezeTableName: true,
		}
	)
	return model
})()

exports. default = Snail
