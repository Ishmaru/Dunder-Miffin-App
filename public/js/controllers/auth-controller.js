(function() {
  'use strict';
  angular
    .module('dunderMiffinApp')
    .controller('AuthController', ['$scope', '$http', function($scope, $http) {
      $scope.auth = "Your Email Address";
      $scope.msg = "";
      $scope.user = {};
      $scope.validateEmail = function(){
        $scope.user = findUser($scope.auth, testApi);
        if(!$scope.user){
          $scope.msg = "Invalid Email";
        }else{
          $scope.msg = null;
        }
      };
      var findUser = function(email, api){
        for (var i = api.length - 1; i >= 0; i--) {
          if(api[i].email === $scope.auth){
            return api[i];
          }
        }
      }
    }]);
})();
