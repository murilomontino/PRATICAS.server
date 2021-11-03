"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');

// We recommend you declare an interface for the attributes, for stricter typechecking































const QuestionnairePatient = (() => {
	const model = _.database.define(
		'questionarioPaciente',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			TomaBanhoRio: _sequelize.DataTypes.SMALLINT,
			LavaRoupa: _sequelize.DataTypes.SMALLINT,
			RegaHorta: _sequelize.DataTypes.SMALLINT,
			BuscaAgua: _sequelize.DataTypes.SMALLINT,
			LavaCarro: _sequelize.DataTypes.SMALLINT,
			Pesca: _sequelize.DataTypes.SMALLINT,
			resultado: _sequelize.DataTypes.STRING,
			intensidade: _sequelize.DataTypes.STRING,
			TomaBanho: _sequelize.DataTypes.SMALLINT,
		},
		{
			freezeTableName: true,
		}
	)
	return model
})()

exports. default = QuestionnairePatient
