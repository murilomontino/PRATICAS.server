"use strict";Object.defineProperty(exports, "__esModule", {value: true});

const Associate = async (db) => {
	/// RELACIONAMENTOS DE PACIENTE
	db.Patient.hasMany(db.ParasitologicalExam, {
		foreignKey: {
			name: 'id_paciente',
			allowNull: false,
		},
		constraints: true,
	})

	db.Patient.belongsTo(db.Address, {
		foreignKey: {
			name: 'residencia',
			allowNull: true,
		},
		constraints: true,
	})

	db.Patient.belongsTo(db.UBS, {
		foreignKey: {
			name: 'ubs',
			allowNull: true,
		},
		constraints: true,
	})

	db.Patient.belongsTo(db.QuestionnaireFamily, {
		foreignKey: {
			name: 'id_questionarioFamilia',
		},
		constraints: true,
	})

	db.Patient.hasOne(db.QuestionnairePatient, {
		foreignKey: {
			name: 'id_patient',
		},
		constraints: true,
	})

	/// RELACIONAMENTOS DE UBS
	db.UBS.hasMany(db.Patient, {
		foreignKey: {
			name: 'ubs',
			allowNull: true,
		},
	})
	db.UBS.hasMany(db.User, {
		foreignKey: {
			name: 'ubs',
			allowNull: true,
		},
	})
	/// RELACIONAMENTOS DE EXAMES
	db.ParasitologicalExam.hasMany(db.ParasitologicalSample, {
		foreignKey: {
			name: 'id_exame',
			allowNull: false,
		},
		constraints: true,
	})

	db.ParasitologicalExam.belongsTo(db.Patient, {
		foreignKey: {
			name: 'id_paciente',
			allowNull: false,
		},
	})
	/// RELACIONAMENTOS DE USUARIO

	db.User.belongsTo(db.UBS, {
		constraints: true,
		foreignKey: {
			name: 'ubs',
			allowNull: true,
		},
	})

	db.User.belongsTo(db.Profiles, {
		constraints: true,
		foreignKey: {
			name: 'permissao',
			allowNull: false,
		},
	})
	// RELACIONAMENTOS DE PERFIS
	db.Profiles.hasMany(db.User, {
		foreignKey: {
			name: 'permissao',
			allowNull: false,
		},
	})
	/// RELACIONAMENTOS DE QUESTIONARIOS

	db.QuestionnaireFamily.hasMany(db.Patient, {
		foreignKey: {
			name: 'id_questionarioFamilia',
		},
	})
}

exports. default = Associate
