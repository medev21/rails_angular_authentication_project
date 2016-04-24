angular.module('angular-auth-app', [
  'ui.bootstrap',
  'ngRoute',
  'ngResource',
  'templates',
  'ng-token-auth',
  'ngAnimate',
  'ngCookies',])
  .constant('baseUrl', 'http://localhost:3000')
  .config(['baseUrl','$routeProvider', '$authProvider', function(baseUrl, $routeProvider, $authProvider){

         $authProvider.configure({
           apiUrl: baseUrl + '/api',

          handleLoginResponse: function(response) {
            return response;
          },

          // handleAccountUpdateResponse: function(response) {
          //   return response;
          // },

          handleTokenValidationResponse: function(response) {
            return response;
          }
         });

         $routeProvider.when('/',{
           controller: "HomeCtrl"
         }).when('/:status', {
           controller: "HomeCtrl"
         }).otherwise({
           redirectTo: '/'
         });

       }]);
