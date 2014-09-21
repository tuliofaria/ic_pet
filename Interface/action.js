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
/*          não consigo 'apagar' o texto da caixa depois
            que a alternativa é enviada para a pilha
*/
		};
	});
})();

//function TodoCtrl($scope) {
//	
//	$scope.name = "Ed";
//	
//    $scope.todos = [
//        {text:'Learn AngularJS', done:false},
//        {text:'Build an app', done:false}
//    ];
//
//    $scope.getTotal = function () {
//        return $scope.todos.length;
//    };
//
//    $scope.addTodo = function () {
//        $scope.todos.push({text:$scope.formTodoText, done:false});
//        $scope.formTodoText = '';
//    };
//}