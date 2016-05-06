angular.module('angular-auth-app')
       .controller('MainCtrl',[
         'Post',
         '$rootScope',
         '$scope',
         '$location',
         'currentUser',
         '$state',
         function(Post, $rootScope, $scope, $location, currentUser, $state){

           $scope.isActive = true;


           if(currentUser.getUserObj()){
            //  console.log(currentUser.getUserObj().id);
             console.log('hey');

            //  $location.path('/');
            // $state.go('posts.show');
           }
           else{
             console.log('nothing;')
           }

          //  console.log($rootScope);
          //  var post_query = function(){
          //    Post.query().$promise.then(function(posts){
          //      $scope.posts = posts;
          //    });
          //  }

       }]);
