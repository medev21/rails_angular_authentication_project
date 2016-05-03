angular.module('angular-auth-app', [
  'ui.router',
  'ui.bootstrap',
  'ngRoute',
  'ngResource',
  'templates',
  'ipCookie',
  'ng-token-auth',
  'ngAnimate',
  'ngCookies',])
  .constant('baseUrl', 'http://localhost:3000')
  .config([
  'baseUrl',
  '$stateProvider',
  // '$routeProvider',
  '$locationProvider',
  '$urlRouterProvider',
  '$authProvider',
  function(baseUrl, $stateProvider, $locationProvider, $urlRouterProvider, $authProvider){
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


       $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
          url: '/',
          // controller: 'MainCtrl',
        })
        .state('posts',{
          templateUrl: 'settingAngular/posts/postLayout.html',
        })
        .state('posts.show',{
          url: '/posts',
          views: {
            postView: {
              templateUrl: 'settingAngular/posts/post.html',
              controller: 'PostCtrl'
            }
          }
        });



        // $routeProvider.otherwise({
        //    redirectTo: '/'
        //  });

       }]);
