(function() {
  'use strict';
  angular
    .module('dunderMiffinApp')
    .controller('UserController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
      $scope.user = null;
      var findUserPosts = function(userID, postArr){
        var tempPostArray = [];
        for (var i = postArr.length - 1; i >= 0; i--) {
          if(postArr[i].userId === parseInt(userID)){
            tempPostArray.push(postArr[i]);
          }
        }
        return tempPostArray;
      }
      $scope.posts = findUserPosts($stateParams.userId, testPosts);
    }]);
})();
