'use strict';

// =====================
// Configs
// =====================
(function() {
  angular.module('rsPokedex.configs')
    .config(messagesConfig);

  /** @ngInject */
  function messagesConfig(toastrConfig) {
    angular.extend(toastrConfig, {
      extendedTimeOut       : 0,
      preventOpenDuplicates : true
    });
  }
})();
