/*
 * Funções de controle
 *  1. Criação de enquetes
 *  2. Seleção de botões
 */

(function () {
	var app = angular.module( 'action', [] );
		
	app.controller( 'buttonController', function() {
		this.seletor = seletores;		
	});
    
	var seletores = [
		{ name : 'bom' },
		{ name : 'médio' },
		{ name : 'ruim' }
	]
	
	app.controller( 'AlternativaCtrl', function($scope) {
        $scope.alternativas = [];
		
		$scope.addAlternativa = function() {
			this.alternativas.push({texto: this.novaAlternativa});
            this.novaAlternativa = '';
		};
	});
})();