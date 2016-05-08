angular.module('angular-auth-app')
       .controller('MainCtrl',[
         'Post',
         '$rootScope',
         '$scope',
         '$location',
         'currentUser',
         '$state',
         '$window',
         function(Post, $rootScope, $scope, $location, currentUser, $state, $window){

          //  $scope.isActive = true;

           if(currentUser.getUserObj()){
            //  console.log(currentUser.getUserObj().id);
             console.log('hey');

            //  $location.path('/posts');
            // $state.go('posts.show');
            // console.log($rootScope);
            // $window.location.href = '/posts';
            if($location.path() == '/' || $location.path() == '/about'){
              console.log('in the homepage');
              // $location.path('/posts');
              // $window.location.href = '/posts';
              $state.go('posts.show');
            }
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
