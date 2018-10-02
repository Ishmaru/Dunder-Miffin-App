(function() {
  'use strict';
  angular
    .module('dunderMifflinApp')
    .controller('AuthController', ['UserService', '$scope', '$state', '$http', function(UserService, $scope, $state, $http) {
      $scope.auth = "";
      $scope.msg = "";
      $scope.user = {};
      $scope.validateEmail = function(){
        $http({
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/users'
        }).then(function successCallback(res) {
          $scope.user = findUser($scope.auth, res.data);
          if(!$scope.user){
            $scope.msg = "Invalid Email";
          }else{
            $scope.msg = null;
          }
          if($scope.user){
            UserService.user = $scope.user;
            $state.go('user', {userId: $scope.user.id});
          }
        }, function errorCallback(err) {
          $scope.msg = "Cannot Connect to Server";
        });
      }
      var findUser = function(email, api){
        for (var i = api.length - 1; i >= 0; i--) {
          if(api[i].email === $scope.auth){
            return api[i];
          }
        }
      }
    }]);
})();
