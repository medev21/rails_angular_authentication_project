angular.module('angular-auth-app')
       .controller('MainCtrl',['Post', '$scope', function(Post, $scope){

        //  $scope.hello = "hello world";
        $scope.posts = Post.query();
        $scope.newPost = new Post();

        $scope.addPost = function(newPost){
          newPost.$save();
          $scope.posts.push(newPost);
          $scope.newPost = new Post();
          $scope.posts = Post.query();
        }


       }]);
