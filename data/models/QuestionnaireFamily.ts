import { DataTypes, Model, Optional } from 'sequelize'

import { database } from '.'

// We recommend you declare an interface for the attributes, for stricter typechecking
interface QuestionnaireFamilyAttributes {
	id?: number
	DestinoEsgoto: number
	DestinoDejetosProprio: number
	DestinoFezes: number
	AbastecimentoAgua: number
	AguaBeber: number
	AguaComer: number
	Poco: number
	AcumuloAguaVerao: number
	AcumulaAguaInverno: number
	PisaAguaVerao: number
	PisaAguaInverno: number
	TipoCasa: number
	ChaoCasa: number
	EnergiaEletrica: number
	RuaAsfaltada: number
	EnchimentoDejetos: number
	EscolaridadeChefe: number
	OcupacaoChefe: string
	CasaPropria: number
	QtdPessoas: number
	RendaFamiliar: number
	DistanciaResidenciaRio: number
	outroDestinoEsgoto: string
	outroDestinoDejetosProprio: string
	outroDestinoFezes: string
	outroAbastecimentoAgua: string
	outroAguaBeber: string
	outroAguaComer: string
	outroPoco: string
	outroAcumuloAguaVerao: string
	outroAcumulaAguaInverno: string
	outroPisaAguaVerao: string
	outroPisaAguaInverno: string
	outroTipoCasa: string
	outroChaoCasa: string
	outroEnergiaEletrica: string
	outroRuaAsfaltada: string
	outroEnchimentoDejetos: string
	Zona: string
	Lixo: string
}

// Some fields are optional when calling QuestionnaireFamilyModel.create() or QuestionnaireFamilyModel.build()
type QuestionnaireFamilyCreationAttributes = Optional<
	QuestionnaireFamilyAttributes,
	'id'
>

// We need to declare an interface for our model that is basically what our class would be
export interface QuestionnaireFamilyInstance
	extends Model<
			QuestionnaireFamilyAttributes,
			QuestionnaireFamilyCreationAttributes
		>,
		QuestionnaireFamilyAttributes {
	updatedAt: Date
	dataValues: any
	createdAt: Date
}

const QuestionnaireFamily = (() => {
	const model = database.define<QuestionnaireFamilyInstance>(
		'questionarioFamilia',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			DestinoEsgoto: DataTypes.SMALLINT,
			DestinoDejetosProprio: DataTypes.SMALLINT,
			DestinoFezes: DataTypes.SMALLINT,
			AbastecimentoAgua: DataTypes.SMALLINT,
			AguaBeber: DataTypes.SMALLINT,
			AguaComer: DataTypes.SMALLINT,
			Poco: DataTypes.SMALLINT,
			AcumuloAguaVerao: DataTypes.SMALLINT,
			AcumulaAguaInverno: DataTypes.SMALLINT,
			PisaAguaVerao: DataTypes.SMALLINT,
			PisaAguaInverno: DataTypes.SMALLINT,
			TipoCasa: DataTypes.SMALLINT,
			ChaoCasa: DataTypes.SMALLINT,
			EnergiaEletrica: DataTypes.SMALLINT,
			RuaAsfaltada: DataTypes.SMALLINT,
			EnchimentoDejetos: DataTypes.SMALLINT,
			EscolaridadeChefe: DataTypes.SMALLINT,
			OcupacaoChefe: DataTypes.STRING,
			CasaPropria: DataTypes.SMALLINT,
			QtdPessoas: DataTypes.SMALLINT,
			RendaFamiliar: DataTypes.SMALLINT,
			DistanciaResidenciaRio: DataTypes.SMALLINT,
			Zona: DataTypes.SMALLINT,
			Lixo: DataTypes.SMALLINT,
			outroDestinoEsgoto: DataTypes.STRING,
			outroDestinoDejetosProprio: DataTypes.STRING,
			outroDestinoFezes: DataTypes.STRING,
			outroAbastecimentoAgua: DataTypes.STRING,
			outroAguaBeber: DataTypes.STRING,
			outroAguaComer: DataTypes.STRING,
			outroPoco: DataTypes.STRING,
			outroAcumuloAguaVerao: DataTypes.STRING,
			outroAcumulaAguaInverno: DataTypes.STRING,
			outroPisaAguaVerao: DataTypes.STRING,
			outroPisaAguaInverno: DataTypes.STRING,
			outroTipoCasa: DataTypes.STRING,
			outroChaoCasa: DataTypes.STRING,
			outroEnergiaEletrica: DataTypes.STRING,
			outroRuaAsfaltada: DataTypes.STRING,
			outroEnchimentoDejetos: DataTypes.STRING,
		},
		{
			freezeTableName: true,
		}
	)
	return model
})()

export default QuestionnaireFamily
