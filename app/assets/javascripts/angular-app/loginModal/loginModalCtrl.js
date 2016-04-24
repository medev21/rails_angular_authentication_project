var app = angular.module('angular-auth-app');

app.controller('loginModalCtrl', ['$scope', 'loginModalService',
    function($scope, loginModalService){

      $scope.close = function(){
        loginModalService.closeModal;
      }


    }]);
