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
      $urlRouterProvider.otherwise('/');
  }


})();
