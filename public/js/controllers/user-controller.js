(function() {
  'use strict';
  angular
    .module('dunderMiffinApp')
    .controller('UserController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
      $scope.user = null;
      var findPosts = function(id, idName, arr){
        var tempArr = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          if(arr[i][idName] === parseInt(id)){
            tempArr.push(arr[i]);
          }
        }
        return tempArr;
      }
      $scope.posts = findPosts($stateParams.userId, 'userId', testPosts);
    }]);
})();
