(function() {

  'user strict';

  angular
    .module('jwtApp', ['ui.router', 'templates'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'auth/signup.html',
          controller: 'AuthController'
        })

      $urlRouterProvider.otherwise('/home');
    }]);

}());
