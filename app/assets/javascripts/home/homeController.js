(function() {
  angular
    .module('jwtApp')
    .controller('HomeController', ['$scope', '$state', 'Auth', function($scope, $state, Auth) {

      if (!Auth.loggedIn()) {
        $state.go('login');
      }

      $scope.currentUser = Auth.currentUser();

      $scope.logout = function() {
        Auth.logout()
        $state.reload();
      };

    }]);
}())
