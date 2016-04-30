angular.module('angular-auth-app', [
  'ui.router',
  'ui.bootstrap',
  'ngRoute',
  'ngResource',
  'templates',
  'ng-token-auth',
  'ngAnimate',
  'ngCookies',])
  .constant('baseUrl', 'http://localhost:3000')
  .config([
  'baseUrl',
  '$stateProvider',
  '$routeProvider',
  '$authProvider',
  '$locationProvider',
  function(baseUrl, $stateProvider, $routeProvider, $authProvider, $locationProvider){
        $locationProvider.html5Mode(true); //this removes the # on the url, add the base to application

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


        $stateProvider
        .state('home', {
          url: '/'
        })
        .state('posts',{
          templateUrl: 'angular-app/posts/postLayout.html',
          controller: 'PostCtrl',
        })
        .state('posts.show',{
          url: '/posts',
          views: {
            postView: {
              templateUrl: 'angular-app/posts/post.html',
              controller: 'PostCtrl'
            }
          }
        })

       }]);
