'use strict';

// =====================
// Service
// =====================
(function() {
  angular.module('rsPokedex.services')
    .service('regionService', regionService);

  /** @ngInject */
  function regionService($http, API_BASE_URL) {
    return {

      getAll: function() {},

      get: function(id) {
        return $http({
          url: API_BASE_URL + 'region/' + id,
          method: 'GET'
        })
      }

    }
  }
})();