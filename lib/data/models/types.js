"use strict";Object.defineProperty(exports, "__esModule", {value: true});

























// PERMISSION
var Permission; (function (Permission) {
	const Agente = 1; Permission[Permission['Agente'] = Agente] = 'Agente';
	const CoordenadorDaUBS = Agente + 1; Permission[Permission['CoordenadorDaUBS'] = CoordenadorDaUBS] = 'CoordenadorDaUBS';
	const Enfermeiro = CoordenadorDaUBS + 1; Permission[Permission['Enfermeiro'] = Enfermeiro] = 'Enfermeiro';
	const Medico = Enfermeiro + 1; Permission[Permission['Medico'] = Medico] = 'Medico';
	const Pesquisador = Medico + 1; Permission[Permission['Pesquisador'] = Pesquisador] = 'Pesquisador';
	const SecretarioDaSaude = Pesquisador + 1; Permission[Permission['SecretarioDaSaude'] = SecretarioDaSaude] = 'SecretarioDaSaude';
})(Permission || (exports.Permission = Permission = {}));
