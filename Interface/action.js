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
            resposta = '';
		};
	});
	
})();

var respostas = [
];
var times = [
	{nome: "Corinthians"},
	{nome: "Palmeiras"},
	{nome: "São Paulo"}
];
