(function() {

  angular
    .module("dunderMifflinApp")
    .factory("UserService", UserService);

  UserService.$inject = [];

  function UserService() {
    var user = {};
    return {user};
  };
})();



