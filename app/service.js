angular.module("appFactory", []).factory('apiJson', ["$http", "$q", 
	function($http, $q){
		    var deferred = $q.defer();
			var readJson = {};
			    readJson.read = function(req){
				return $http({
					method:"jsonp",
					url: "http://www.recipepuppy.com/api/?i="+req,					
					data: '',  headers: {"Content-Type": "text/javascript" }				
					}).then(function(response, status, headers, config){					
								
					deferred.resolve(response.data);					
					return deferred.promise;
				})
		}
		return readJson;
	}]);

	
	