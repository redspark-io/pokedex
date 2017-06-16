'use strict';

// =====================
// Filter
// =====================
(function() {
  angular.module('rsPokedex.filters')
    .filter('pokemonFilter', pokemonFilter);

  /* @ngInject */
  function pokemonFilter() {

    return function(obj) {
      return obj;
    }

  }
})();