// JavaScript Document
(function(){
	"use strict";
     define(['angular','service'], function(angular,service) {
	   angular.module('app.recipe', ['appFactory'])
	   .controller('MagicRecipeController', MagicRecipeController)	 
	 //define angular in app
	 angular.bootstrap(document, ['app.recipe']);	
   });
})()

function MagicRecipeController($scope, apiJson){
	var vm = this;
	apiJson.read().then(function(data){	
		console.log(data)
	})
}