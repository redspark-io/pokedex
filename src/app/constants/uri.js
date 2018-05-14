'use strict';

// =====================
// Constants
// =====================
(function() {
  angular.module('rsPokedex.constants')
    .constant('API_BASE_URL', 'http://pokeapi.salestock.net/api/v2/')
    .constant('SPRITE_BASE_URL', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png'); // .png
})();
