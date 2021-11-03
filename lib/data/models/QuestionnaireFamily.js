"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _ = require('.');

// We recommend you declare an interface for the attributes, for stricter typechecking






























































const QuestionnaireFamily = (() => {
	const model = _.database.define(
		'questionarioFamilia',
		{
			id: {
				type: _sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			DestinoEsgoto: _sequelize.DataTypes.SMALLINT,
			DestinoDejetosProprio: _sequelize.DataTypes.SMALLINT,
			DestinoFezes: _sequelize.DataTypes.SMALLINT,
			AbastecimentoAgua: _sequelize.DataTypes.SMALLINT,
			AguaBeber: _sequelize.DataTypes.SMALLINT,
			AguaComer: _sequelize.DataTypes.SMALLINT,
			Poco: _sequelize.DataTypes.SMALLINT,
			AcumuloAguaVerao: _sequelize.DataTypes.SMALLINT,
			AcumulaAguaInverno: _sequelize.DataTypes.SMALLINT,
			PisaAguaVerao: _sequelize.DataTypes.SMALLINT,
			PisaAguaInverno: _sequelize.DataTypes.SMALLINT,
			TipoCasa: _sequelize.DataTypes.SMALLINT,
			ChaoCasa: _sequelize.DataTypes.SMALLINT,
			EnergiaEletrica: _sequelize.DataTypes.SMALLINT,
			RuaAsfaltada: _sequelize.DataTypes.SMALLINT,
			EnchimentoDejetos: _sequelize.DataTypes.SMALLINT,
			EscolaridadeChefe: _sequelize.DataTypes.SMALLINT,
			OcupacaoChefe: _sequelize.DataTypes.STRING,
			CasaPropria: _sequelize.DataTypes.SMALLINT,
			QtdPessoas: _sequelize.DataTypes.SMALLINT,
			RendaFamiliar: _sequelize.DataTypes.SMALLINT,
			DistanciaResidenciaRio: _sequelize.DataTypes.SMALLINT,
			Zona: _sequelize.DataTypes.SMALLINT,
			Lixo: _sequelize.DataTypes.SMALLINT,
			outroDestinoEsgoto: _sequelize.DataTypes.STRING,
			outroDestinoDejetosProprio: _sequelize.DataTypes.STRING,
			outroDestinoFezes: _sequelize.DataTypes.STRING,
			outroAbastecimentoAgua: _sequelize.DataTypes.STRING,
			outroAguaBeber: _sequelize.DataTypes.STRING,
			outroAguaComer: _sequelize.DataTypes.STRING,
			outroPoco: _sequelize.DataTypes.STRING,
			outroAcumuloAguaVerao: _sequelize.DataTypes.STRING,
			outroAcumulaAguaInverno: _sequelize.DataTypes.STRING,
			outroPisaAguaVerao: _sequelize.DataTypes.STRING,
			outroPisaAguaInverno: _sequelize.DataTypes.STRING,
			outroTipoCasa: _sequelize.DataTypes.STRING,
			outroChaoCasa: _sequelize.DataTypes.STRING,
			outroEnergiaEletrica: _sequelize.DataTypes.STRING,
			outroRuaAsfaltada: _sequelize.DataTypes.STRING,
			outroEnchimentoDejetos: _sequelize.DataTypes.STRING,
		},
		{
			freezeTableName: true,
		}
	)
	return model
})()

exports. default = QuestionnaireFamily
