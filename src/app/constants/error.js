'use strict';

// =====================
// Constants
// =====================
(function() {
  angular.module('rsPokedex.constants')
    .constant('HTTP_ERRORS', {
      '401': 'You don\'t have permission',
      '403': 'Forbidden',
      '404': 'Not found',
      'DEFAULT': 'An unexpected error occuried'
    })
})();
