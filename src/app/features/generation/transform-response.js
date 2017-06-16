'use strict';

// =====================
// Transform response
// =====================
(function() {
  angular.module('rsPokedex.services')
    .service('generationAddIdTransformResponse', generationAddIdTransformResponse);

  /** @ngInject */
  function generationAddIdTransformResponse() {
    return function(response) {

      var regex = new RegExp(/(\d+)\/$/);

      // Parse
      response = JSON.parse(response);

      // Add ID
      response.pokemon_species = response.pokemon_species.map(function(item) {
        item.id = regex.exec(item.url)[1];
        return item;
      });

      // Order by ID
      response.pokemon_species = response.pokemon_species.sort(function(c, n) {
        return c.id - n.id;
      });

      return response;

    }
  }
})();