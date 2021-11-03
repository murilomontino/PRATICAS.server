import { ModelCtor } from 'sequelize'

import { AddressInstance } from './Address'
import { ExamInstance } from './ParasitologicalExams'
import { ParasitologicalSampleInstance } from './ParasitologicalSample'
import { PatientInstance } from './Patient'
import { ProfilesInstance } from './Profiles'
import { QuestionnaireFamilyInstance } from './QuestionnaireFamily'
import { QuestionnairePatientInstance } from './QuestionnairePatient'
import { SnailInstance } from './Snail'
import { UBSInstance } from './UBS'
import { UsersInstance } from './User'

export interface ModelsDb {
	Address: ModelCtor<AddressInstance>
	ParasitologicalExam: ModelCtor<ExamInstance>
	Profiles: ModelCtor<ProfilesInstance>
	Patient: ModelCtor<PatientInstance>
	Snail: ModelCtor<SnailInstance>
	QuestionnaireFamily: ModelCtor<QuestionnaireFamilyInstance>
	QuestionnairePatient: ModelCtor<QuestionnairePatientInstance>
	ParasitologicalSample: ModelCtor<ParasitologicalSampleInstance>
	User: ModelCtor<UsersInstance>
	UBS: ModelCtor<UBSInstance>
}

// PERMISSION
export enum Permission {
	'Agente' = 1,
	'CoordenadorDaUBS',
	'Enfermeiro',
	'Medico',
	'Pesquisador',
	'SecretarioDaSaude',
}
