"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');


// We recommend you declare an interface for the attributes, for stricter typechecking






















const Exam = (() => {
	const model = _.database.define(
		'examesParasitologicos',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			data_de_emissao: {
				type: _sequelize.DataTypes.STRING(10),
			},
			resultado: _sequelize.DataTypes.INTEGER,
			intensidade: _sequelize.DataTypes.SMALLINT,
		},
		{
			freezeTableName: true,
			// Impede que o dado seja deletado do bd
			paranoid: true,
			hooks: {
				beforeCreate: (exam, options) => {
					if (exam.resultado === 0) {
						exam.intensidade = 0
					} else if (exam.resultado <= 99) {
						exam.intensidade = 1
					} else if (exam.resultado >= 100 && exam.resultado <= 399) {
						exam.intensidade = 2
					} else {
						exam.intensidade = 3
					}
				},
			},
		}
	)
	return model
})()

exports. default = Exam
