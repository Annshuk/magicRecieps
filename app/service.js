angular.module("appFactory", []).factory('apiJson', ["$http", "$q", 
	function($http, $q){
		    var deferred = $q.defer(), readJson = {},
			 req = {
					 method: 'GET',
					 url: "app/database.json",
					// headers: {'Content-Type': 'text/javascript; charset=utf-8'}					 				 
				}
			
			readJson.read = function(){	
				return $http(req).then(function(response){		
						deferred.resolve(response.data);			       
						return deferred.promise;	
					}, 
					function(error){
					 console.error(error);
				});
			}
		return readJson;
	}]);