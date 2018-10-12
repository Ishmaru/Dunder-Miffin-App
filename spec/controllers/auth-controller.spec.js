describe('AuthController', function() {
  var UserService, $scope, $location, $window, $http, $rootScope, $window, $state, $stateProvider, $urlRouterProvider;

  beforeEach(function() {
    module('dunderMifflinApp', ['ui.router']);
  });

  var email = 'Sincere@april.biz'
  var api = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }];

  beforeEach(inject(function(_UserService_, _$controller_, _$rootScope_, _$window_, _$scope_, _$http_, _$state_, _$stateProvider_, _$urlRouterProvider_) {
    console.log(_$rootScope_)
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $window = _$window_;
    $http = _$http_;
    $state = _$state_;
    $stateProvider = _$stateProvider_;
    $urlRouterProvider = _$urlRouterProvider_;
  }));

  describe('Authenticate', function() {
    it('Checks to see if user is returned via auth', function() {
      var $scope = $rootScope.$new();
      var controller = $controller('authController', { $scope: $scope });

      expect(findUser(email, api)).toEqual(api[0]);
    });
    it('Checks if Err Msg is properly sent', function(){
      var $scope = $rootScope.$new();
      var controller = $controller('authController', { $scope: $scope });

      expect(findUser($scope.msg)).toEqual("Invalid Email");
    })
  });
});
