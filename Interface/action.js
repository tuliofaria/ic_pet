/*
 * Funções de controle
 *  1. Criação de enquetes
 *  2. Seleção de botões
 */

(function () {
	var app = angular.module('action', []);

	app.controller('opcaoCtrl', function ($scope) {
		$scope.seletor = [
			{ name : 'bom' },
			{ name : 'médio' },
			{ name : 'ruim' }
		];
	});
    
	app.controller('AlternativaCtrl', function ($scope) {
		
		$scope.alternativas = [];
		
		$scope.addAlternativa = function () {
			if ($scope.novaAlternativa) {	// apenas valida se houver algum texto
				$scope.alternativas.push({texto: $scope.novaAlternativa});
				this.novaAlternativa = '';	// limpa o campo
			}
		};
		
		$scope.subAlternativa = function (alternativa) {
			var posicao = $scope.alternativas.indexOf(alternativa);	// obtem o 'endereço' da alternativa
			$scope.alternativas.splice( posicao, 1 );				// e remove ela da lista
		};
		
	});
	
})();