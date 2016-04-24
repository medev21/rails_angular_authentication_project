var app = angular.module('angular-auth-app');

app.controller('navCtrl', ['$scope', 'loginModalService', function($scope, loginModalService){

  $scope.openModal = function(loginType){
    loginModalService.openModal(loginType);
  }

}]);
