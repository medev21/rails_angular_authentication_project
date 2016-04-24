var app = angular.module('angular-auth-app');

app.service('loginModalService', ['$uibModal', function($uibModal){

  this.loginType = null;
  this.modalInstance = null;


  this.openModal = function(loginType){
    if(loginType == 'login'){
      var templateUrl = "angular-app/loginModal/_login.html";
    }
    else if(loginType == 'register'){
      var templateUrl = "angular-app/loginModal/_register.html";
    }
    else{
      alert('something went wrong!');
    }

    this.modalInstance = $uibModal.open({
      animation: true,
      templateUrl: templateUrl,
      controller: 'loginModalCtrl',
      // windowTopClass: 'auth-template',late
      backdrop: 'static',
      backdropClass: 'auth-backdrop'
    });
  }

  this.closeModal = function() {
    this.modalInstance.dismiss('cancel');
  }
}]);
