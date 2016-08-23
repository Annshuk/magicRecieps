// JavaScript Document
require.config({
	baseUrl: "libs",
	paths:{
		"angular" : "angular.min",
		"angularRoute" : "angularRoute",
		"service" : "../app/service"
		
	},
	shim: {		
		'angular' : {exports: 'angular'},
		'angularRoute' : {deps: ['angular']},		
		"service" : {deps: ['angular']}
		
	}
	
});
require(['../app/app']);