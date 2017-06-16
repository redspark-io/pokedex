'use strict';

// =====================
// Interceptor
// =====================
(function() {
  angular.module('rsPokedex.configs')
    .config(interceptor);

  /** @ngInject */
  function interceptor($httpProvider, $provide) {
    $provide.factory('requestInterceptor', function($injector, messageService, HTTP_ERRORS) {

      return {

        'request': function(config) {
          return config
        },

        'requestError': function(rejection) {
          return rejection
        },

        'response': function(response) {
          return response
        },

        'responseError': function(rejection) {
          return rejection
        }
      }
    });

    // =====================
    // Register interceptor
    // =====================
    $httpProvider.interceptors.push('requestInterceptor');
  }
})();