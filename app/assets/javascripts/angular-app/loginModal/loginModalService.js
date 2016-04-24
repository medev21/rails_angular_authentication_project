var app = angular.module('angular-auth-app');

app.service('loginModalService', ['$uibModal', function($uibModal){
  function helloWorld(){
    console.log('hi from loginModalService');
  }
}]);
