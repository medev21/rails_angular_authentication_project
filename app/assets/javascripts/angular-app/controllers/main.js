angular.module('angular-auth-app')
       .controller('MainCtrl',[
         'Post',
         '$rootScope',
         '$scope',
         '$location',
         function(Post, $rootScope, $scope, $location){

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
          $location.path("/");
          post_query();
        });

       // when the user logs out, remove the posts
       $rootScope.$on('auth:logout-success', function(ev) {
         $scope.posts = null;
       });

       $rootScope.$on('auth:registration-email-success', function(ev, message) {
          // alert("A registration email was sent to " + message.email);
          post_query();

          $location.path("/");
        });

        $rootScope.$on('auth:validation-success', function(ev, userData) {
          // console.log("validation event: ", ev);
          // console.log("validation: ", userData);
          post_query();

        });


       // will get a "401 Unauthorized" if the user is not authenticated
        post_query();


       }]);
