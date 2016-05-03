angular.module('angular-auth-app')
       .controller('MainCtrl',[
         'Post',
         '$rootScope',
         '$scope',
         '$location',
         function(Post, $rootScope, $scope, $location){

           $scope.isActive = true;

          //  console.log($rootScope);
          //  var post_query = function(){
          //    Post.query().$promise.then(function(posts){
          //      $scope.posts = posts;
          //    });
          //  }

       }]);
