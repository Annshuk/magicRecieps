// JavaScript Document
(function(){
	"use strict";
     define(['angular', 'angularRoute', 'service'], function(angular, angularRoute, service) {
	   angular.module('app.recipe', ['ngRoute','appFactory'])
	   .config(function($routeProvider){
			$routeProvider
			.when('/', {templateUrl:'templates/dashboard.htm', controller: 'MagicRecipeController'})
			.when('/search/:id', {templateUrl:'templates/search.htm', controller: 'SearchController'})
			.otherwise({redirectTo: '/'});	
		})
	   .controller('MagicRecipeController', MagicRecipeController)
	   .controller('SearchController', SearchController)	   
	   
	 //define angular in app
	 angular.bootstrap(document, ['app.recipe']);	
   });
  
 function MagicRecipeController($scope, $rootScope, $routeParams, $location, apiJson){	
	$scope.SearchRecipe = function(msg){
			$rootScope.$broadcast("SearchBroadcast", msg);	
	} 
}

 function SearchController($scope, $rootScope, $routeParams, $location, apiJson){	   
		$scope.search = $routeParams.id;		
		$rootScope.$on("SearchBroadcast", function(event, data){
		   $scope.SearchRecipe(data);
	     });
		//get search value
	$scope.SearchRecipe = function(msg){			
		$scope.value = (msg!== undefined)? '' : "No Data Available";
			if(msg==''){
					 $scope.value = "No Data Available"; 
						return false;
			}
		 var searchKey = msg;
			if(searchKey!=undefined){	
			  $location.path("/search/"+searchKey);
				console.log(searchKey)
				 apiJson.read(searchKey).then(function(response){
						console.log(response)
					});
				} else
			return false;
		};//end on click method
}
})()

