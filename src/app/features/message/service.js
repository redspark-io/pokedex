'use strict';

// =====================
// Service
// =====================
(function() {
  angular.module('rsPokedex.services')
    .service('messageService', messageService);

  /** @ngInject */
  function messageService($timeout, toastr) {

    return {

      error: function(body, title, timeout) {
        $timeout(function() {
          toastr.error(body, title, {
            closeButton : true,
            timeOut     : timeout || 6000
          });
        });
      }

    }
  }
})();