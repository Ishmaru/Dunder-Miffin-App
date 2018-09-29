(function() {
  'use strict';
  angular
    .module('dunderMiffinApp')
    .controller('AuthController', ['UserService', '$window', '$scope', '$http', function(UserService, $window, $scope, $http) {
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
        if($scope.user){
          UserService.user = $scope.user;
          $window.location.href = '#!/users/'+$scope.user.id;
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
