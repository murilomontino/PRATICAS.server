"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');


// We recommend you declare an interface for the attributes, for stricter typechecking

















const Profiles = (() => {
	const model = _.database.define(
		'perfis',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			tipo: _sequelize.DataTypes.STRING,
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	)
	return model
})()

exports. default = Profiles
