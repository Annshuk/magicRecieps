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
})()

function MagicRecipeController($scope, $rootScope, $routeParams, $location, apiJson){	

	$scope.SearchRecipe = function(){		
			 $scope.value = ($scope.search!== undefined)? '' : "No Data Available";
				if($scope.search==''){
					 $scope.value = "No Data Available"; 
						return false;
					}
				var searchKey = $scope.search;
				   if(searchKey!=undefined){	
					 $location.path("/search/"+searchKey)
						 apiJson.read(searchKey).then(function(response){
										console.log(response)
						});
					}
				else return false;
	}
	
}

function SearchController($scope, $rootScope, $routeParams, $location, apiJson){	   
		$scope.search = $routeParams.id;
		 apiJson.read($scope.search).then(function(response){
				console.log(response)
			});
		$scope.SearchRecipe = function(){
			 $scope.value = ($scope.search!== undefined)? '' : "No Data Available";
				if($scope.search==''){
					 $scope.value = "No Data Available"; 
						return false;
					}
				var searchKey = $scope.search;
				   if(searchKey!=undefined){	
					$location.path("/search/"+searchKey)
	                       apiJson.read($scope.search).then(function(response){
										console.log(response)
						});
					}
				else return false;
	}
}