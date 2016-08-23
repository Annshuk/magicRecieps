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
	   .directive('search', SearchDirective);
	 //define angular in app
	 angular.bootstrap(document, ['app.recipe']);	
   });
 
function SearchDirective($location, $routeParams, apiJson){
return {
    restrict: 'AEC',
   // transclude: true,
    scope: {},
    link: function(scope, element, attrs, controllers) {
		scope.search  = $routeParams.id
        scope.SearchRecipe = function(){	
	    var searchKey = scope.search;
		   scope.value = (searchKey!== undefined)? '' : "No Data Available";
			if(searchKey==''){
					 $scope.value = "No Data Available"; 
						return false;
			}	
			if(searchKey!=undefined){	
			  $location.path("/search/"+searchKey);
				console.log(searchKey)
				 apiJson.read(searchKey).then(function(response){
						console.log(response)
					});
				} else
				return false;
			};//end on click method*/
    },
    template: '<input type="text" id="searchValue" name="search" ng-model="search" /><input type="submit" ng-click="SearchRecipe()" />'
  };
}
  
function MagicRecipeController(){}
function SearchController(){
	}
})()

