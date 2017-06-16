'use strict';

// =====================
// Controller
// =====================
(function() {
  angular.module('rsPokedex.controllers')
    .controller('mainController', mainController);

  /** @ngInject */
  function mainController($scope, $timeout, $state, regionService, generationService) {

    // Attributes
    $scope.attrs = {
      regions: regions.results,
      regionDetail: undefined,
      currentSearch: undefined
    }

    // Methods
    $scope.methods = {
      getRegionDetail: function(id) {}
    }

    // Init
    if (search) {
      $timeout(function() {
        $scope.methods.getRegionDetail(search);
      });
    }

  }
})();