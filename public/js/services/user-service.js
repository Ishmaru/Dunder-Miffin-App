(function() {

  angular
    .module("dunderMiffinApp")
    .factory("UserService", UserService);

  UserService.$inject = [];

  function UserService() {
    var user = {};
    return {user};
  };
})();



