(function() {

  'use strict';

  angular
    .module('jwtApp')
    .factory('Auth', ['$window', function($window) {

      return {
        storeToken,
        storeProfile,
        loggedIn,
        currentUser,
        logout,
      }

      function storeToken(token) {
        return $window.localStorage.setItem('token', token);
      }
      
      function storeProfile(profile) {
        return $window.localStorage.profile = JSON.stringify(profile);
      }

      function logout() {
        $window.localStorage.removeItem('token');
        $windwo.localStorage.removeItem('profile');
      }

      function loggedIn() {
        return !!currentUser()
      }

      function currentUser() {
        var token = $window.localStorage.token
        var profile = $window.localStorage.profile
        if (token === null || token === '' || token === undefined) {
          return null
        }
        /*
          TODO: have this decode the token with JWT and return the user info
        */
        return JSON.parse(profile);
      }

    }])
}());
