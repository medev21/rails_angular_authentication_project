var app = angular.module('angular-auth-app');

app.controller('navCtrl', ['$scope', 'loginModalService', function($scope, loginModalService){
  $scope.helloWorld = 'hello world';

  $scope.openModal = function(){
    loginModalService.helloWorld;
  }

}]);
