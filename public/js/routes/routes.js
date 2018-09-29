(function (){
  'use strict'

  angular
  .module('dunderMiffinApp')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];


  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'public/templates/login.html',
        controller: 'AuthController',
        controllerAs: "vm"
      })
      .state('user', {
        url: '/users/:userId',
        templateUrl: 'public/templates/user.html',
        controller: 'UserController',
        controllerAs: "vm"
      })
      $urlRouterProvider.otherwise('/');
  }


})();
