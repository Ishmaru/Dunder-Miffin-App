(function() {
  'use strict';
  angular
    .module('dunderMiffinApp')
    .controller('AuthController', ['$scope', '$http', function($scope, $http) {
      $scope.auth = "Your Email Address";
      $scope.msg = "";
      $scope.user = {};
      $scope.validateEmail = function(){
        $scope.user = findUser($scope.auth);
        if(!$scope.user){
          $scope.msg = "Invalid Email";
        }else{
          $scope.msg = null;
        }
      };
      var findUser = function(email){
        for (var i = testApi.length - 1; i >= 0; i--) {
          if(testApi[i].email === $scope.auth){
            return testApi[i];
          }
        }
      }
    }]);
})();
