'use strict';

// =====================
// Mock
// =====================
(function() {

  angular.module('rsPokedex.mocks')
    .constant('RESPONSE_ERRORS_MOCK', responseErrorsMock());

  function responseErrorsMock() {

    return {
      '401': { status: 401 },
      '403': { status: 403 },
      '404': { status: 404 }
    }
  }

})();