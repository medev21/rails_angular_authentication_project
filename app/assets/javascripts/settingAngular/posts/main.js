var app = angular.module('angular-auth-app');
       app.controller('PostCtrl',[
         'Post',
         '$rootScope',
         '$scope',
         '$location',
         function(Post, $rootScope, $scope, $location){

        //  $scope.hello = "hello world";
        // $scope.posts = Post.query();
        // var post_query = function(){
        //   Post.query().$promise.then(function(posts){
        //     $scope.posts = posts;
        //   });
        // }
        // $scope.newPost = new Post();
        //
        // $scope.addPost = function(newPost){
        //   newPost.$save();
        //   $scope.posts.push(newPost);
        //   $scope.newPost = new Post();
        //   $scope.posts = Post.query();
        // }

        // when the user logs in, fetch the posts

       }]);
