angular.module("appFactory", []).factory('apiJson', ["$http", "$q", 
	function($http, $q){
		    var deferred = $q.defer();
			var readJson = {}, req = {
					 method: 'GET',
					 url: "http://www.recipepuppy.com/api/?i=potato",
					 headers: {'Access-Control-Allow-Origin': "true"}					 				 
					}
			readJson.read = function(){
				
				return $http(req).then(function(r){
					return r;
				})
			}
		return readJson;
	}]);