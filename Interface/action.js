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
    
    
	app.controller( 'AlternativaCtrl', function() {
        this.alternativas = respostas;
		
		this.addAlternativa = function(resposta) {
			this.alternativas.push({texto: resposta});
            
/*          não consigo 'apagar' o texto da caixa depois
            que a alternativa é enviada para a pilha
*/
		};
	});
	
})();