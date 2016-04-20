angular.module('angular-auth-app', ['ngRoute', 'ngResource','templates'])
       .config(['$routeProvider', function($routeProvider){
         $routeProvider.when('/',{
           controller: "HomeCtrl"
         }).when('/:status', {
           controller: "HomeCtrl"
         }).otherwise({
           redirectTo: '/'
         });
       }]);
