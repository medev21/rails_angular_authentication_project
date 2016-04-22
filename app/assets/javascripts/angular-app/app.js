angular.module('angular-auth-app', ['ngRoute', 'ngResource','templates', 'ng-token-auth'])
       .config(['$routeProvider', function($routeProvider){
         $routeProvider.when('/',{
           controller: "HomeCtrl"
         }).when('/:status', {
           controller: "HomeCtrl"
         }).otherwise({
           redirectTo: '/'
         });
       }]);
