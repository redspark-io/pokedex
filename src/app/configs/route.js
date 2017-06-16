'use strict';

// =====================
// Configs
// =====================
(function() {
  angular.module('rsPokedex.configs')
    .config(routesConfig);

  /** @ngInject */
  function routesConfig($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise(function ($injector) {
      var $state = $injector.get('$state');
      $state.go('main');
    });
  }
})();
