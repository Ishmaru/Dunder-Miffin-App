(function() {
  'use strict';
  angular
    .module('dunderMifflinApp')
    .controller('UserController', ['UserService', '$scope', '$http', '$window', '$state', '$stateParams', function(UserService, $scope, $http, $window, $state, $stateParams) {
      if(UserService.user.id != $stateParams.userId){
        $window.location.href = '#!';
      };
      var postArray;
      var commentArray;
      $scope.posts;
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
        postArray.map(function(post){
          post.active = false;
          post.comments = findPosts(post.id, 'postId', commentArray);
        });
        return postArray;
      }
      var setUrlQueryParams = function(dataType, idArray, idName, joinName){
        var tempIdArr = [];
        if(Array.isArray(idArray)){
          tempIdArr = idArray.map(post => String(post[idName]));
          tempIdArr = tempIdArr.join('&' + joinName + '=');
        } else {
          tempIdArr = String(idArray);
        }
          return 'http://jsonplaceholder.typicode.com/' + dataType + '?' + joinName + '=' + tempIdArr;
      }
      var getPosts = function(dataType, id, idName, joinName){
        $http({
          method: 'GET',
          url: setUrlQueryParams(dataType, id, idName, joinName)
        }).then(function successCallback(res) {
          if(idName == 'userId'){
            postArray = res.data;
            getPosts('comments', postArray, 'id', 'postId');
          } else {
            commentArray = res.data;
            $scope.posts = getPostCommentsObject();
          }
        }, function errorCallback(err) {
          $scope.msg = "Cannot Connect to Server";
        });
      }
      getPosts('posts', $scope.user.id, 'userId', 'userId');
    }]);
})();
