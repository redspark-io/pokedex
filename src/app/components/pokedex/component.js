'use strict';

// =====================
// Component
// =====================
angular.module('rsPokedex.components')
  .component('pokedexComponent', pokedexComponent());

/** @ngInject */
function pokedexComponent() {
  return {

    bindings: {},
    templateUrl: 'app/components/pokedex/template.html'
  };
}
