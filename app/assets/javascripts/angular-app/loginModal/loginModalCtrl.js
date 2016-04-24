var app = angular.module('angular-auth-app');

app.controller('loginModalCtrl', [
  '$scope',
  'loginModalService',
  '$auth',
  function($scope, loginModalService, $auth){

    $scope.close = function(){
      loginModalService.closeModal();
    }

    $scope.submitRegistration = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
          $scope.close();

        })
        .catch(function(resp) {
          // handle error response
        });
    };

    $scope.submitLogin = function(){
      $auth.submitLogin($scope.loginForm)
      .then(function(resp) {
        // handle success response
        $scope.close();
      })
      .catch(function(resp) {
        // handle error response
      });
    }


  }]);
