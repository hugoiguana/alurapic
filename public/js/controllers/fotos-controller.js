angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];

	/*	
	var promise = $http.get('/v1/fotos');
		
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(erro){	
		console.log(erro);
	});
	*/
	
	$http.get('/v1/fotos')
		.success(function(fotos){
			console.log(fotos);
			$scope.fotos = fotos;// n�o precisa fazer retorno.data
			})
		.error(function(erro){	
			console.log(erro);
		});			

});