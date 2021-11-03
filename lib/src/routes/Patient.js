"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _PatientController = require('../controller/PatientController'); var _PatientController2 = _interopRequireDefault(_PatientController);

/* Passando as buscas do Backend para o frontend */
exports. default = function (App) {
	/**
	 * @swagger
	 *    '/api/patient':
	 *      post:
	 *        tags:
	 *          - Patients
	 *        description: Busca todos os pacientes do banco de dados
	 *        parameters: []
	 *        requestBody:
	 *          required: true
	 *          content:
	 *            application/json:
	 *              schema:
	 *                '$ref': '#/components/schemas/GetPatient'
	 *              example:
	 *                data:
	 *                  ubs: 1000
	 *                  permissao: 1
	 *        responses:
	 *          '200':
	 *            description: Array com todos os pacientes no bd
	 *            content:
	 *              application/json:
	 *                schema:
	 *                  type: object
	 *                  properties:
	 *                    dateNow:
	 *                      type: string
	 *                    database:
	 *                      type: array
	 *                      items:
	 *                        '$ref': '#/components/schemas/Patient'
	 */
	App.post('/api/patient', _PatientController2.default.get)

	/**
	 * @swagger
	 *    '/api/addPatient':
	 *      post:
	 *        tags:
	 *          - Patients
	 *        description: Adicionar um novo paciente ao bd
	 *        parameters: []
	 *        responses:
	 *          '200':
	 *            description: O paciente foi registrado com sucesso
	 *          '404':
	 *            description: Erro ao tentar inserir o paciente
	 *        requestBody:
	 *          required: true
	 *          content:
	 *            application/json:
	 *              schema:
	 *                '$ref': '#/components/schemas/Patient'
	 *              example:
	 *                data:
	 *                  nome: teste
	 *                  sobrenome: teste
	 *                  cpf: 000.111.000-00
	 *                  rg: '25445252'
	 *                  rua: Rua teste
	 *                  numero: '21'
	 *                  bairro: Centro
	 *                  cidade: Estância
	 *                  estado: Sergipe
	 *                  cep: 49200-000
	 *                  peso: 85
	 *                  altura: 174
	 *                  idade: 30
	 *                  data_de_nascimento: 30/10/1990
	 *                  nome_da_mae: Mãe teste
	 *                  telefone: '(79)99933-2233'
	 *                  sus: '212901381'
	 *                  ubs: 2000
	 *                  latitude: 10
	 *                  longitude: 10
	 *                  assinatura: assinado
	 *                  quizFamily:
	 *                    AbastecimentoAgua: 0
	 *                    AcumulaAguaInverno: 0
	 *                    AcumuloAguaVerao: 0
	 *                    AguaBeber: 0
	 *                    AguaComer: 0
	 *                    CasaPropria: 0
	 *                    ChaoCasa: 0
	 *                    DestinoDejetosProprio: 0
	 *                    DestinoEsgoto: 0
	 *                    DestinoFezes: 0
	 *                    DistanciaResidenciaRio: 0
	 *                    EnchimentoDejetos: 0
	 *                    EnergiaEletrica: 0
	 *                    EscolaridadeChefe: 0
	 *                    OcupacaoChefe: 0
	 *                    PisaAguaInverno: 0
	 *                    PisaAguaVerao: 0
	 *                    Poco: 0
	 *                    QtdPessoas: 0
	 *                    RendaFamiliar: 0
	 *                    RuaAsfaltada: 0
	 *                    TipoCasa: 0
	 *                    outroDestinoEsgoto: ''
	 *                    outroDestinoDejetosProprio: ''
	 *                    outroDestinoFezes: ''
	 *                    outroAbastecimentoAgua: ''
	 *                    outroAguaBeber: ''
	 *                    outroAguaComer: ''
	 *                    outroPoco: ''
	 *                    outroAcumuloAguaVerao: ''
	 *                    outroAcumulaAguaInverno: ''
	 *                    outroPisaAguaVerao: ''
	 *                    outroPisaAguaInverno: ''
	 *                    outroTipoCasa: ''
	 *                    outroChaoCasa: ''
	 *                    outroEnergiaEletrica: ''
	 *                    outroRuaAsfaltada: ''
	 *                    outroEnchimentoDejetos: ''
	 *                    Lixo: 0
	 *                    Zona: 0
	 *                  quizPatient:
	 *                    TomaBanhoRio: 0
	 *                    TomaBanho: 0
	 *                    LavaRoupa: 0
	 *                    RegaHorta: 0
	 *                    resultado: 0
	 *                    intensidade: 0
	 *                    BuscaAgua: 0
	 *                    LavaCarro: 0
	 *                    Pesca: 0
	 */
	App.post('/api/addPatient', _PatientController2.default.addPatient)
	App.post('/api/archive', _PatientController2.default.archive)
	App.post('/api/updatePatient', _PatientController2.default.updatePatient)

	/**
	 * @swagger
	 *    '/api/delPatient':
	 *      post:
	 *        tags:
	 *          - Patients
	 *        description: Remover um paciente do bd
	 *        parameters: []
	 *        responses:
	 *          '202':
	 *            description: O paciente foi removido com sucesso'
	 *          '400':
	 *            description: Patiente não encontrado não encontrado no BD
	 *        requestBody:
	 *          required: true
	 *          content:
	 *            application/json:
	 *              schema:
	 *                '$ref': '#/components/schemas/Exam'
	 *              example:
	 *                data:
	 *                  id_patient: 10000
	 */

	App.post('/api/desvincularEvincular', _PatientController2.default.desvincularEvincular)
}

/**
 * @swagger
 *  components:
 *    schemas:
 *      Patient:
 *        type: object
 *        properties:
 *          id_patient:
 *            type: number
 *          nome:
 *            type: string
 *          sobrenome:
 *            type: string
 *          idade:
 *            type: number
 *          peso:
 *            type: string
 *          altura:
 *            type: number
 *          telefone:
 *            type: string
 *          cpf:
 *            type: string
 *          sus:
 *            type: string
 *          assinatura:
 *            type: string
 *          pessoa:
 *            type: number
 *          data_de_cadastro:
 *            type: string
 *          nome_da_mae:
 *            type: string
 *          rg:
 *            type: string
 *          familia_apelido:
 *            type: string
 *          id_familia:
 *            type: number
 *          latitude:
 *            type: number
 *          longitude:
 *            type: number
 *          endereco:
 *            type: number
 *          bairro:
 *            type: string
 *          cep:
 *            type: string
 *          cidade:
 *            type: string
 *          numero:
 *            type: string
 *          rua:
 *            type: string
 *          pais:
 *            type: string
 *          estado:
 *            type: string
 *          ubs:
 *            type: number
 *          nome_ubs:
 *            type: string
 *          endereco_ubs:
 *            type: number
 *          cep_ubs:
 *            type: string
 *          bairro_ubs:
 *            type: string
 *          cidade_ubs:
 *            type: string
 *          numero_ubs:
 *            type: string
 *          rua_ubs:
 *            type: string
 *          estado_ubs:
 *            type: string
 *          pais_ubs:
 *            type: string
 */
