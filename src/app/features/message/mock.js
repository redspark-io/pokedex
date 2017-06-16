'use strict';

// =====================
// Mock
// =====================
(function() {

  angular.module('rsPokedex.mocks')
    .constant('MESSAGE_MOCK', messageMock());

  function messageMock() {

    return {
      'ERROR': { closeButton : true, timeOut : 6000 }
    }
  }

})();