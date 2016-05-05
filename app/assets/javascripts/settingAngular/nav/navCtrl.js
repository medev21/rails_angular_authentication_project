// var app = angular.module('angular-auth-app');

// app.controller('NavCtrl', ['$rootScope', '$scope', 'loginModalService', function($rootScope, $scope, loginModalService){
angular.module('angular-auth-app')
.controller('NavCtrl',
['$rootScope',
'$scope',
'loginModalService',
'$location',
'currentUser',
'$cookieStore',
function($rootScope, $scope, loginModalService, $location, currentUser, $cookieStore){

  $scope.isActive = true;

  var userObj = currentUser.getUserObj();

  $scope.currentUser = userObj;

  // console.log($scope.user);

  $scope.openModal = function(loginType){
    loginModalService.openModal(loginType);
  }

  $scope.signOut = function(){
    currentUser.signOut();
  }

  $rootScope.$on('auth:login-success', function(ev, user) {
    $cookieStore.put('userObj', user);
    $location.path("/posts");
    // post_query();
  });

 // when the user logs out, remove the posts
 $rootScope.$on('auth:logout-success', function(ev) {
   $scope.posts = null;
   $scope.signOut();
   $location.path("/");
 });

 $rootScope.$on('auth:registration-email-success', function(ev, message) {
    // alert("A registration email was sent to " + message.email);
    // post_query();

    $location.path("/posts");
  });

  $rootScope.$on('auth:validation-success', function(ev, userData) {
    // console.log("validation event: ", ev);
    // console.log("validation: ", userData);
    // post_query();

  });


 // will get a "401 Unauthorized" if the user is not authenticated
  // post_query();

  $rootScope.$on('$routeChangeSuccess',function(){
    console.log('location is now', $location.path())
  })



}]);
