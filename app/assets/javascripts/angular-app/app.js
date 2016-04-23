angular.module('angular-auth-app', ['ngRoute', 'ngResource','templates', 'ng-token-auth', 'ngAnimate', 'ngCookies'])
       .config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider){

         $authProvider.configure({
           //defaults are ok for now
         });

         $routeProvider.when('/',{
           controller: "HomeCtrl"
         }).when('/:status', {
           controller: "HomeCtrl"
         }).otherwise({
           redirectTo: '/'
         });

       }]);
