'use strict';

// =====================
// Service
// =====================
(function() {
  angular.module('rsPokedex.services')
    .service('generationService', generationService);

  /** @ngInject */
  function generationService($http, API_BASE_URL, generationAddIdTransformResponse) {

      return {

        get: function(id) {
          return $http({
            url: API_BASE_URL, // Ops!
            method: 'GET',
            transformResponse: generationAddIdTransformResponse
          })
        }

      }

  }
})();