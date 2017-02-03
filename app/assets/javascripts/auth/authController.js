(function() {
  angular
    .module('jwtApp')
    .controller('AuthController', ['$scope', '$http', '$window', '$state', 'Auth', function($scope, $http, $window, $state, Auth) {

      if (Auth.loggedIn()) {
        $state.go('home');
      }

      $scope.user = {
        username: '',
        password: '',
        email: ''
      }

      $scope.registerUser = function() {
        var req = {
          method: 'POST',
          url: '/api/v1/signup',
          headers: {
            'Content-Type': 'application/json'
          },
          data: { user: $scope.user }
        }

        return $http(req)
          .then(response => Auth.storeToken(response.data.token))
          .then(() => $state.go('home'))
          .catch(err => console.log(err))
      }

    }]);
}())
