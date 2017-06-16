'use strict';

// =====================
// Routes
// =====================
(function() {
  angular.module('rsPokedex.routes')
    .config(mainRoutes);

  /** @ngInject */
  function mainRoutes($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        params: {
          search: {}
        },
        controller: 'mainController',
        templateUrl: 'app/features/main/template.html',
        resolve: {
          search: [],
          regions: []
        }
      });
  }
})();