"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');


// We recommend you declare an interface for the attributes, for stricter typechecking



























const User = (() => {
	const model = _.database.define('usuarios', {
		id: {
			type: _sequelize.DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		codIbge: {
			type: _sequelize.DataTypes.STRING,
			allowNull: false,
		},
		nome: {
			type: _sequelize.DataTypes.STRING,
			allowNull: false,
		},
		sobrenome: {
			type: _sequelize.DataTypes.STRING,
			allowNull: false,
		},
		telefone: {
			type: _sequelize.DataTypes.STRING,
		},
		img_perfil: {
			type: _sequelize.DataTypes.STRING,
		},
		validado: {
			type: _sequelize.DataTypes.BOOLEAN,
			defaultValue: false,
		},
		email: {
			type: _sequelize.DataTypes.STRING,
			validate: {
				isEmail: true,
			},
		},
		cpf: {
			type: _sequelize.DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		senha: {
			type: _sequelize.DataTypes.STRING,
			allowNull: false,
		},
		permissao: {
			type: _sequelize.DataTypes.INTEGER,
			allowNull: false,
		},
	})
	return model
})()

exports. default = User
