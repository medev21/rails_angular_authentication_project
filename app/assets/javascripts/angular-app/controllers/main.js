angular.module('angular-auth-app')
       .controller('MainCtrl',['Post', '$rootScope', '$scope', function(Post, $rootScope, $scope){

        //  $scope.hello = "hello world";
        // $scope.posts = Post.query();
        var post_query = function(){
          Post.query().$promise.then(function(posts){
            $scope.posts = posts;
          });
        }
        $scope.newPost = new Post();

        $scope.addPost = function(newPost){
          newPost.$save();
          $scope.posts.push(newPost);
          $scope.newPost = new Post();
          $scope.posts = Post.query();
        }

        // when the user logs in, fetch the posts
        $rootScope.$on('auth:login-success', function(ev, user) {
          post_query();
        });

       // when the user logs out, remove the posts
       $rootScope.$on('auth:logout-success', function(ev) {
         $scope.posts = null;
       });

       // will get a "401 Unauthorized" if the user is not authenticated
        post_query();


       }]);
