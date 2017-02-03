(function() {

  'use strict';

  angular
    .module('jwtApp')
    .factory('Auth', ['$window', function($window) {

      return {
        storeToken,
        loggedIn,
        currentUser,
      }

      function storeToken(token) {
        return $window.localStorage.setItem('token', token);
      }

      function loggedIn() {
        return !!currentUser()
      }

      function currentUser() {
        var token = $window.localStorage.getItem('token')
        if (token === null || token === '') {
          return null
        }
        /*
          TODO: have this decode the token with JWT and return the user info
        */
        return token;
      }

    }])
}());
