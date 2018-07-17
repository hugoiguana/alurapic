//angular.module('alurapic').controller('FotosController', function($scope, $http) {
angular.module('alurapic').controller('FotosController', function($scope, $resource) {

	var recursoFoto = $resource('/v1/fotos/:fotoId');

    $scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	/*	
	var promise = $http.get('/v1/fotos');
		
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(erro){	
		console.log(erro);
	});
	*/
	
	/*
	$http.get('/v1/fotos')
		.success(function(fotos){
			console.log(fotos);
			$scope.fotos = fotos;// n�o precisa fazer retorno.data
			})
		.error(function(erro){	
			console.log(erro);
		});		
	*/

	  recursoFoto.query(function(fotos) {
			$scope.fotos = fotos;
		}, function(erro) {
			console.log(erro);
		});	
	
    $scope.remover = function(foto) {

		/*
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';

        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'N�o foi poss�vel apagar a foto ' + foto.titulo;
        });
		*/
		
        recursoFoto.delete({fotoId: foto._id}, function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'N�o foi poss�vel apagar a foto ' + foto.titulo;
        });		
    };	
		
});