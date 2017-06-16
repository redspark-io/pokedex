'use strict';

// =====================
// Component
// =====================
angular.module('rsPokedex.components')
  .component('loaderComponent', loaderComponent());

/** @ngInject */
function loaderComponent() {
  return {

    bindings: {},
    templateUrl: 'app/components/loader/template.html',
    controller: ['$scope', function($scope) {}]

  };
}
