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
  '$routeProvider',
  '$locationProvider',
  '$urlRouterProvider',
  '$authProvider',
  function(baseUrl, $stateProvider, $routeProvider, $locationProvider, $urlRouterProvider, $authProvider){
        $locationProvider.html5Mode(true); //this removes the # on the url, add the base to application

         $authProvider.configure({
           apiUrl: baseUrl + '/api',

          handleLoginResponse: function(response) {
            return response.data;
          },

          // handleAccountUpdateResponse: function(response) {
          //   return response;
          // },

          handleTokenValidationResponse: function(response) {
            return response.data;
          }
         });

        $stateProvider
        .state('home', {
          url: '/',
          // controller: 'MainCtrl',
        })
        .state('aboutPage', {
          url: '/about',
          templateUrl: 'settingAngular/about/aboutPage.html'
        })
        .state('profilePage', {
          templateUrl: 'settingAngular/about/profileLayout.html'
        })
        .state('profilePage.show',{
          url: '/profile',
          views: {
            profileView: {
              templateUrl: 'settingAngular/about/profilePage.html'
            }
          },
          resolve: {
            auth: function($auth) {
              return $auth.validateUser();
            }
          }
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

        $urlRouterProvider.otherwise('/');

        // $routeProvider
        //     .when('/publicurl', {})
        //     .when('/loginurl', {})
        //     .when('/unauthorize', {})
        //     .otherwise({redirectTo: '/'});
        // })
        // .run(function ($logincheck, $location) {
        //   //console.log("Into run mode");
        //   console.log("Userid 5 is logged in: ", $logincheck(5));
        //   console.log("Userid 0  logged in: ", $logincheck(0));
        //
        //   //now redirect to appropriate path based on login status
        //   if ($logincheck(0)) {
        //     //$location.path('/loginurl'); or
        //   }
        //   else {
        //     //$location.path('/publicurl'); or
        //   }


       }]);
