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

  // $scope.isActive = true;

  var userObj = currentUser.getUserObj();

  $scope.current_user = userObj; //send user object to scope

  $scope.openModal = function(loginType){
    loginModalService.openModal(loginType);
  }

  $scope.signOut = function(){
    currentUser.signOut();
  }

  $scope.userStatus = userObj.signedIn; //by default is false cause user is not logged in!


  $rootScope.$on('auth:login-success', function(ev, user) {
    $cookieStore.put('userObj', user);
    $scope.userStatus = true;
    $location.path("/posts");
    // post_query();
  });

 // when the user logs out, remove the posts
 $rootScope.$on('auth:logout-success', function(ev) {
   $scope.posts = null;
   $cookieStore.remove('userObj');
   $scope.userStatus = false;
   $location.path("/");
 });

 $rootScope.$on('auth:registration-email-success', function(ev, user) {
    // alert("A registration email was sent to " + message.email);
    // post_query();
    $cookieStore.remove('userObj');
    $cookieStore.put('userObj', user);
    $scope.userStatus = true;
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
