(function() {
  'use strict';
  angular
    .module('dunderMifflinApp')
    .controller('UserController', ['UserService', '$scope', '$http', '$window', '$state', '$stateParams', function(UserService, $scope, $http, $window, $state, $stateParams) {
      if(UserService.user.id != $stateParams.userId){
        $window.location.href = '#!';
      };
      $scope.user = UserService.user;
      var findPosts = function(id, idName, arr){
        var tempArr = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          if(arr[i][idName] === parseInt(id)){
            tempArr.push(arr[i]);
          }
        }
        return tempArr;
      };
      var getPostCommentsObject = function(){
        var tempPostObj = findPosts($stateParams.userId, 'userId', testPosts);
        tempPostObj.map(function(post){
          post.comments = findPosts(post.id, 'postId', testComments);
        });
        return tempPostObj;
      }
      $scope.posts = getPostCommentsObject();
    }]);
})();
