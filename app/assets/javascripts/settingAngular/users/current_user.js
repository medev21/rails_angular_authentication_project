angular.module('angular-auth-app').factory('currentUser', [
'$rootScope',
'$cookieStore',
'$auth',
function($rootScope, $cookieStore, $auth){
  var userObj = {};

  userObj.getUserObj = function(){
    var userCookie = $cookieStore.get('userObj');

    if(userCookie){
      return userCookie;
    }
  }

  var signOut = function() {
    $auth.signOut()
      .then(function(resp) {
        userObj = null;
        $cookieStore.remove('userObj'); //remove current userObj cookie
        console.log('Sign OUT - current_user', resp);

      })
      .catch(function(resp) {
        // alert("signOut error");
        console.log("signOut error");
      });
  }

  userObj.signOut = signOut;
  return userObj;

}
]);
